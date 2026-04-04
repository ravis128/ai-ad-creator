import React from 'react';

const AdResult = ({ result }) => {
  if (!result) return null;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Overview Block */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            🧠 Strategy Angle
        </h2>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <h3 className="font-bold text-blue-900">{result.angle?.selectedAngle || 'Dynamic Strategy'}</h3>
            <p className="text-blue-800 mt-2 text-sm leading-relaxed">{result.angle?.reasoning}</p>
        </div>
      </div>

      {/* Script Block */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            🎬 Main Ad Script
        </h2>
        <div className="space-y-4">
            {result.mainScript?.map((scene, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100">
                    <div className="sm:w-32 flex-shrink-0">
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full mb-1">
                            {scene.timeframe}
                        </span>
                        <br/>
                        <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">{scene.segment}</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-gray-800 font-medium text-lg leading-relaxed">{scene.content}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Script Variations Block */}
      {result.scriptVariations && result.scriptVariations.length > 0 && (
         <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
             <h2 className="text-xl font-bold text-gray-800 mb-4">🔁 Script Variations</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {result.scriptVariations.map((v, i) => (
                     <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                         <h3 className="font-bold text-gray-700 mb-2">{v.variationName}</h3>
                         <p className="text-sm text-gray-600">{v.script}</p>
                     </div>
                 ))}
             </div>
         </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hooks Bank */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4">🎣 Hook Bank</h2>
              <ul className="space-y-3">
                  {result.hooks?.map((hook, idx) => (
                      <li key={idx} className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-100 font-medium">"{hook}"</li>
                  ))}
              </ul>
          </div>

          {/* Titles & CTAs */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4">✨ Metadata</h2>
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Video Titles</h3>
                <ul className="space-y-2">
                    {result.titles?.map((title, idx) => (
                        <li key={idx} className="text-sm text-gray-800 font-semibold">• {title}</li>
                    ))}
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Thumbnail Text</h3>
                <ul className="space-y-2">
                    {result.thumbnailTexts?.map((t, idx) => (
                        <li key={idx} className="text-sm text-gray-700 italic">• {t}</li>
                    ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Calls to Action (CTA)</h3>
                <ul className="space-y-2">
                    {result.ctas?.map((cta, idx) => (
                        <li key={idx} className="text-sm text-gray-700 italic">• {cta}</li>
                    ))}
                </ul>
              </div>
          </div>
      </div>

      {/* Video Generation Prompts */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              🎥 Video AI Generation Prompts
          </h2>
          <div className="space-y-3">
              {result.videoPrompts?.map((vp, idx) => (
                  <div key={idx} className="p-4 bg-gray-900 border border-gray-800 rounded-xl flex flex-col md:flex-row gap-4">
                      <span className="text-pink-400 font-mono text-sm whitespace-nowrap">Scene {vp.sceneNumber}</span>
                      <code className="text-green-400 text-sm break-words">{vp.prompt}</code>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default AdResult;
