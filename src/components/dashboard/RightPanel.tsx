import TaskItem from "./TaskItem";

export default function RightPanel() {
  return (
    <div className="flex w-80 flex-col gap-4">
      {/* Tasks */}
      <div className="rounded-3xl bg-white p-6 flex-1 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold">Noted</h3>
          <span className="bg-slate-100 px-2 rounded-lg text-xs">3</span>
        </div>
        <div className="space-y-4">
            <TaskItem text="Enroll in real-estate courses" time="6:11 PM" checked />
            <TaskItem text="Conduct price analysis" time="8:32 AM" checked />
            <TaskItem text="Enhance the feedback system" time="8:12 PM" />
        </div>
      </div>

      {/* Chat */}
      <div className="rounded-3xl bg-white p-6 h-1/2 shadow-sm">
        <h3 className="font-bold mb-4">Chat</h3>
        {/* Chat bubbles and input */}
      </div>
    </div>
  );
}