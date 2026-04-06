const Groq = require("groq-sdk");
const { getSystemPrompt, getUserPrompt } = require('../prompts/adGeneratorPrompt');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const executeAdPipeline = async (params) => {
    const systemPrompt = getSystemPrompt();
    const userPrompt = getUserPrompt(params);

    try {
        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            response_format: { type: "json_object" },
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt }
            ],
            temperature: 0.8,
        });

        const responseText = completion.choices[0].message.content;
        return JSON.parse(responseText);
    } catch (e) {
        console.error("Groq Generation Error:", e);
        throw new Error(e.message || "Failed to generate ad pipeline via Groq");
    }
};

module.exports = { executeAdPipeline };
