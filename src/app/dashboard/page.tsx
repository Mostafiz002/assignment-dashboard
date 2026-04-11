"use client"; // Required for state

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import ContactList from "@/components/dashboard/ContactList";
import MainContent from "@/components/dashboard/MainContent";
import RightPanel from "@/components/dashboard/RightPanel";
import Topbar from "@/components/layout/Topbar";

export default function Dashboard() {
  return (
    <main className="flex flex-col h-screen w-full gap-4 bg-[#F2F4F1] p-4 text-slate-800 overflow-hidden">
      {/* Topbar */}
      <div className="w-full">
        <Topbar />
      </div>
      <div className="flex flex-1 gap-4 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />
        {/* Center */}
        <div className="flex-1 overflow-y-auto no-scrollbar rounded-3xl">
          <MainContent />
        </div>
        {/* Right Panel*/}
        <div className="w-[320px]">
          <RightPanel />
        </div>
      </div>
    </main>
  );
}
