import React, { useState } from 'react';

const AdInputForm = ({ onSubmit, loading }) => {
    const [formData, setFormData] = useState({
        product: '',
        audience: '',
        platform: 'TikTok',
        goal: 'Direct Sales',
        duration: '30s',
        tone: 'Balanced'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">1. What are you selling?</label>
                    <input 
                        required
                        type="text" 
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        placeholder="e.g. A SaaS tool for automating Instagram DM sales"
                    />
                </div>
                
                <div className="col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">2. Who is your audience?</label>
                    <input 
                        required
                        type="text" 
                        name="audience"
                        value={formData.audience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        placeholder="e.g. Small business owners, digital creators"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Platform</label>
                    <select name="platform" value={formData.platform} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                        <option>TikTok</option>
                        <option>Instagram Reels</option>
                        <option>YouTube Shorts</option>
                        <option>Facebook Ads</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Goal</label>
                    <select name="goal" value={formData.goal} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                        <option>Direct Sales</option>
                        <option>Lead Generation</option>
                        <option>Brand Awareness</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
                    <select name="duration" value={formData.duration} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                        <option>15s</option>
                        <option>30s</option>
                        <option>60s</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tone Intensity</label>
                    <select name="tone" value={formData.tone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                        <option>Soft (Brand Friendly)</option>
                        <option>Balanced</option>
                        <option>Aggressive (Direct Response)</option>
                    </select>
                </div>
            </div>

            <div className="pt-4">
                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-md text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
                >
                    {loading ? 'Generating Pipeline...' : '🚀 Generate Ad Pipeline'}
                </button>
            </div>
        </form>
    );
};

export default AdInputForm;
