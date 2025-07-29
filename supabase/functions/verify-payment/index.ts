import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[VERIFY-PAYMENT] ${step}${detailsStr}`);
};

// Product URL mapping
const getProductUrls = (productSlug: string) => {
  const urlMap = {
    'ai-grant-assistant': {
      accessUrl: 'https://grants.autonateai.com/auth',
      discordUrl: 'https://discord.gg/AeCEyZTy'
    },
    'lit-review-ai': {
      accessUrl: 'https://lit-review.autonateai.com/auth', 
      discordUrl: 'https://discord.gg/6vU46Y2P'
    },
    'data-pipeline-builder': {
      accessUrl: 'https://data-pipeline.autonateai.com/auth',
      discordUrl: 'https://discord.gg/CNMabU8t'
    }
  };
  
  return urlMap[productSlug] || {
    accessUrl: 'https://grants.autonateai.com/auth',
    discordUrl: 'https://discord.gg/AeCEyZTy'
  };
};

// Get Supabase client for specific tool
const getToolSupabaseClient = (productSlug: string) => {
  const clientMap = {
    'ai-grant-assistant': createClient(
      Deno.env.get("GRANTS_SUPABASE_URL") ?? "",
      Deno.env.get("GRANTS_SUPABASE_SERVICE_KEY") ?? "",
      { auth: { persistSession: false } }
    ),
    'lit-review-ai': createClient(
      Deno.env.get("LIT_REVIEW_SUPABASE_URL") ?? "",
      Deno.env.get("LIT_REVIEW_SUPABASE_SERVICE_KEY") ?? "",
      { auth: { persistSession: false } }
    ),
    'data-pipeline-builder': createClient(
      Deno.env.get("DATA_PIPELINE_SUPABASE_URL") ?? "",
      Deno.env.get("DATA_PIPELINE_SUPABASE_SERVICE_KEY") ?? "",
      { auth: { persistSession: false } }
    )
  };
  
  return clientMap[productSlug];
};

// Check if user exists in any tool's auth system and get their password
const findExistingUser = async (email: string) => {
  const toolSlugs = ['ai-grant-assistant', 'lit-review-ai', 'data-pipeline-builder'];
  
  for (const slug of toolSlugs) {
    const toolClient = getToolSupabaseClient(slug);
    if (!toolClient) continue;
    
    try {
      const { data: users } = await toolClient.auth.admin.listUsers();
      const existingUser = users.users?.find(user => user.email === email);
      
      if (existingUser) {
        // Get the password from our product_access table
        const mainClient = createClient(
          Deno.env.get("SUPABASE_URL") ?? "",
          Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
          { auth: { persistSession: false } }
        );
        
        const { data: access } = await mainClient
          .from("product_access")
          .select("password")
          .eq("username", email)
          .single();
        
        return { existingUser, password: access?.password, foundInTool: slug };
      }
    } catch (error) {
      logStep(`Error checking user in ${slug}`, error);
    }
  }
  
  return null;
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const { sessionId } = await req.json();
    if (!sessionId) {
      throw new Error("Missing sessionId");
    }

    logStep("Verifying session", { sessionId });

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      logStep("Payment not completed", { status: session.payment_status });
      return new Response(JSON.stringify({ 
        success: false, 
        message: "Payment not completed" 
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    logStep("Payment verified", { amount: session.amount_total });

    // Get purchase record
    const { data: purchase, error: purchaseError } = await supabaseClient
      .from("purchases")
      .select("*, products(*)")
      .eq("stripe_session_id", sessionId)
      .single();

    if (purchaseError || !purchase) {
      throw new Error("Purchase record not found");
    }

    // Check if already processed
    if (purchase.status === "completed") {
      logStep("Purchase already processed");
      return new Response(JSON.stringify({ 
        success: true, 
        message: "Purchase already processed" 
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // Update purchase status
    await supabaseClient
      .from("purchases")
      .update({ status: "completed" })
      .eq("id", purchase.id);

    // Get product URLs and use email as username
    const { accessUrl, discordUrl } = getProductUrls(purchase.products.slug);
    const username = purchase.email;
    
    // Check if user exists in any tool and get their existing password
    logStep("Checking for existing user", { email: username });
    const existingUserData = await findExistingUser(username);
    
    let password: string;
    let isExistingUser = false;
    
    if (existingUserData && existingUserData.password) {
      // User exists with password, use existing password
      password = existingUserData.password;
      isExistingUser = true;
      logStep("Using existing password", { foundInTool: existingUserData.foundInTool });
    } else {
      // Generate new password for new user
      password = Math.random().toString(36).substring(2, 15).toUpperCase();
      logStep("Generated new password for new user");
    }

    // Get the tool's Supabase client
    const toolClient = getToolSupabaseClient(purchase.products.slug);
    if (!toolClient) {
      throw new Error(`No Supabase client configured for product: ${purchase.products.slug}`);
    }

    // Create or update user in the tool's auth system
    try {
      if (isExistingUser) {
        // User exists, check if they're already in this tool's auth system
        const { data: existingInThisTool } = await toolClient.auth.admin.listUsers();
        const userInThisTool = existingInThisTool.users?.find(user => user.email === username);
        
        if (!userInThisTool) {
          // User exists in other tools but not this one, create them
          logStep("Creating user in new tool", { tool: purchase.products.slug });
          await toolClient.auth.admin.createUser({
            email: username,
            password: password,
            email_confirm: true
          });
        } else {
          logStep("User already exists in this tool", { tool: purchase.products.slug });
        }
      } else {
        // New user, create them in the tool's auth system
        logStep("Creating new user in tool auth", { tool: purchase.products.slug });
        await toolClient.auth.admin.createUser({
          email: username,
          password: password,
          email_confirm: true
        });
      }
    } catch (authError) {
      logStep("Error managing user in tool auth", { error: authError, tool: purchase.products.slug });
      // Continue even if auth creation fails - user can still access via credentials
    }

    // Store access credentials (handle duplicates gracefully)
    const { error: accessError } = await supabaseClient
      .from("product_access")
      .insert({
        purchase_id: purchase.id,
        username,
        password,
        access_url: accessUrl,
        is_active: true
      });

    if (accessError) {
      logStep("Error storing access credentials", accessError);
      // If it's a duplicate key error, update the existing record instead
      if (accessError.code === "23505") {
        logStep("Updating existing access credentials");
        const { error: updateError } = await supabaseClient
          .from("product_access")
          .update({
            purchase_id: purchase.id,
            password,
            access_url: accessUrl,
            is_active: true
          })
          .eq("username", username);
        
        if (updateError) {
          logStep("Error updating access credentials", updateError);
          throw new Error("Failed to update access credentials");
        }
      } else {
        throw new Error("Failed to store access credentials");
      }
    }

    logStep("User management completed", { username, isExistingUser, tool: purchase.products.slug });

    // Trigger email sending
    const emailResponse = await supabaseClient.functions.invoke('send-login-credentials', {
      body: {
        email: purchase.email,
        productTitle: purchase.products.title,
        username,
        password,
        accessUrl,
        discordUrl,
        purchaseId: purchase.id
      }
    });

    if (emailResponse.error) {
      logStep("Email sending failed", emailResponse.error);
      // Don't fail the verification if email fails
    } else {
      logStep("Email sent successfully");
    }

    return new Response(JSON.stringify({ 
      success: true,
      message: "Payment verified and credentials sent",
      username,
      accessUrl
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});