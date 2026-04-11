import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="h-8 w-8 rounded-full border-[3.5px] border-slate-800" />
      <div className="absolute -top-0.5 -right-1 h-2 w-2 rounded-full bg-slate-800" />
    </div>
  );
}