"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";



export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed z-50 md:static transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <button
            onClick={toggleSidebar}
            className="block md:hidden text-gray-700"
          >
            ☰ {/* Hamburger icon */}
          </button>
          <h1 className="text-lg font-bold">Admin Panel</h1>
        </header>

        {/* Page Content */}
        <section className="p-4">{children}</section>
      </div>
    </main>
  );
}
