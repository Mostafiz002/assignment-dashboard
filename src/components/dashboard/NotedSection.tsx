"use client";

import { useState } from "react";
import TaskItem from "./TaskItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import PanelHeader from "./PanelHeader";
import { initialTasks } from "@/data/tasks";

export default function NotedSection() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleToggle = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <div className="bg-[#f5f5f0] z-100 rounded-[14px] flex-1 flex flex-col shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)]">
      <div className="rounded-[28px] p-3 h-full flex flex-col">
        <PanelHeader title="Noted" count={tasks.length} showActions />

        <div className="bg-white mt-9 rounded-[12px] p-2 relative flex-1 flex flex-col">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[85%] h-4 bg-white/40 rounded-t-[12px] -z-10" />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[92%] h-4 bg-white/60 rounded-t-[16px] -z-10" />
          
          <p className="text-[12px] font-bold text-slate-700 mb-4 mt-2 px-1 leading-relaxed">
            After our conversation, the following tasks remained:
          </p>

          <ScrollArea className="flex-1">
            <div className="space-y-3">
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  text={task.text}
                  time={task.time}
                  checked={task.checked}
                  onToggle={() => handleToggle(task.id)}
                />
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="flex justify-center gap-1.5 mt-4">
          <div className="h-1 w-4 bg-slate-800 rounded-full" />
          <div className="h-1 w-4 bg-slate-300/40 rounded-full" />
        </div>
      </div>
    </div>
  );
}