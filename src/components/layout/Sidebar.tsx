import {
  Calendar,
  Target,
  CircleDollarSign,
  Users,
  Share2,
  BarChart3,
  Bot,
  Phone,
  Mail,
  Grid2X2,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const topNav = [
    { id: "calendar", icon: Calendar },
    { id: "goals", icon: Target },
    { id: "finance", icon: CircleDollarSign },
    { id: "contacts", icon: Users },
    { id: "network", icon: Share2 },
    { id: "analytics", icon: BarChart3 },
    { id: "ai", icon: Bot },
  ];

  const bottomNav = [
    { id: "calls", icon: Phone },
    { id: "messages", icon: Mail, hasNotification: true },
    { id: "apps", icon: Grid2X2 },
  ];

  return (
    <aside className="flex flex-col items-center justify-between h-full pb-2">
      {/* Top */}
      <div className="flex flex-col items-center">
        {/* Collapse Button */}
        <button className="mb-3 bg-[#f9f9f9] text-slate-400 hover:bg-[#efefe9]  hover:text-slate-600 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] flex h-11 w-11 items-center justify-center rounded-[14px] transition-all duration-100 active:translate-y-px cursor-pointer">
          <ChevronLeft size={18} />
        </button>

        {/* Main Nav Items */}
        <nav className="flex flex-col items-center gap-[4]">
          {topNav.map((item, idx) => (
            <div key={item.id} className="flex flex-col items-center">
              <button
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-[14px] transition-all duration-200 active:translate-y-px cursor-pointer",
                  activeTab === item.id
                    ? "bg-slate-800 text-white shadow-lg scale-105"
                    : "bg-[#f9f9f9]  text-slate-400 hover:bg-[#efefe9]  hover:text-slate-600 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] ",
                )}
              >
                <item.icon
                  size={18}
                  strokeWidth={activeTab === item.id ? 2 : 1.5}
                />
              </button>
              <div className="h-3 flex items-center justify-center w-full">
                {activeTab === item.id ? (
                  // Active Dash
                  <div className="h-0.75 w-3 bg-slate-800 rounded-full" />
                ) : (
                  idx !== topNav.length - 1 && (
                    <div className="h-0.5 w-3 bg-slate-300/10 rounded-full" />
                  )
                )}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom */}
      <div className="mt-4 flex flex-col items-center gap-1 rounded-[20px] bg-white p-1.5 shadow-sm ">
        {bottomNav.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <button
              className={cn(
                "relative flex h-11 w-11 items-center justify-center rounded-[16px] transition-all duration-200 active:translate-y-px cursor-pointer bg-[#f5f5f0]  text-slate-600 hover:bg-[#efefe9]  hover:text-slate-600",
              )}
            >
              <item.icon size={18} strokeWidth={1.5} />
              {item.hasNotification && (
                <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-[#F9E066] border-2 border-white shadow-sm" />
              )}
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}
