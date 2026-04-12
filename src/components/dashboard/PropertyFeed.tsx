export default function PropertyFeed() {
  const properties = [
    {
      id: 1,
      address: "23345 Brightwood Cottage",
      city: "New York, OR 97477",
      image: "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-6">
      {properties.map(p => (
        <div key={p.id} className="group bg-white/40 rounded-[40px] p-4 border border-white/50 flex gap-8 items-center hover:bg-white transition-all cursor-pointer">
          <div className="h-48 w-80 rounded-[32px] overflow-hidden shadow-lg">
            <img src={p.image} alt={p.address} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-800">{p.address}</h3>
            <p className="text-xl font-medium text-slate-400 mt-2">{p.city}</p>
          </div>
        </div>
      ))}
    </div>
  );
}