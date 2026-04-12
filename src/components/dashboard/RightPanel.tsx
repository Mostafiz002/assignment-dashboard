"use client";

import { Share2, FolderDown, ArrowUpFromLine } from "lucide-react";
import NotedSection from "./NotedSection";
import ChatSection from "./ChatSection";

export default function RightPanel() {
  return (
    <div className="flex flex-col gap-4 h-full relative">
      {/* Top Bar */}
      <div className="flex justify-end gap-2 mb-2">
        <div className="flex items-center gap-2 rounded-[20px] bg-white/40 p-1.25 pr-5.5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] border border-white/20 text-[13px] font-bold text-slate-700">
          <button className="flex h-10 w-13 items-center justify-center rounded-[14px] bg-[#f5f5f0] cursor-pointer shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#efefe9] transition-transform active:translate-y-0.5">
            <Share2 className="h-4 w-4 text-slate-500" />
          </button>
          Share
        </div>
        <button className="flex w-15 items-center justify-center rounded-[20px] bg-white/40 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] border border-white/20 cursor-pointer hover:bg-[#f5f5f0] transition-transform active:translate-y-0.5">
          <FolderDown className="h-5 w-5 text-slate-400" />
        </button>
      </div>

      {/* Main Container */}

      {/* Main Tray Container */}
      <div className="flex-1 bg-[#dcdcd2] rounded-[18px] p-1.25 relative flex flex-col gap-2">
        <button className="absolute -left-13 -top-1 z-10 flex h-15 w-13 items-center justify-center rounded-[18px]  bg-[#f5f5f0] cursor-pointer  hover:bg-[#efefe9] transition-transform active:scale-0.67 rotate-90 border-5 border-[#dcdcd2] ">
          <ArrowUpFromLine className="h-4 w-4 text-slate-500" />
        </button>
        <div className="absolute -left-13 top-0   flex py-6.5 px-12 justify-center rounded-[14px] bg-[#dcdcd2] "></div>

        {/* Inner Sections */}
        <NotedSection />
        <ChatSection />
      </div>
    </div>
  );
}
