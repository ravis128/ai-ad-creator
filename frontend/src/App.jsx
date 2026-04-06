import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HistoryPanel from "./components/HistoryPanel";
import AdResult from "./components/AdResult";

function App() {
  // ✅ STATE
  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [platform, setPlatform] = useState("TikTok");
  const [goal, setGoal] = useState("Direct Sales");
  const [duration, setDuration] = useState("30s");
  const [tone, setTone] = useState("Balanced");

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ GENERATE FUNCTION
  const handleGenerate = async () => {
    if (!product || !audience) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://ai-video-script-generator-z07c.onrender.com/api/generate-ad",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product,
            audience,
            platform,
            goal,
            duration,
            tone,
          }),
        }
      );

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("ERROR:", err);
      alert("Something went wrong");
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

        {/* FLOATING ICONS */}
        <div className="absolute left-6 md:left-20 top-10 hidden md:block">
          <div className="bg-white shadow-lg p-4 rounded-xl rotate-6">📊</div>
        </div>

        <div className="absolute right-6 md:right-20 top-10 hidden md:block">
          <div className="bg-white shadow-lg p-4 rounded-xl -rotate-6">✨</div>
        </div>

        <p className="text-gray-500 mt-4">
          AI-powered scripts, hooks & video prompts
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10 mt-10">

        {/* FORM */}
        <div className="md:col-span-2 backdrop-blur-xl bg-white/70 p-6 rounded-3xl shadow-xl border">

          {/* INPUTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="What are you selling?"
              className="inputPremium"
            />

            <input
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              placeholder="Who is your audience?"
              className="inputPremium"
            />

          </div>

          {/* DROPDOWNS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">

            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="inputPremium"
            >
              <option>TikTok</option>
              <option>Instagram Reels</option>
            </select>

            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="inputPremium"
            >
              <option>Direct Sales</option>
              <option>Brand Awareness</option>
            </select>

            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="inputPremium"
            >
              <option>15s</option>
              <option>30s</option>
              <option>60s</option>
            </select>

            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="inputPremium"
            >
              <option>Balanced</option>
              <option>Aggressive</option>
              <option>Soft</option>
            </select>

          </div>

          {/* BUTTON */}
          <button
            onClick={handleGenerate}
            className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:scale-[1.02] transition"
          >
            {loading ? "⏳ Generating..." : "🚀 Generate Ad Pipeline"}
          </button>

          {/* BADGES */}
          <div className="flex flex-wrap gap-3 mt-4 justify-center text-sm text-gray-600">

            <span className="badge">🛡 Policy Safe</span>
            <span className="badge">⚡ High Converting</span>
            <span className="badge">🤖 AI Generated</span>
            <span className="badge">💳 No Credit Card</span>

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