import { Search, Settings2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Topbar() {
  return (
    <header className="flex w-full items-center justify-between px-2 py-2">
      {/* 1. Left: Logo Area */}
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent border-2 border-slate-900">
           {/* Simple 'O' Logo from screenshot */}
           <div className="h-2 w-2 rounded-full bg-slate-900" />
        </div>
      </div>

      {/* 2. Middle: Search Bar (Pill Shape) */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <Input
          type="text"
          placeholder="Search by Contact, Account, Deal..."
          className="h-12 w-full rounded-full border-none bg-white/60 pl-12 shadow-sm transition-all focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-slate-200"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
           <kbd className="hidden rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 sm:inline-block">
             ⌘ K
           </kbd>
        </div>
      </div>

      {/* 3. Right: User Info */}
      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm hover:bg-slate-50 transition-colors">
          <Settings2 className="h-5 w-5 text-slate-600" />
        </button>
        
        <div className="flex items-center gap-3 rounded-full bg-white p-1 pr-4 shadow-sm">
          <Avatar className="h-9 w-9 border-2 border-slate-50">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>EK</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-xs font-bold leading-none text-slate-900">Emily King</span>
            <span className="text-[10px] font-medium text-slate-400">Realtor</span>
          </div>
        </div>
      </div>
    </header>
  );
}