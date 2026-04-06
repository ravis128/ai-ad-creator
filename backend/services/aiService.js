const Groq = require("groq-sdk");
const { getSystemPrompt, getUserPrompt } = require('../prompts/adGeneratorPrompt');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const executeAdPipeline = async (params) => {
  const systemPrompt = getSystemPrompt();
  const userPrompt = getUserPrompt(params);

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // ✅ stable
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.7,
    });

    const responseText = completion.choices[0].message.content;

    // 🔥 FIX: CLEAN + PARSE JSON
    try {
      const cleaned = responseText
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const parsed = JSON.parse(cleaned);

      return parsed;

    } catch (err) {
      console.error("❌ JSON Parse Error:", err);

      return {
        error: "Invalid JSON from AI",
        raw: responseText
      };
    }

  } catch (e) {
    console.error("❌ Groq Generation Error:", e);

    throw new Error(e.message || "Failed to generate ad pipeline via Groq");
  }
};

module.exports = { executeAdPipeline };