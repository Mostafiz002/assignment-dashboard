import { Search, ChevronDown, Settings2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/ui/logo";

export default function Topbar() {
  return (
    <header className="flex w-full items-center justify-between px-0 pt-1 pb-4">
      {/* Left */}
      <Logo className="pl-2.5" />
      {/* Middle */}
      <div className="flex w-full max-w-2xl items-center gap-2 rounded-[20px] bg-white/40 p-1.25 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] border border-white/20">
        <div className="flex h-10 w-14 items-center justify-center rounded-[14px] bg-[#f2f4f1] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] transition-transform active:translate-y-0.5">
          <Search className="h-4 w-4 text-slate-500" />
        </div>

        <Input
          type="text"
          placeholder="Search by Contact, Account, Deal..."
          className="h-10 border-none bg-transparent text-sm placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
        />

        <button
          className="flex h-10 w-14 items-center justify-center rounded-[14px] bg-[#f5f5f0] cursor-pointer 
  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#efefe9] transition-transform active:translate-y-0.5"
        >
          <ChevronDown className="h-4 w-4 text-slate-500" />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 rounded-[20px] bg-white/40 p-1.25 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] border border-white/20">
        <div className="flex items-center gap-3 ">
          <Avatar className="h-10 w-13 rounded-[14px] overflow-hidden  ">
            <AvatarImage
              src="/avatar-emily.png"
              className="object-cover rounded-[14px]"
            />
            <AvatarFallback className="bg-[#F9E066] text-xs font-bold rounded-[14px]">
              EK
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col whitespace-nowrap">
            <span className="text-sm font-bold leading-tight text-slate-800">
              Emily King
            </span>
            <span className="text-[11px] font-medium text-slate-400">
              Realtor
            </span>
          </div>
        </div>
        <button
          className="flex h-10 w-13 items-center justify-center rounded-[14px] bg-[#f5f5f0] cursor-pointer 
  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#efefe9] transition-transform active:translate-y-0.5"
        >
          <Settings2 className="h-4 w-4 text-slate-500" />
        </button>
      </div>
    </header>
  );
}
