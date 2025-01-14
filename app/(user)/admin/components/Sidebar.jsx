"use client";

import { BookOpen, CreditCard, GraduationCap, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

export default function Sidebar() {
  const menuList = [
    {
      name: "Accreditation",
      link: "/admin/accreditation",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: "Certificate",
      link: "/admin/certificate",
      icon: <CreditCard className="h-5 w-5" />, // Corrected to CreditCard
    },
    {
      name: "Training",
      link: "/admin/training",
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ];

  return (
    <section className="sticky top-0 flex flex-col gap-10 bg-white rounded-[20px] border-r px-5 py-3 h-screen overflow-hidden w-[260px] z-50">
      <div className="flex justify-center py-4">
        <Link href={`/`}>
          <img className="h-8" src="/ACS.png" alt="Logo" />
        </Link>
      </div>
      <ul className="flex-1 h-full overflow-y-auto flex flex-col gap-4">
        {menuList.map((item, key) => (
          <Tab item={item} key={key} />
        ))}
      </ul>
      <div className="flex justify-center">
        {/* Optional Logout Button */}
      </div>
    </section>
  );
}

function Tab({ item }) {
  const pathname = usePathname();
  const isSelected = pathname === item.link;
  return (
    <Link href={item.link}>
      <li
        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold ease-soft-spring transition-all duration-300
        ${isSelected ? "bg-[#879fff] text-white" : "bg-white text-black"} 
        `}
      >
        {item.icon} {item.name}
      </li>
    </Link>
  );
}
