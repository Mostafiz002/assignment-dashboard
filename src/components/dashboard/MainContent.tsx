import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MainContent() {
  return (
    <div className="flex flex-col gap-6">
      {/* Profile Header */}
      <section className="relative flex items-end gap-8 pt-10">
        <div className="relative h-64 w-64 rounded-[40px] bg-slate-200 overflow-hidden">
           {/* Image goes here */}
           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white/80 backdrop-blur-md p-2 rounded-2xl">
              {/* Phone, Mail icons */}
           </div>
        </div>
        
        <div className="mb-4">
          <h2 className="text-4xl font-bold text-slate-900">Gregory Clark</h2>
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <p>Phone: (555) 123-4567</p>
            <p>Email: clark@gmail.com</p>
            <p>Location: New York, USA</p>
            <p>Specialty: Manager</p>
          </div>
        </div>
      </section>

      {/* Analytics Tabs */}
      <Tabs defaultValue="analytics" className="w-full">
        <TabsList className="bg-transparent gap-8 border-b rounded-none w-full justify-start h-auto pb-2">
          <TabsTrigger value="analytics" className="data-[state=active]:bg-white rounded-xl px-6 py-2">Analytics</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="summary">Summary</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Deal Started" value="19" color="bg-yellow-400" />
        <StatCard label="Lost Deals" value="25" color="bg-red-400" />
        <StatCard label="Won Deals" value="24" color="bg-green-400" />
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <p className="text-muted-foreground">{label}</p>
      <h3 className="text-5xl font-bold my-4">{value}</h3>
      <div className={`h-12 w-full rounded-full opacity-20 ${color}`} />
    </div>
  );
}