"use client";

import { Share2, FolderDown, ArrowUpFromLine } from "lucide-react";
import NotedSection from "./NotedSection";
import ChatSection from "./ChatSection";

export default function RightPanel() {
  return (
    <div className="flex flex-col gap-4 h-full relative">
      {/* Top Bar */}
      <div className="flex justify-end gap-2 mb-2">
        <button className="flex items-center gap-2 rounded-[20px] bg-white/40 p-1.25 pr-5.5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] border border-white/20 text-[13px] font-bold text-slate-700">
          <button className="flex h-10 w-13 items-center justify-center rounded-[14px] bg-[#f5f5f0] cursor-pointer shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#efefe9] transition-transform active:translate-y-0.5">
            <Share2 className="h-4 w-4 text-slate-500" />
          </button>
          Share
        </button>
        <button className="flex w-15 items-center justify-center rounded-[20px] bg-white/40 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] border border-white/20 cursor-pointer hover:bg-[#f5f5f0] transition-transform active:translate-y-0.5">
          <FolderDown className="h-5 w-5 text-slate-400" />
        </button>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col gap-4 relative">
        <button className="absolute -left-9 top-0 z-10 flex h-13 w-10 items-center justify-center rounded-[14px] bg-white/40 cursor-pointer shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#f5f5f0] transition-transform active:translate-y-0.5 rotate-90">
          <ArrowUpFromLine className="h-4 w-4 text-slate-500" />
        </button>

        <NotedSection />
        <ChatSection />
      </div>
    </div>
  );
}