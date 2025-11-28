"use client";

import { useState } from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white sticky top-0 z-[5000]">
        <button className="p-2" onClick={() => setMenuOpen(true)}>
          <Bars3Icon className="w-7 h-7 text-gray-800" />
        </button>

        <h1 className="text-xl font-semibold tracking-wide text-gray-950">
          Aura
        </h1>

        <button className="p-2">
          <MagnifyingGlassIcon className="w-7 h-7 text-gray-800" />
        </button>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
