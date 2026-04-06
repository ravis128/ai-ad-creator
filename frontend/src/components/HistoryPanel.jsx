export default function HistoryPanel() {
  return (
    <div className="hidden md:block backdrop-blur-xl bg-white/70 p-6 rounded-3xl shadow-xl border">
      <h2 className="font-bold mb-4">History</h2>

      {["Bags", "Skincare", "Course"].map((item, i) => (
        <div key={i} className="p-3 bg-white rounded-xl mb-2 shadow-sm hover:scale-[1.02] transition">
          {item}
        </div>
      ))}
    </div>
  );
}