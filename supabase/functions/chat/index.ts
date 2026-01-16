import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const WEB3FORMS_KEY = "4383280e-d560-4a06-9700-fa688f582fbb";

// ✅ Owner WhatsApp
const OWNER_WHATSAPP_NUMBER = "919327420046";
const OWNER_WHATSAPP_LINK = `https://wa.me/${OWNER_WHATSAPP_NUMBER}`;

// ✅ Company contact
const COMPANY_EMAIL = "sales@shcglobaltrade.co.in";
const COMPANY_WEBSITE = "https://shcglobaltrade.co.in";

const SYSTEM_PROMPT = `
You are a multilingual AI assistant for SHC Global Trade (India) – an agricultural export company.

PRIMARY GOAL:
Help visitors with export inquiries, product info, packaging, MOQ, shipping, documents, and collecting leads.

CRITICAL RULES:
1) Always reply in the SAME LANGUAGE as the user message.
2) Keep replies professional, friendly, and concise (2–4 short lines).
3) If user asks to contact owner/human/live support, share WhatsApp link.
4) Never invent real-time data (live mandi prices, live time, live tracking). Be honest.
5) If user gives export inquiry details (product + quantity + destination), capture lead:
   - Confirm details
   - Ask packing size if missing
   - End reply with: [LEAD_CAPTURED]

BUSINESS INFO:
Company: SHC Global Trade - Premium agricultural exports from India

PRODUCTS:
- Basmati Rice:
  • Pusa 1121 (extra-long grain, aromatic)
  • Pusa 1509 (long grain, economical)
- Green Chilli:
  • Gauri variety (spicy, thick skin)
  • G9 variety (hot, thin skin)
- Banana:
  • Cavendish variety (sweet, export quality)

MOQ:
- Typically 1 container minimum (depends on destination and product)

PACKAGING:
- 5kg, 10kg, 25kg, 50kg bags
- Custom/private label packaging possible

SHIPPING:
- Worldwide shipping
- FOB / CIF options
- Full export documentation support

CERTIFICATIONS / DOCUMENTS:
- FSSAI, APEDA registered
- Phytosanitary certificate (as required)
- COA / Packing List / Invoice / Bill of Lading

PAYMENT TERMS (general guidance):
- Common: Advance / LC / TT (final depends on buyer and order)

HOW TO ANSWER COMMON QUESTIONS:
A) Products: explain clearly and offer to share price.
B) MOQ: mention container MOQ and ask destination.
C) Packaging: list sizes + custom options.
D) Shipping: confirm worldwide + ask destination port/country.
E) Export Price: ask Product + Quantity + Destination + Packing size (FOB/CIF).
F) Sample: confirm sample possible + ask details + courier account.
G) Documents: list key documents.
H) Owner / Contact: share WhatsApp link and ask for name & number.

MANDI / MARKET PRICE QUESTIONS:
If user asks local mandi rate (example: "green chilli price in Nashik mandi today"):
- Say you do not have live mandi data
- Mention prices vary daily by quality/season
- Offer export quotation if they share quantity + destination

GENERAL QUESTIONS (non-business):
- Greetings: greet back and offer help
- Time/date: explain you cannot check live time; mention IST (UTC+5:30) and suggest checking device clock
- If unrelated: politely redirect to export inquiry
`;

