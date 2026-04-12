import {
  Phone,
  MessageSquare,
  Mail,
  Briefcase,
  MapPin,
  AtSign,
  RotateCcw,
  Undo2,
  Redo2,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfileHeader() {
  return (
    <section className="relative w-full">
      {/* Top Utility Buttons */}
      <div className="flex gap-2 mb-5">
        <TopUtilityBtn icon={<Undo2 size={16} />} />
        <TopUtilityBtn icon={<Redo2 size={16} />} />
        <TopUtilityBtn icon={<RotateCcw size={16} />} />
      </div>

      <div className="flex items-start gap-6 sm:gap-8 lg:gap-10">
        {/* Left: Profile Image */}
        <div className="relative shrink-0">
          <div className="h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-[18px] overflow-hidden bg-[#d8dfd9]">
            <img
              src="https://i.pravatar.cc/300?u=gregory"
              alt="Gregory Clark"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Floating Action Bar */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 bg-[#e3e6e1] p-1 rounded-[14px] shadow-md border border-white/60 whitespace-nowrap">
            <ActionBtn icon={<Phone size={15} />} />
            <ActionBtn icon={<MessageSquare size={15} />} />
            <ActionBtn icon={<Mail size={15} />} />
            <ActionBtn icon={<Briefcase size={15} />} />
          </div>
        </div>

        {/* Right: Info + Tabs */}
        <div className="flex-1 flex flex-col min-h-48 sm:min-h-56 lg:min-h-64 pt-1">
          <div className="flex items-center justify-between">
            <h2 className="text-[22px] sm:text-[26px] font-bold text-slate-800 tracking-tight">
              Gregory Clark
            </h2>
            
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <InfoItem icon={<Phone size={15} />} label="Phone number" value="(555) 123-4567" />
            <InfoItem icon={<AtSign size={15} />} label="Email" value="clark@gmail.com" />
            <InfoItem icon={<MapPin size={15} />} label="Location" value="New York, USA" />
            <InfoItem icon={<Briefcase size={15} />} label="Specialty" value="Manager" />
          </div>

          <div className="mt-auto pt-4">
            <Tabs defaultValue="analytics" className="w-full">
              <TabsList className="relative h-auto bg-transparent p-0 gap-0 justify-start rounded-none w-full border-none">
                {/* Bottom divider */}
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-slate-200" />

                {["analytics", "general", "summary"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="
                      relative z-10 capitalize
                      px-5 sm:px-8 py-2.5
                      text-[13px] font-bold
                      rounded-t-[13px] rounded-b-none
                      border-0 shadow-none outline-none ring-0
                      transition-colors
                      data-[state=active]:bg-white
                      data-[state=active]:text-slate-800
                      data-[state=active]:shadow-[inset_0_0_0_1.5px_#e2e8f0,0_1.5px_0_0_#fff]
                      data-[state=inactive]:bg-transparent
                      data-[state=inactive]:text-slate-400
                      data-[state=inactive]:shadow-none
                    "
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

function TopUtilityBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="bg-white/80 text-slate-500 hover:bg-white hover:text-slate-700 shadow-[0_2px_8px_rgba(0,0,0,0.10)] flex h-10 w-10 items-center justify-center rounded-[12px] transition-all duration-100 active:translate-y-px cursor-pointer border border-white/60">
      {icon}
    </button>
  );
}

function ActionBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="h-9 w-9 flex items-center justify-center rounded-[11px] bg-[#cdd5ce] text-slate-700 cursor-pointer hover:bg-white transition-colors">
      {icon}
    </button>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 shrink-0 rounded-[12px] bg-white/70 flex items-center justify-center text-slate-500 shadow-[0_2px_8px_rgba(0,0,0,0.09)] border border-white/50">
        {icon}
      </div>
      <div>
        <p className="text-[10px] text-slate-400 tracking-wider leading-tight uppercase">
          {label}
        </p>
        <p className="text-[13px] font-bold text-slate-700 leading-tight mt-0.5">
          {value}
        </p>
      </div>
    </div>
  );
}