import { Mic, Send, ArrowUpRight } from "lucide-react";
import PanelHeader from "./PanelHeader";

export default function ChatSection() {
  return (
    <div className="bg-[#f5f5f0]/50 rounded-[32px] p-2 h-[45%] flex flex-col shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)] border border-white/50">
      <div className="bg-white rounded-[28px] p-5 h-full shadow-sm flex flex-col">
        <PanelHeader title="Chat" icon={<ArrowUpRight size={18} />} />

        <div className="flex-1 flex flex-col justify-end gap-4 mb-4">
          <div className="self-end bg-[#f5f5f0] p-3 rounded-[18px] rounded-tr-none max-w-[80%]">
            <p className="text-[12px] font-medium text-slate-700">
              deal, I need to check something!
            </p>
            <span className="text-[9px] text-slate-400 mt-1 block text-right font-bold">
              8:32 AM
            </span>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Type something..."
            className="w-full bg-[#f5f5f0] border-none rounded-[16px] py-3 px-4 pr-20 text-[12px] font-medium focus:ring-0"
          />
          <div className="absolute right-1 top-1 flex gap-1">
            <button className="h-8 w-8 flex items-center justify-center rounded-[12px] bg-white/50 text-slate-400">
              <Mic size={14} />
            </button>
            <button className="h-8 w-8 flex items-center justify-center rounded-[12px] bg-[#F9E066] text-slate-900 shadow-sm">
              <Send size={14} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}