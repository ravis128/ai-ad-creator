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
        <div className="space-y-8 animate-fade-in">

            {/* Strategy */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">🧠 Strategy Angle</h2>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-blue-900">
                        {result.angle?.selectedAngle || 'Dynamic Strategy'}
                    </h3>
                    <p className="text-blue-800 mt-2 text-sm">
                        {result.angle?.reasoning || ''}
                    </p>
                </div>
            </div>

            {/* Script */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">🎬 Main Ad Script</h2>

                {/* 🔥 HANDLE BOTH STRING + ARRAY */}
                {typeof scriptData === "string" ? (
                    <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
                        {scriptData}
                    </p>
                ) : (
                    <div className="space-y-4">
                        {scriptData?.map((scene, idx) => (
                            <div key={idx} className="p-4 bg-gray-50 rounded-xl">
                                <p className="text-sm text-gray-500">{scene.timeframe}</p>
                                <p className="font-semibold">{scene.segment}</p>
                                <p>{scene.content}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Hooks + Metadata */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Hooks */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border">
                    <h2 className="text-xl font-bold mb-4">🎣 Hook Bank</h2>

                    {hooks.length > 0 ? (
                        hooks.map((hook, i) => (
                            <p key={i} className="mb-2 text-sm">• {hook}</p>
                        ))
                    ) : (
                        <p className="text-gray-400 text-sm">No hooks generated</p>
                    )}
                </div>

                {/* Metadata */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border">
                    <h2 className="text-xl font-bold mb-4">✨ Metadata</h2>

                    <div className="mb-4">
                        <h3 className="text-sm font-bold text-gray-400">Titles</h3>
                        {titles.map((t, i) => <p key={i}>• {t}</p>)}
                    </div>

                    <div className="mb-4">
                        <h3 className="text-sm font-bold text-gray-400">Thumbnail</h3>
                        {thumbnails.map((t, i) => <p key={i}>• {t}</p>)}
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-gray-400">CTA</h3>
                        {ctas.map((c, i) => <p key={i}>• {c}</p>)}
                    </div>
                </div>
            </div>

            {/* Video Prompts */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border">
                <h2 className="text-2xl font-bold mb-6">🎥 Video Prompts</h2>

                {videoPrompts.length > 0 ? (
                    videoPrompts.map((vp, i) => (
                        <div key={i} className="p-3 bg-black text-green-400 mb-2 rounded">
                            Scene {vp.sceneNumber}: {vp.prompt}
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400 text-sm">No video prompts</p>
                )}
            </div>

        </div>
    );
};

export default AdResult;