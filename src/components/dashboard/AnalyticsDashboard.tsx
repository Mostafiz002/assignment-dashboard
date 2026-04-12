import { TabsContent } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AnalyticsDashboard() {
  return (
    <section className="mt-0">
      <TabsContent value="analytics" className="mt-0 border-none p-0 outline-none">

        {/* ── ROW 1: Score + Pattern blocks ── */}
        <div className="mt-5 flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6">

          {/* Average Score — inline, no card box */}
          <div className="shrink-0">
            <div className="flex items-center gap-2">
              <p className="text-[12px] font-semibold text-slate-400">Average score</p>
              <span className="bg-[#b4f481] text-slate-800 text-[9px] font-black px-2 py-[3px] rounded-full leading-none">
                +138 pts
              </span>
            </div>
            <div className="flex items-center gap-3 mt-0.5">
              <h3 className="text-[56px] sm:text-[64px] font-bold text-slate-800 tracking-tighter leading-none">
                430
              </h3>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-[10px] text-[11px] font-bold text-slate-600 shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors whitespace-nowrap">
                Last weeks <ChevronDown size={11} />
              </button>
            </div>
          </div>

          {/* 4 Pattern Blocks — equal width columns */}
          <div className="flex-1 grid grid-cols-4 gap-2.5 sm:gap-3 items-end pb-1">
            {/* 1. Solid yellow */}
            <PatternBlock value={138} bgClass="bg-[#FDE047]" />
            {/* 2. Dotted grey */}
            <PatternBlock value={20} bgClass="bg-slate-200" dotted />
            {/* 3. Diagonal stripe — wider appearance via taller height */}
            <PatternBlock value={123} bgClass="bg-slate-200" diagonal tall />
            {/* 4. Plain light */}
            <PatternBlock value={123} bgClass="bg-slate-100" tall />
          </div>
        </div>

        {/* ── ROW 2: Stat Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-5">
          <StatCard label="Deal Started" value="19"  barColor="bg-[#FDE047]"  badge="+1"  badgeUp />
          <StatCard label="Lost Deals"   value="25"  barColor="bg-[#FB8B8B]"  badge="+22" badgeUp />
          <StatCard label="Won Deals"    value="24"  barColor="bg-[#b4f481]"              />
        </div>

      </TabsContent>
    </section>
  );
}

/* ── Pattern block with label above ── */
function PatternBlock({
  value,
  bgClass,
  dotted,
  diagonal,
  tall,
}: {
  value: number;
  bgClass: string;
  dotted?: boolean;
  diagonal?: boolean;
  tall?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[11px] font-bold text-slate-400 ml-0.5">{value}</span>
      <div
        className={`
          w-full rounded-[16px] ${bgClass} relative overflow-hidden
          ${tall ? "h-[58px] sm:h-[66px]" : "h-[52px] sm:h-[60px]"}
        `}
      >
        {dotted && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
              backgroundSize: "7px 7px",
              opacity: 0.45,
            }}
          />
        )}
        {diagonal && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 6px, #94a3b8 6px, #94a3b8 8px)",
              opacity: 0.5,
            }}
          />
        )}
      </div>
    </div>
  );
}

/* ── Stat card ── */
function StatCard({
  label,
  value,
  barColor,
  badge,
  badgeUp,
}: {
  label: string;
  value: string;
  barColor: string;
  badge?: string;
  badgeUp?: boolean;
}) {
  return (
    <div className="relative bg-white/45 rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 border border-white/60 shadow-sm overflow-hidden flex flex-col h-[200px] sm:h-[230px]">

      {/* Dense dot texture fills whole card */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "9px 9px",
          opacity: 0.13,
        }}
      />

      {/* Label */}
      <p className="relative text-[12px] sm:text-[13px] font-semibold text-slate-400">{label}</p>

      {/* Big number */}
      <h4 className="relative text-[60px] sm:text-[68px] font-bold text-slate-800 tracking-tighter leading-none mt-1">
        {value}
      </h4>

      {/* Bottom bar row */}
      <div className="relative mt-auto flex items-center gap-2">
        {/* Colored bar */}
        <div className={`h-10 sm:h-11 flex-1 rounded-[12px] ${barColor} relative overflow-hidden`}>
          {/* subtle dot texture on bar */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)",
              backgroundSize: "6px 6px",
            }}
          />
        </div>

        {/* Badge pill OR plain grey box */}
        {badge ? (
          <div className="h-10 sm:h-11 w-14 sm:w-16 shrink-0 rounded-[12px] bg-white/80 border border-white shadow-sm flex items-center justify-center gap-0.5">
            <span className="text-[11px] font-black text-slate-700">{badge}</span>
            {badgeUp && <ChevronUp size={10} className="text-[#5daa28] stroke-[3]" />}
          </div>
        ) : (
          <div className="h-10 sm:h-11 w-14 sm:w-16 shrink-0 rounded-[12px] bg-white/40 border border-white/30" />
        )}
      </div>
    </div>
  );
}