const getSystemPrompt = () => {
    return `You are an AI Ad Script Generator operating inside an automated workflow system. 
Your goal is to act as a performance marketer + creative strategist, optimizing for conversion natively on platforms like TikTok, Instagram, and YouTube.

You must follow these rules:
1. Use AIDA and PAS frameworks.
2. Prioritize emotional triggers over features.
3. Obey the selected Tone Intensity and Auto-Clean safety layer (avoid offensive language if the tone is balanced or safe).
4. Do not use generic marketing phrases. Keep language human and platform-native.`;
}

const getUserPrompt = (params) => {
    return `Create a high-converting video ad script pipeline utilizing the following parameters:
- Product: ${params.product}
- Audience: ${params.audience}
- Platform: ${params.platform}
- Goal: ${params.goal}
- Duration: ${params.duration}
- Tone: ${params.tone}

Please generate an output format exactly matching the JSON schema provided. 
If the tone is 'Aggressive', apply pattern interrupts but avoid policy-violating insults. If 'Balanced/Soft', keep it brand-friendly while remaining persuasive.`;
};

module.exports = { getSystemPrompt, getUserPrompt };
