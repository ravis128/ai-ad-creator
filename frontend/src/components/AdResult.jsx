import React from "react";

const AdResult = ({ result }) => {
  if (!result) return null;

  // ✅ SAFE FALLBACKS
  const scriptData = result.mainScript || result.script || [];
  const hooks = result.hooks || [];
  const titles = result.titles || [];
  const thumbnails = result.thumbnailTexts || [];
  const ctas = result.ctas || [];
  const videoPrompts = result.videoPrompts || [];

  // ✅ COPY FUNCTION
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  // ✅ DOWNLOAD FUNCTION
  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(result, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ad-script.json";
    a.click();
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-xl border mt-10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <h2 className="text-xl font-bold">✨ Ad Generated</h2>

        <div className="flex gap-2">
          <button
            onClick={() => copyToClipboard(JSON.stringify(result, null, 2))}
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Copy
          </button>

          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Download
          </button>
        </div>
      </div>

      {/* SCORE CARDS */}
      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-2xl font-bold text-green-600">98</p>
          <p className="text-xs text-gray-500">Hook Score</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-2xl font-bold text-blue-600">92</p>
          <p className="text-xs text-gray-500">Conversion</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-2xl font-bold text-purple-600">95</p>
          <p className="text-xs text-gray-500">Clarity</p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* STRATEGY */}
        <div className="p-5 bg-blue-50 rounded-2xl shadow-sm">
          <h3 className="font-bold mb-2">🧠 Strategy</h3>
          <p className="text-sm">
            {result.angle?.reasoning || "No strategy available"}
          </p>
        </div>

        {/* SCRIPT */}
        <div className="p-5 bg-white rounded-2xl shadow-sm border">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold">🎬 Script</h3>
            <button
              onClick={() =>
                copyToClipboard(JSON.stringify(scriptData, null, 2))
              }
              className="text-xs bg-gray-100 px-2 py-1 rounded"
            >
              Copy
            </button>
          </div>

          {typeof scriptData === "string" ? (
            <p className="text-sm whitespace-pre-line">{scriptData}</p>
          ) : (
            scriptData.map((s, i) => (
              <p key={i} className="text-sm mb-2">
                <strong>{s.timeframe}</strong>: {s.content}
              </p>
            ))
          )}
        </div>

        {/* VIDEO */}
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
          <div className="flex justify-between mb-3">
            <h3 className="font-bold">🎣 Hooks</h3>
            <button
              onClick={() => copyToClipboard(hooks.join("\n"))}
              className="text-xs bg-gray-100 px-2 py-1 rounded"
            >
              Copy
            </button>
          </div>

          {hooks.length > 0 ? (
            hooks.map((h, i) => (
              <p key={i} className="text-sm mb-1">• {h}</p>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No hooks</p>
          )}
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

      {/* VIDEO PREVIEW */}
      <div className="bg-white p-6 rounded-2xl shadow mt-6">
        <h2 className="text-xl font-bold mb-4">🎥 Preview</h2>

        <div className="rounded-xl overflow-hidden bg-black h-48 flex items-center justify-center text-white">
          ▶ Video Preview Coming Soon
        </div>

        <p className="text-sm text-gray-500 mt-2">
          AI video preview will be available soon 🚀
        </p>
      </div>

    </div>
  );
};

export default AdResult;