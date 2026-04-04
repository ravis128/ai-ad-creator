const { executeAdPipeline } = require('../services/aiService');

const generateAd = async (req, res) => {
    const { product, audience, platform, goal, duration, tone } = req.body;

    // Validate inputs
    if (!product || !audience || !platform || !goal) {
        return res.status(400).json({ error: 'Missing required fields (product, audience, platform, goal)' });
    }

    try {
        // Execute the AI pipeline
        const result = await executeAdPipeline({
            product,
            audience,
            platform,
            goal,
            duration: duration || '30s',
            tone: tone || 'Balanced'
        });

        return res.status(200).json(result);
    } catch (error) {
        console.error('Error generating ad:', error);
        return res.status(500).json({ error: 'AI Error: ' + (error.message || 'Unknown server error') });
    }
};

module.exports = { generateAd };
