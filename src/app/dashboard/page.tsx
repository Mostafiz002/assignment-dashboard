"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/dashboard/MainContent";
import RightPanel from "@/components/dashboard/RightPanel";
import Topbar from "@/components/layout/Topbar";
import ContactList from "@/components/dashboard/ContactList";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("contacts");

  return (
    <main className="flex flex-col w-full min-h-screen gap-4 bg-[#F2F4F1] p-4 text-slate-800">
      <div className="w-full">
        <Topbar />
      </div>

      <div className="flex flex-1 gap-4 items-start">
        {/* Left Sidebar */}
        <aside className="sticky top-4 h-fit">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </aside>

        {/* Contact List */}
        <aside className="sticky top-4 h-fit">
          <ContactList />
        </aside>

        {/* Center */}
        <div className="flex-1">
          <MainContent />
        </div>

        {/* Right Panel */}
        <aside className="w-[320px] sticky top-4 h-fit">
          <RightPanel />
        </aside>
      </div>
    </main>
  );
}
