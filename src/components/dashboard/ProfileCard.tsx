export default function ProfileCard() {
  return (
    <div className="bg-white rounded-xl p-4 flex gap-4">
      
      {/* Avatar */}
      <div className="w-24 h-24 bg-gray-200 rounded-xl" />

      {/* Info */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold">Gregory Clark</h2>
        <p className="text-sm text-gray-500">Manager</p>

        <div className="mt-2 text-sm text-gray-600">
          Email: clark@gmail.com <br />
          Location: New York, USA
        </div>
      </div>

    </div>
  );
}