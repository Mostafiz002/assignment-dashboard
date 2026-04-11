import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface TaskItemProps {
  text: string;
  time: string;
  checked?: boolean;
}

export default function TaskItem({ text, time, checked }: TaskItemProps) {
  return (
    <div className="flex items-start gap-3 py-1">
      <Checkbox 
        checked={checked} 
        className="mt-1 border-slate-300 data-[state=checked]:bg-[#F9E066] data-[state=checked]:border-[#F9E066] data-[state=checked]:text-black" 
      />
      <div className="flex flex-col gap-0.5">
        <p className={cn(
          "text-sm font-medium leading-none transition-colors",
          checked ? "text-slate-400 line-through" : "text-slate-700"
        )}>
          {text}
        </p>
        <span className="text-[10px] text-slate-400 font-normal uppercase tracking-wider">
          {time}
        </span>
      </div>
    </div>
  );
}