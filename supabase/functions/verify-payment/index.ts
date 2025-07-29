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
    const password = Math.random().toString(36).substring(2, 15).toUpperCase();

    // Store access credentials
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
      throw new Error("Failed to store access credentials");
    }

    logStep("Credentials generated", { username });

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