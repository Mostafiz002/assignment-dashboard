import TaskItem from "./TaskItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import PanelHeader from "./PanelHeader";

export default function NotedSection() {
  return (
    <div className="bg-[#f5f5f0] rounded-[32px] p-2 flex-1 flex flex-col shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)] ">
      <div className="rounded-[28px] p-5 h-full shadow-sm flex flex-col">
        <PanelHeader title="Noted" count={3} showActions />

        <p className="text-[11px] font-bold text-slate-400 mb-4 mt-2 px-1 leading-relaxed">
          After our conversation, the following tasks remained:
        </p>

        <ScrollArea className="flex-1">
          <div className="space-y-3">
            <TaskItem
              text="Enroll in real-estate courses to update knowledge and skills"
              time="6:11 PM"
              checked
            />
            <TaskItem
              text="Conduct a price analysis of real estate in the selected area"
              time="8:32 AM"
              checked
            />
            <TaskItem
              text="Enhance the feedback and review system for clients"
              time="8:12 PM"
            />
          </div>
        </ScrollArea>

        <div className="flex justify-center gap-1.5 mt-4">
          <div className="h-1 w-4 bg-slate-800 rounded-full" />
          <div className="h-1 w-1 bg-slate-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}