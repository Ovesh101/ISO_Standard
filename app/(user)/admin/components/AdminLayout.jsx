"use client";

import { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import { X, Menu } from "lucide-react";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
   
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        closeSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <main className=" flex bg-gray-100">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed z-50 md:static transition-transform duration-300 bg-white shadow-lg h-full ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-2 border-b md:hidden">
          <h2 className="font-semibold text-lg">Menu</h2>
          <button onClick={toggleSidebar} className="text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <Sidebar closeSidebar={closeSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col ">
        {/* Header */}
        <header className="bg-white w-full shadow-md p-4 flex justify-between items-center">
          <button
            onClick={toggleSidebar}
            className="block md:hidden text-gray-700"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-bold">Admin Panel</h1>
        </header>

        {/* Page Content */}
        <section className="p-4  ">{children}</section>
      </div>
    </main>
  );
}
