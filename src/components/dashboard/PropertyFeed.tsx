import { Search, Filter, Calendar, Layers, CloudDownload } from "lucide-react";

export default function PropertyFeed() {
  const properties = [
    {
      id: 1,
      address: "23345 Brightwood Cottage",
      city: "New York, OR 97477",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    }
  ];

  return (
    <div className="space-y-6">
      {/* Search and Utility Bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          {/* Search Input */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-white/50 border border-white/60 rounded-[14px] py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all"
            />
          </div>
          {/* Filter Button */}
          <button className="flex h-10 w-13 items-center justify-center rounded-[14px] bg-[#f5f5f0] cursor-pointer 
  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#efefe9] transition-transform active:translate-y-0.5  text-slate-500">
            <Filter size={18} />
          </button>
        </div>

        {/* Right Side Utility Buttons */}
        <div className="flex items-center gap-2">
          <UtilityButton icon={<Calendar size={18} />} />
          <UtilityButton icon={<Layers size={18} />} />
          <UtilityButton icon={<CloudDownload size={18} />} />
        </div>
      </div>

      {/* Property List */}
      <div className="grid grid-cols-1 gap-6">
        {properties.map(p => (
          <div key={p.id} className="group bg-white/40 rounded-[14px] p-2 border border-white/50 flex gap-8 items-center hover:bg-white transition-all cursor-pointer">
            <div className="h-48 w-80 rounded-[12px] overflow-hidden shadow-sm">
              <img src={p.image} alt={p.address} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-800">{p.address}</h3>
              <p className="text-lg font-medium text-slate-400 mt-1">{p.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UtilityButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="flex h-10 w-13 items-center justify-center rounded-[14px] bg-[#f5f5f0] cursor-pointer 
  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#efefe9] transition-transform active:translate-y-0.5  text-slate-500">
      {icon}
    </button>
  );
}