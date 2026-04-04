const { GoogleGenerativeAI, SchemaType } = require("@google/generative-ai");
const { getSystemPrompt, getUserPrompt } = require('../prompts/adGeneratorPrompt');

const genAI = new GoogleGenerativeAI(AIzaSyAxNQg4nnqxALhI3Uo9r5lQZKf - eQaILdU);

const executeAdPipeline = async (params) => {
    const systemInstruction = getSystemPrompt();
    const userPrompt = getUserPrompt(params);

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
        systemInstruction: systemInstruction,
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
                type: SchemaType.OBJECT,
                properties: {
                    angle: {
                        type: SchemaType.OBJECT,
                        properties: {
                            selectedAngle: { type: SchemaType.STRING },
                            reasoning: { type: SchemaType.STRING }
                        },
                        required: ["selectedAngle", "reasoning"]
                    },
                    mainScript: {
                        type: SchemaType.ARRAY,
                        items: {
                            type: SchemaType.OBJECT,
                            properties: {
                                timeframe: { type: SchemaType.STRING },
                                segment: { type: SchemaType.STRING },
                                content: { type: SchemaType.STRING }
                            },
                            required: ["timeframe", "segment", "content"]
                        }
                    },
                    scriptVariations: {
                        type: SchemaType.ARRAY,
                        items: {
                            type: SchemaType.OBJECT,
                            properties: {
                                variationName: { type: SchemaType.STRING },
                                script: { type: SchemaType.STRING }
                            },
                            required: ["variationName", "script"]
                        }
                    },
                    hooks: {
                        type: SchemaType.ARRAY,
                        items: { type: SchemaType.STRING }
                    },
                    ctas: {
                        type: SchemaType.ARRAY,
                        items: { type: SchemaType.STRING }
                    },
                    titles: {
                        type: SchemaType.ARRAY,
                        items: { type: SchemaType.STRING }
                    },
                    thumbnailTexts: {
                        type: SchemaType.ARRAY,
                        items: { type: SchemaType.STRING }
                    },
                    videoPrompts: {
                        type: SchemaType.ARRAY,
                        items: {
                            type: SchemaType.OBJECT,
                            properties: {
                                sceneNumber: { type: SchemaType.STRING },
                                prompt: { type: SchemaType.STRING }
                            },
                            required: ["sceneNumber", "prompt"]
                        }
                    }
                },
                required: ["angle", "mainScript", "scriptVariations", "hooks", "ctas", "titles", "thumbnailTexts", "videoPrompts"]
            }
        }
    });

    try {
        const result = await model.generateContent(userPrompt);
        const responseText = result.response.text();
        return JSON.parse(responseText);
    } catch (e) {
        console.error("Gemini Generation Error:", e);
        throw new Error(e.message || "Failed to parse Gemini JSON response");
    }
};

module.exports = { executeAdPipeline };
