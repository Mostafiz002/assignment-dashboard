import { cn } from "@/lib/utils";

interface TaskItemProps {
  text: string;
  time: string;
  checked?: boolean;
}

export default function TaskItem({ text, time, checked }: TaskItemProps) {
  return (
    <div className="flex items-start justify-between gap-3 group cursor-pointer py-1">
      <div className="flex items-start gap-3">
        <div className={cn(
          "mt-0.5 h-5 w-5 rounded-[6px] flex items-center justify-center border-2 transition-colors",
          checked ? "bg-[#F9E066] border-[#F9E066]" : "bg-[#f5f5f0] border-transparent"
        )}>
          {checked && <div className="w-2.5 h-1.5 border-b-2 border-l-2 border-slate-900 -rotate-45 mb-0.5" />}
        </div>
        <p className={cn(
          "text-[11px] font-bold leading-relaxed max-w-40",
          checked ? "text-slate-400" : "text-slate-700"
        )}>
          {text}
        </p>
      </div>
      <span className="text-[9px] font-bold text-slate-300 mt-0.5 uppercase">{time}</span>
    </div>
  );
}