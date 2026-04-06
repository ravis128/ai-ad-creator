import React from 'react';

const AdResult = ({ result }) => {
    if (!result) return null;

    // 🔥 SAFE FALLBACKS
    const scriptData = result.mainScript || result.script;
    const hooks = result.hooks || [];
    const titles = result.titles || [];
    const thumbnails = result.thumbnailTexts || [];
    const ctas = result.ctas || [];
    const videoPrompts = result.videoPrompts || [];

    return (
        <div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-xl border mt-10">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">✨ Ad Generated</h2>

                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg">Copy</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Download</button>
                </div>
            </div>

            {/* TABS (UI ONLY for now) */}
            <div className="flex gap-4 mb-6">
                <button className="px-4 py-2 bg-blue-100 rounded-lg">Overview</button>
                <button className="px-4 py-2 bg-gray-100 rounded-lg">Hooks</button>
                <button className="px-4 py-2 bg-gray-100 rounded-lg">Metadata</button>
                <button className="px-4 py-2 bg-gray-100 rounded-lg">Video</button>
            </div>

            {/* GRID CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* STRATEGY */}
                <div className="p-5 bg-blue-50 rounded-2xl shadow-sm">
                    <h3 className="font-bold mb-2">🧠 Strategy</h3>
                    <p className="text-sm">
                        {result.angle?.reasoning || "No strategy"}
                    </p>
                </div>

                {/* SCRIPT */}
                <div className="p-5 bg-white rounded-2xl shadow-sm border">
                    <h3 className="font-bold mb-2">🎬 Script</h3>

                    {typeof scriptData === "string" ? (
                        <p className="text-sm whitespace-pre-line">{scriptData}</p>
                    ) : (
                        scriptData?.map((s, i) => (
                            <p key={i} className="text-sm mb-2">
                                <strong>{s.timeframe}</strong>: {s.content}
                            </p>
                        ))
                    )}
                </div>

                {/* VIDEO PROMPTS */}
                <div className="p-5 bg-purple-50 rounded-2xl shadow-sm">
                    <h3 className="font-bold mb-2">🎥 Video</h3>

                    {videoPrompts.length > 0 ? (
                        videoPrompts.map((v, i) => (
                            <p key={i} className="text-sm mb-2">
                                Scene {v.sceneNumber}: {v.prompt}
                            </p>
                        ))
                    ) : (
                        <p className="text-gray-400 text-sm">No video prompts</p>
                    )}
                </div>

            </div>

            {/* SECOND ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                {/* HOOKS */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border">
                    <h3 className="font-bold mb-3">🎣 Hooks</h3>
                    {hooks.map((h, i) => (
                        <p key={i} className="text-sm mb-1">• {h}</p>
                    ))}
                </div>

                {/* METADATA */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border">
                    <h3 className="font-bold mb-3">✨ Metadata</h3>

                    <p className="text-sm font-semibold mt-2">Titles</p>
                    {titles.map((t, i) => <p key={i}>• {t}</p>)}

                    <p className="text-sm font-semibold mt-3">Thumbnail</p>
                    {thumbnails.map((t, i) => <p key={i}>• {t}</p>)}

                    <p className="text-sm font-semibold mt-3">CTA</p>
                    {ctas.map((c, i) => <p key={i}>• {c}</p>)}
                </div>

            </div>

        </div>
    );
};

export default AdResult;