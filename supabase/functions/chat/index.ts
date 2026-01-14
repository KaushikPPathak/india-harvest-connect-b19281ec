import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const WEB3FORMS_KEY = "4383280e-d560-4a06-9700-fa688f582fbb";

const KNOWLEDGE_BASE = `You are a multilingual AI assistant for SHC Global Trade, an agricultural export company from India.

CRITICAL RULES:
1. Always respond in the SAME LANGUAGE the user writes in
2. Keep responses professional, friendly, and concise (max 2-3 sentences)
3. Support these languages: English, Hindi, Arabic, French, Spanish, Russian, Chinese, German, Portuguese
4. When user provides product inquiry with details (product, quantity, destination), ALWAYS include [LEAD_CAPTURED] at the END of your response

BUSINESS KNOWLEDGE:
- Company: SHC Global Trade - Premium agricultural exports from India
- Products:
  • Basmati Rice: Pusa 1121 (extra-long grain, aromatic), Pusa 1509 (long grain, economical)
  • Green Chilli: Gauri variety (spicy, thick skin), G9 variety (hot, thin skin)
  • Banana: Cavendish variety (sweet, export quality)

- Packaging: 5kg, 10kg, 25kg, 50kg bags + custom packaging available
- MOQ: Varies by product and destination country (typically 1 container minimum)
- Shipping: Worldwide with full export documentation support
- Certifications: FSSAI, APEDA registered, Phytosanitary certificates

FOR PRICE INQUIRIES, ASK:
- What product are you interested in?
- What quantity do you need?
- What is your destination country?
- What packing size do you prefer?

WHEN USER PROVIDES INQUIRY DETAILS (product + quantity + destination):
- Thank them for their inquiry
- Confirm the details you received
- Let them know your team will contact them soon
- Add [LEAD_CAPTURED] at the end

IF QUESTION IS NOT IN YOUR KNOWLEDGE, respond appropriately in the user's language:
- English: "Please share more details, our team will confirm and reply soon."
- Hindi: "कृपया विवरण साझा करें, हमारी टीम कन्फर्म करके जल्द जवाब देगी।"
- Arabic: "يرجى مشاركة التفاصيل، سيقوم فريقنا بالتأكيد والرد قريباً."
- French: "Veuillez partager les détails, notre équipe confirmera et répondra bientôt."
- Spanish: "Por favor comparta los detalles, nuestro equipo confirmará y responderá pronto."
- Russian: "Пожалуйста, поделитесь подробностями, наша команда подтвердит и ответит в ближайшее время."
- Chinese: "请分享详细信息，我们的团队将确认并尽快回复。"
- German: "Bitte teilen Sie Details mit, unser Team wird bestätigen und bald antworten."
- Portuguese: "Por favor, compartilhe os detalhes, nossa equipe confirmará e responderá em breve."`;

async function sendLeadEmail(conversationHistory: string) {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: "🤖 New Chatbot Lead - SHC Global Trade",
        from_name: "SHC Chatbot",
        to: "sales@shcglobaltrade.co.in",
        message: `New inquiry received via chatbot:\n\n${conversationHistory}`,
      }),
    });
    
    const result = await response.json();
    console.log("Lead email sent:", result);
    return result.success;
  } catch (error) {
    console.error("Failed to send lead email:", error);
    return false;
  }
}

function extractConversation(messages: Array<{role: string, content: string}>): string {
  return messages.map(msg => {
    const role = msg.role === 'user' ? 'Customer' : 'Bot';
    return `${role}: ${msg.content}`;
  }).join('\n\n');
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received chat request with messages:", JSON.stringify(messages));

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: KNOWLEDGE_BASE },
          ...messages,
        ],
        stream: false, // Changed to non-streaming to capture full response
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiResponse = await response.json();
    const assistantMessage = aiResponse.choices?.[0]?.message?.content || "";
    
    console.log("AI response:", assistantMessage);

    // Check if lead was captured and send email
    if (assistantMessage.includes("[LEAD_CAPTURED]")) {
      console.log("Lead detected, sending email...");
      const conversationWithResponse = [
        ...messages,
        { role: "assistant", content: assistantMessage.replace("[LEAD_CAPTURED]", "").trim() }
      ];
      await sendLeadEmail(extractConversation(conversationWithResponse));
    }

    // Remove the marker from the response sent to user
    const cleanResponse = assistantMessage.replace("[LEAD_CAPTURED]", "").trim();

    return new Response(JSON.stringify({
      choices: [{
        message: {
          role: "assistant",
          content: cleanResponse
        }
      }]
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
