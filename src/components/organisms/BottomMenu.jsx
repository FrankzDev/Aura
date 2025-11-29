"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome, AiFillHome, AiOutlineSearch, AiOutlineTag, AiFillTag } from "react-icons/ai";

export default function BottomMenu() {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/",
      label: "Home",
      icon: AiOutlineHome,
      iconFilled: AiFillHome,
    },
    {
      href: "/search",
      label: "Buscar",
      icon: AiOutlineSearch, // solo outline
      iconFilled: null, // usamos color en vez de filled
    },
    {
      href: "/promos",
      label: "Promos",
      icon: AiOutlineTag,
      iconFilled: AiFillTag,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-screen bg-gray-950 pt-4 pb-6 z-50 md:hidden">
      <div className="max-w-md mx-auto flex justify-around text-slate-100">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          const IconComponent = isActive && item.iconFilled ? item.iconFilled : item.icon;
          const size = item.label === "Buscar" ? 22 : 20;
          return (
            <Link key={index} href={item.href} className="flex flex-col items-center">
              <IconComponent
                size={size}
                className={item.label === "Buscar" && isActive ? "text-rose-500" : "text-slate-100"}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}