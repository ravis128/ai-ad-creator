import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HistoryPanel from "./components/HistoryPanel";
import AdResult from "./components/AdResult";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://ai-video-script-generator-z07c.onrender.com/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          product: "Bags",
          audience: "Students",
          platform: "TikTok",
          goal: "Direct Sales",
          duration: "30s",
          tone: "Balanced"
        })
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">

      <Navbar />

      {/* HERO */}
      <div className="relative text-center mt-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Create High-Converting{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Video Ads
          </span>{" "}
          in Seconds
        </h1>

        {/* 🔥 FLOATING ICON LEFT */}
  <div className="absolute left-6 md:left-20 top-10 hidden md:block">
    <div className="bg-white shadow-lg p-4 rounded-xl rotate-6">
      📊
    </div>
  </div>

  {/* 🔥 FLOATING ICON RIGHT */}
  <div className="absolute right-6 md:right-20 top-10 hidden md:block">
    <div className="bg-white shadow-lg p-4 rounded-xl -rotate-6">
      ✨
    </div>
  </div>

        <p className="text-gray-500 mt-4">
          AI-powered scripts, hooks & video prompts
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10 mt-10">

        {/* FORM */}
        <div className="md:col-span-2 backdrop-blur-xl bg-white/70 p-6 rounded-3xl shadow-xl border">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input placeholder="What are you selling?" className="inputPremium" />
    <input placeholder="Who is your audience?" className="inputPremium" />
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
    <select className="inputPremium"><option>TikTok</option></select>
    <select className="inputPremium"><option>Direct Sales</option></select>
    <select className="inputPremium"><option>30s</option></select>
    <select className="inputPremium"><option>Balanced</option></select>
  </div>

  {/* BUTTON */}
  <button
    onClick={handleGenerate}
    className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:scale-[1.02] transition"
  >
    {loading ? "⏳ Generating..." : "🚀 Generate Ad Pipeline"}
  </button>

  {/* ✅ BADGES (FIXED POSITION) */}
  <div className="flex flex-wrap gap-3 mt-4 justify-center text-sm text-gray-600">

    <span className="px-3 py-1 bg-white/80 backdrop-blur rounded-full shadow-sm border">
      🛡 Policy Safe
    </span>

    <span className="px-3 py-1 bg-white/80 backdrop-blur rounded-full shadow-sm border">
      ⚡ High Converting
    </span>

    <span className="px-3 py-1 bg-white/80 backdrop-blur rounded-full shadow-sm border">
      🤖 AI Generated
    </span>

    <span className="px-3 py-1 bg-white/80 backdrop-blur rounded-full shadow-sm border">
      💳 No Credit Card
    </span>

  </div>

</div>

        {/* HISTORY */}
        <HistoryPanel />

      </div>

      {/* RESULT */}
      <div className="px-4 md:px-10 mt-10">
        {result && <AdResult result={result} />}
      </div>

    </div>
  );
}

export default App;