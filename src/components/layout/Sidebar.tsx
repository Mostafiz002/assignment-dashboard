export default function Sidebar() {
  return (
    <div className="w-20 bg-white border-r flex flex-col items-center py-4 gap-6">
      {/* Logo */}
      <div className="w-10 h-10 bg-black rounded-full" />

      {/* Nav icons */}
      <div className="flex flex-col gap-4 mt-6">
        <div className="w-8 h-8 bg-gray-200 rounded-md" />
        <div className="w-8 h-8 bg-gray-200 rounded-md" />
        <div className="w-8 h-8 bg-gray-200 rounded-md" />
      </div>
    </div>
  );
}