import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface GenerateRequest {
  prompt: string;
  category?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: {
          headers: { Authorization: req.headers.get("Authorization")! },
        },
      }
    );

    const {
      data: { user },
    } = await supabaseClient.auth.getUser();

    if (!user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { data: profile } = await supabaseClient
      .from("profiles")
      .select("tier")
      .eq("id", user.id)
      .maybeSingle();

    const { data: credits } = await supabaseClient
      .from("credits")
      .select("credits_remaining, credits_used")
      .eq("user_id", user.id)
      .maybeSingle();

    if (!credits || credits.credits_remaining < 1) {
      return new Response(
        JSON.stringify({ error: "Insufficient credits" }),
        {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { prompt, category }: GenerateRequest = await req.json();

    if (!prompt || prompt.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Prompt is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const generatedScript = generateProfessionalScript(prompt, category, profile?.tier || "free");

    await supabaseClient.from("usage_logs").insert({
      user_id: user.id,
      action_type: "generate",
      credits_used: 1,
    });

    await supabaseClient
      .from("credits")
      .update({
        credits_used: (credits.credits_used || 0) + 1,
        credits_remaining: credits.credits_remaining - 1,
      })
      .eq("user_id", user.id);

    return new Response(
      JSON.stringify({
        script: generatedScript,
        creditsRemaining: credits.credits_remaining - 1,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

function generateProfessionalScript(prompt: string, category?: string, tier?: string): string {
  const lines: string[] = [];
  const promptLower = prompt.toLowerCase();
  
  if (promptLower.includes("intro") || promptLower.includes("introduction") || promptLower.includes("cold")) {
    lines.push("Hi {{firstName}},");
    lines.push("");
    lines.push("I noticed {{companyName}} is {{observation}}. We work with companies like yours to {{mainValue}}.");
    lines.push("");
    lines.push("Would you be open to a quick conversation about {{specificTopic}}?");
    lines.push("");
    lines.push("Best,");
    lines.push("{{yourName}}");
  } else if (promptLower.includes("follow") || promptLower.includes("check")) {
    lines.push("Hi {{firstName}},");
    lines.push("");
    lines.push("Following up on my previous message about {{topic}}.");
    lines.push("");
    lines.push("Is this something you'd be interested in discussing? Happy to share more details.");
    lines.push("");
    lines.push("Thanks,");
    lines.push("{{yourName}}");
  } else if (promptLower.includes("thank") || promptLower.includes("appreciation")) {
    lines.push("Hi {{firstName}},");
    lines.push("");
    lines.push("Thank you for {{action}}. I appreciate your time.");
    lines.push("");
    lines.push("{{additionalMessage}}");
    lines.push("");
    lines.push("Best regards,");
    lines.push("{{yourName}}");
  } else if (promptLower.includes("meeting") || promptLower.includes("schedule") || promptLower.includes("call")) {
    lines.push("Hi {{firstName}},");
    lines.push("");
    lines.push("Thanks for your interest in {{product}}.");
    lines.push("");
    lines.push("I have availability on {{dateOption1}} or {{dateOption2}}. Does either work for you?");
    lines.push("");
    lines.push("Looking forward to speaking,");
    lines.push("{{yourName}}");
  } else if (promptLower.includes("proposal") || promptLower.includes("quote")) {
    lines.push("Hi {{firstName}},");
    lines.push("");
    lines.push("As discussed, I've prepared a proposal for {{projectName}}.");
    lines.push("");
    lines.push("Key details:");
    lines.push("- Timeline: {{timeline}}");
    lines.push("- Investment: {{pricing}}");
    lines.push("- Deliverables: {{deliverables}}");
    lines.push("");
    lines.push("Let me know if you have any questions.");
    lines.push("");
    lines.push("Best,");
    lines.push("{{yourName}}");
  } else {
    lines.push("Hi {{firstName}},");
    lines.push("");
    lines.push("{{mainMessage}}");
    lines.push("");
    lines.push("{{callToAction}}");
    lines.push("");
    lines.push("Best,");
    lines.push("{{yourName}}");
  }

  return lines.join("\n");
}
