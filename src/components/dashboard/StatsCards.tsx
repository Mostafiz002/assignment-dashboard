export default function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-4">

      <div className="bg-white p-4 rounded-xl">
        <p className="text-sm text-gray-500">Average Score</p>
        <h2 className="text-2xl font-bold">430</h2>
      </div>

      <div className="bg-white p-4 rounded-xl">
        <p className="text-sm text-gray-500">Deals Started</p>
        <h2 className="text-2xl font-bold">19</h2>
      </div>

      <div className="bg-white p-4 rounded-xl">
        <p className="text-sm text-gray-500">Won Deals</p>
        <h2 className="text-2xl font-bold">24</h2>
      </div>

    </div>
  );
}