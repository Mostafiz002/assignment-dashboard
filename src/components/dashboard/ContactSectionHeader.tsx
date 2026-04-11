import { ChevronUp, ChevronDown } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  count: number;
  isOpen: boolean;
  onToggle: () => void;
}

export function SectionHeader({
  title,
  count,
  isOpen,
  onToggle,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between w-full mb-4 px-1">
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-12 items-center justify-center rounded-[14px] bg-[#f5f5f0] cursor-pointer 
          shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#efefe9] transition-transform"
        >
          {count}
        </div>
        <span className="text-[13px] font-bold text-slate-900">{title}</span>
      </div>
      <button
        onClick={onToggle}
        className="flex h-10 w-12 items-center justify-center rounded-[14px] bg-[#f5f5f0] cursor-pointer 
        shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#efefe9] transition-transform"
      >
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
    </div>
  );
}
