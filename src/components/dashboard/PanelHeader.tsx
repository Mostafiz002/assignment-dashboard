import { Plus, ArrowUpRight } from "lucide-react";

interface PanelHeaderProps {
  title: string;
  count?: number;
  icon?: React.ReactNode;
  showActions?: boolean;
}

export default function PanelHeader({ title, count, icon, showActions }: PanelHeaderProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-12 items-center justify-center rounded-[14px] bg-[#f5f5f0] cursor-pointer 
          shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#efefe9] transition-transform text-[14px] font-semibold text-slate-600">
          {count ? (
            count
          ) : (
            <div className="p-1">
              <div className="w-4 h-4 border-2 border-slate-400 rounded-full border-t-transparent" />
            </div>
          )}
        </div>
        <span className="text-[13px] font-bold text-slate-900">{title}</span>
      </div>

      <div className="flex gap-2">
        {showActions && (
          <button className="flex h-10 w-12 items-center justify-center rounded-[14px] bg-[#f5f5f0] cursor-pointer 
        shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#efefe9] transition-transform duration-100 active:translate-y-px text-slate-500">
            <Plus size={18} />
          </button>
        )}
        <button className="flex h-10 w-12 items-center justify-center rounded-[14px] bg-[#f5f5f0] cursor-pointer 
        shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#efefe9] transition-transform duration-100 active:translate-y-px text-slate-500">
          {icon || <ArrowUpRight size={18} />}
        </button>
      </div>
    </div>
  );
}