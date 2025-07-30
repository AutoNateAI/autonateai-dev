import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";
import React from "npm:react@18.3.1";
import { renderAsync } from "npm:@react-email/components@0.0.22";
import LoginCredentialsEmail from "./_templates/login-credentials-email.tsx";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[SEND-LOGIN-CREDENTIALS] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) throw new Error("RESEND_API_KEY is not set");

    const { email, productTitle, username, password, accessUrl, discordUrl, purchaseId } = await req.json();

    if (!email || !productTitle || !username || !password || !accessUrl || !discordUrl) {
      throw new Error("Missing required email parameters");
    }

    logStep("Email parameters validated", { email, productTitle, username });

    const resend = new Resend(resendKey);

    // Render the email template
    const html = await renderAsync(
      React.createElement(LoginCredentialsEmail, {
        productTitle,
        username,
        password,
        accessUrl,
        discordUrl,
        purchaseId
      })
    );

    logStep("Email template rendered");

    // Send the email
    const emailResponse = await resend.emails.send({
      from: 'Research Tools <onboarding@resend.dev>',
      to: [email],
      subject: `Your ${productTitle} Login Credentials - Access Granted!`,
      html,
    });

    if (emailResponse.error) {
      logStep("Resend error", emailResponse.error);
      throw emailResponse.error;
    }

    logStep("Email sent successfully", { emailId: emailResponse.data?.id });

    return new Response(JSON.stringify({ 
      success: true,
      emailId: emailResponse.data?.id
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