// ---------- Lead Email ----------
async function sendLeadEmail(conversationHistory: string) {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: "🤖 New Chatbot Lead - SHC Global Trade",
        from_name: "SHC Chatbot",
        to: COMPANY_EMAIL,
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

function extractConversation(messages: Array<{ role: string; content: string }>) {
  return messages
    .map((msg) => {
      const role = msg.role === "user" ? "Customer" : "Bot";
      return `${role}: ${msg.content}`;
    })
    .join("\n\n");
}

// ---------- Helpers ----------
function isOwnerRequest(text: string) {
  const t = text.toLowerCase();
  const keywords = [
    "owner",
    "bring owner",
    "bring owner online",
    "talk to owner",
    "connect owner",
    "manager",
    "human",
    "agent",
    "live support",
    "live chat",
    "call",
    "contact number",
    "whatsapp",
  ];
  return keywords.some((k) => t.includes(k));
}

function isTimeQuestion(text: string) {
  const t = text.toLowerCase().trim();
  // Match standalone "time" or time with context
  const timeKeywords = [
    "time",
    "what time",
    "current time",
    "time now",
    "now time",
    "time in india",
    "india time",
    "indian time",
    "ist time",
    "what is time",
    "tell me time",
    "show time",
    "kya time",
    "samay",
    "waqt"
  ];
  return timeKeywords.some((k) => t === k || t.includes(k));
}
function isGreeting(text: string) {
  const t = text.toLowerCase().trim();
  const greetings = ["hi", "hello", "hey", "hii", "hlo", "good morning", "good evening", "good afternoon"];
  return greetings.some((g) => t === g || t.startsWith(g + " "));
}

function isContactQuestion(text: string) {
  const t = text.toLowerCase();
  return (
    t.includes("contact") ||
    t.includes("email") ||
    t.includes("phone") ||
    t.includes("mobile") ||
    t.includes("call me") ||
    t.includes("whatsapp number")
  );
}

function isShippingQuestion(text: string) {
  const t = text.toLowerCase();
  return (
    t.includes("ship") ||
    t.includes("shipping") ||
    t.includes("worldwide") ||
    t.includes("export to") ||
    t.includes("delivery to")
  );
}

function isMandiPriceQuestion(text: string) {
  const t = text.toLowerCase();
  return (
    t.includes("mandi") ||
    t.includes("market price") ||
    t.includes("today price") ||
    t.includes("current price") ||
    t.includes("rate today") ||
    t.includes("nashik")
  );
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

    const lastUserMessage =
      messages?.slice()?.reverse()?.find((m: any) => m.role === "user")?.content ||
      "";

    // ✅ 1) Direct WhatsApp Owner reply
    if (lastUserMessage && isOwnerRequest(lastUserMessage)) {
      const directReply =
        `Sure! 😊\n\nYou can WhatsApp our owner here:\n${OWNER_WHATSAPP_LINK}\n\nOr share your Name + Mobile Number and we will call you back.`;

      return new Response(
        JSON.stringify({
          choices: [{ message: { role: "assistant", content: directReply } }],
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ✅ 2) Direct Time in India reply
    if (lastUserMessage && isTimeQuestion(lastUserMessage)) {
      const directReply =
        "India follows IST (UTC +5:30). ⏰ I can’t check live time here, but you can see the exact current time on your phone clock.";
      return new Response(
        JSON.stringify({
          choices: [{ message: { role: "assistant", content: directReply } }],
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ✅ 3) Direct Greeting reply
    if (lastUserMessage && isGreeting(lastUserMessage)) {
      const directReply =
        "Hello! 👋 Welcome to SHC Global Trade.\nHow can I help you today? (Rice / Green Chilli / Banana / MOQ / Shipping / Price)";
      return new Response(
        JSON.stringify({
          choices: [{ message: { role: "assistant", content: directReply } }],
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ✅ 4) Direct Contact reply
    if (lastUserMessage && isContactQuestion(lastUserMessage)) {
      const directReply =
        `You can contact SHC Global Trade here:\n📩 Email: ${COMPANY_EMAIL}\n📲 WhatsApp: ${OWNER_WHATSAPP_LINK}\n🌐 Website: ${COMPANY_WEBSITE}`;
      return new Response(
        JSON.stringify({
          choices: [{ message: { role: "assistant", content: directReply } }],
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ✅ 5) Direct Shipping reply
    if (lastUserMessage && isShippingQuestion(lastUserMessage)) {
      const directReply =
        "Yes, we ship worldwide 🌍\nPlease share your destination country/port and required quantity, and we will guide you with FOB/CIF options.";
      return new Response(
        JSON.stringify({
          choices: [{ message: { role: "assistant", content: directReply } }],
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ✅ 6) Direct Mandi price reply
    if (lastUserMessage && isMandiPriceQuestion(lastUserMessage)) {
      const directReply =
        "I don’t have live mandi/market price data (it changes daily by quality & season).\nIf you need our export price, please share product, quantity, destination country and packing size.";
      return new Response(
        JSON.stringify({
          choices: [{ message: { role: "assistant", content: directReply } }],
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ✅ AI response for everything else
    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          stream: false,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
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

    // ✅ Lead capture email
    if (assistantMessage.includes("[LEAD_CAPTURED]")) {
      const cleanAssistant = assistantMessage.replace("[LEAD_CAPTURED]", "").trim();

      const conversationWithResponse = [
        ...messages,
        { role: "assistant", content: cleanAssistant },
      ];

      console.log("Lead detected, sending email...");
      await sendLeadEmail(extractConversation(conversationWithResponse));

      return new Response(
        JSON.stringify({
          choices: [{ message: { role: "assistant", content: cleanAssistant } }],
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Normal response
    const cleanResponse = assistantMessage.replace("[LEAD_CAPTURED]", "").trim();

    return new Response(
      JSON.stringify({
        choices: [{ message: { role: "assistant", content: cleanResponse } }],
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Chat function error:", error);

    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
