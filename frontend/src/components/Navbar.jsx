export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 md:px-10 py-4 backdrop-blur-lg bg-white/70 border-b">
      <h1 className="font-bold text-xl">✨ AI Ad Creator Pro</h1>

      <div className="hidden md:flex gap-6 text-gray-600">
        <span>Create</span>
        <span>History</span>
        <span>Pricing</span>
        <span>Resources</span>
      </div>
    </div>
  );
}