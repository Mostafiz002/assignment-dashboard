"use client";

import { useEffect, useRef } from "react";
import { Mic, Send, ArrowUpRight, CheckCheck, Heart } from "lucide-react";
import PanelHeader from "./PanelHeader";

export default function ChatSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on first load and updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="bg-[#f5f5f0] rounded-[14px] p-2 h-[45%] flex flex-col shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)]">
      <div className="rounded-[28px] h-full flex flex-col">
        <PanelHeader title="Chat" icon={<ArrowUpRight size={18} />} />

        {/* Scrollable Area */}
        <div
          ref={scrollRef}
          className="flex-1 flex flex-col gap-6 mb-4 mt-4 overflow-y-auto px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* First Chat */}
          <div className="self-start max-w-[90%] flex gap-2 items-start">
            <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white shadow-sm shrink-0 mt-1 overflow-hidden">
              <img
                src="https://i.pravatar.cc/150?u=gregory"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 relative">
              <div className="bg-[#f5f5f0] p-3 rounded-[20px] rounded-tl-none shadow-sm">
                <p className="text-[12px] font-medium text-slate-700">
                  deal, I need to check something!
                </p>
              </div>

              <div className="absolute -right-6 top-6  -translate-y-1/2 bg-white rounded-full p-1 shadow-sm border border-slate-50">
                <Heart size={10} className="text-gray-700" />
              </div>

              <div className="flex mt-1 items-center justify-end gap-2 px-1">
                <CheckCheck size={12} className="text-blue-500" />
                <span className="text-[9px] text-slate-400 font-bold">
                  8:32 AM
                </span>
              </div>
            </div>
          </div>

          {/* Second Chat */}
          <div className="self-end max-w-[90%] flex gap-2 items-start">
            <div className="flex flex-col items-end">
              <div className="flex gap-2 mb-2">
                <div className="w-24 h-32 bg-slate-100 rounded-[18px] border-4 border-[#f5f5f0] shadow-sm overflow-hidden" />
                <div className="relative w-24 h-32 bg-slate-100 rounded-[18px] border-4 border-[#f5f5f0] shadow-sm ">
                  <div className="w-full h-full bg-slate-200/50" />
                  <div className="absolute -left-33  top-1/2 -translate-y-1/2 bg-[#e2e2d8] rounded-full p-1 shadow-sm ">
                    <Heart size={10} className="fill-red-400 text-red-400" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-1">
                <CheckCheck size={12} className="text-blue-500" />
                <span className="text-[9px] text-slate-400 font-bold">
                  8:42 AM
                </span>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white shadow-sm shrink-0 mt-1 overflow-hidden">
              <img
                src="https://i.pravatar.cc/150?u=george"
                alt="user-avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Chat Input Area */}
        <div className="relative">
          <input
            type="text"
            placeholder="Type something..."
            className="w-full bg-[#ebebe1] border-none rounded-[12px] py-2.5 px-5 pr-20 text-[12px] font-medium focus:ring-0 outline-none"
          />
          <div className="absolute right-0.5 top-0.5 flex gap-1">
            <button className="h-8.5 w-8.5 flex items-center justify-center rounded-[12px] bg-white/60 text-slate-400">
              <Mic size={15} />
            </button>
            <button className="h-8.5 w-8.5 flex items-center justify-center rounded-[12px] bg-[#F9E066] text-slate-900 shadow-sm">
              <Send size={15} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
