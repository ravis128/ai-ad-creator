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

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* PRODUCT */}
                <div className="col-span-1 md:col-span-2 flex flex-col">
                    <label className="mb-2 text-sm font-semibold text-gray-700">
                        1. What are you selling?
                    </label>
                    <input 
                        required
                        type="text" 
                        name="product"
                        autoComplete="off"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="e.g. A SaaS tool for automating Instagram DM sales"
                    />
                </div>
                
                {/* AUDIENCE */}
                <div className="col-span-1 md:col-span-2 flex flex-col">
                    <label className="mb-2 text-sm font-semibold text-gray-700">
                        2. Who is your audience?
                    </label>
                    <input 
                        required
                        type="text" 
                        name="audience"
                        autoComplete="off"
                        value={formData.audience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="e.g. Students, creators, business owners"
                    />
                </div>

                {/* PLATFORM */}
                <div className="flex flex-col">
                    <label className="mb-2 text-sm font-semibold text-gray-700">
                        Platform
                    </label>
                    <select 
                        name="platform" 
                        value={formData.platform} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    >
                        <option>TikTok</option>
                        <option>Instagram Reels</option>
                        <option>YouTube Shorts</option>
                        <option>Facebook Ads</option>
                    </select>
                </div>

                {/* GOAL */}
                <div className="flex flex-col">
                    <label className="mb-2 text-sm font-semibold text-gray-700">
                        Goal
                    </label>
                    <select 
                        name="goal" 
                        value={formData.goal} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    >
                        <option>Direct Sales</option>
                        <option>Lead Generation</option>
                        <option>Brand Awareness</option>
                    </select>
                </div>

                {/* DURATION */}
                <div className="flex flex-col">
                    <label className="mb-2 text-sm font-semibold text-gray-700">
                        Duration
                    </label>
                    <select 
                        name="duration" 
                        value={formData.duration} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    >
                        <option>15s</option>
                        <option>30s</option>
                        <option>60s</option>
                    </select>
                </div>

                {/* TONE */}
                <div className="flex flex-col">
                    <label className="mb-2 text-sm font-semibold text-gray-700">
                        Tone Intensity
                    </label>
                    <select 
                        name="tone" 
                        value={formData.tone} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    >
                        <option>Soft (Brand Friendly)</option>
                        <option>Balanced</option>
                        <option>Aggressive (Direct Response)</option>
                    </select>
                </div>
            </div>

            {/* BUTTON */}
            <div className="pt-2">
                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 transition"
                >
                    {loading ? 'Generating Pipeline...' : '🚀 Generate Ad Pipeline'}
                </button>
            </div>

        </form>
    );
};

export default AdInputForm;