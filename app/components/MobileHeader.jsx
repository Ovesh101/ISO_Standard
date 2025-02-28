"use client";

import { useState } from "react";
import Link from "next/link";
import { CrossIcon } from "lucide-react";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`flex md:hidden mt-2 items-center p-2 mx-2 rounded-[20px] justify-between ${
        menuOpen ? "bg-blue-700" : "bg-white"
      } h-[79px] shadow-md transition-colors duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/ACS.png"
            alt="Logo"
            className="h-[36px] w-auto"
          />
        </Link>
      </div>

      {/* Get a Quote and Hamburger */}
      <div className="flex items-center space-x-4">
        <button
          className={`${
            menuOpen ? "bg-blue-500" : "bg-dark_blue"
          } text-[14px] w-[120px] font-semibold rounded-[10px] text-white h-[38px] hover:bg-gray-800 transition-colors duration-300`}
        >
          Get a quote
        </button>
        <button
          className="text-white h-[36px] w-[36px] focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <span className=" h-full w-full"><CrossIcon /></span> // Cross icon
          ) : (
            <img
              src="/SVG/menu.svg"
              alt="Menu"
              className="h-full w-full"
            />
          )}
        </button>
      </div>

      {/* Sliding Menu */}



      <div
        className={`absolute w-[91%]  top-0  left-4 bg-white z-30 rounded-[20px] shadow-lg transition-transform duration-300 ${
          menuOpen ? "translate-y-[105px]" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col items-start space-y-6 p-6">
          <Link href="/" onClick={()=>setMenuOpen(false)} className="text-[16px] font-semibold">
            Home
          </Link>
          <Link href="/services" onClick={()=>setMenuOpen(false)} className="text-[16px] font-semibold">
            Services
          </Link>
          <Link href="/contact" onClick={()=>setMenuOpen(false)} className="text-[16px] font-semibold">
            Contact Us
          </Link>
          <Link href="/about" onClick={()=>setMenuOpen(false)} className="text-[16px] font-semibold">
            About Us
          </Link>
          <Link href="/client" onClick={()=>setMenuOpen(false)} className="text-[16px] font-semibold">
            Clients
          </Link>
        </nav>
      </div>

    </header>
  );
}
