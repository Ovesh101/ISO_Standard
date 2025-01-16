import Link from "next/link";
import React from "react";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <>
      {/* Desktop Header */}
      <header
        style={{
          boxShadow: "0px 0px 38px #CFDAF9",
        }}
        className="hidden md:flex mt-2 items-center p-2 mx-2 rounded-[15px] justify-between bg-white h-[79px]"
      >
        {/* Logo */}
        <div className="flex gap-20 pl-[40px] items-center">
          <Link href="/">
            <img src="/header.png" alt="Logo" className="h-[36px] w-auto" />
          </Link>
          <nav className="flex space-x-10">
            <Link
              href="/"
              className="text-nav text-[16px] hover:text-gray-700 font-semibold"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-[#18191F] text-[16px] hover:text-gray-700 font-semibold"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-[#18191F] text-[16px] hover:text-gray-700 font-semibold"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="text-[#18191F] text-[16px] hover:text-gray-700 font-semibold"
            >
              About Us
            </Link>
            <Link
              href="/client"
              className="text-[#18191F] text-[16px] hover:text-gray-700 font-semibold"
            >
              Clients
            </Link>
          </nav>
        </div>

        {/* Get a Quote Button */}
        <div>
          <button className="bg-dark_blue text-[16px] w-[137px] font-semibold rounded-[10px] text-white h-[53px] hover:bg-gray-800">
            Get a quote
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <MobileHeader />
    </>
  );
}
