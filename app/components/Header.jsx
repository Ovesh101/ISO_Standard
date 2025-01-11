import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center p-2 mt-2 rounded-[20px] justify-between bg-white h-[79px] shadow-md ">
      {/* Logo */}
      <div className="flex gap-20 pl-[40px] items-center">
        <img
          src="/ACS.png"
          alt="Logo"
          className="h-[36px] w-auto" // Adjust logo dimensions as needed
        />
        <nav className="flex  space-x-10">
          <Link href="#home" className="text-nav text-[16px] hover:text-gray-700 font-semibold">
            Home
          </Link>
          <Link
            href="#services"
            className="text-[#18191F] text-[16px] hover:text-gray-700 font-semibold"
          >
            Services
          </Link>
          <Link
            href="#features"
            className="text-[#18191F] text-[16px] hover:text-gray-700 font-semibold"
          >
            Features
          </Link>
        </nav>
      </div>

  

      {/* Get a Quote Button */}
      <div>
        <button className="bg-dark_blue text-[16px] w-[137px] font-semibold rounded-[10px] text-white   h-[53px]  hover:bg-gray-800 ">
          Get a quote
        </button>
      </div>
    </header>
  );
}
