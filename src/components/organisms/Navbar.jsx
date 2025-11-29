"use client";

import { useState } from "react";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";
import CartDrawer from "./CartDrawer";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // 🚀 Ahora usando el contexto real
  const { cartCount } = useCart();

  return (
    <>
      <nav className="w-full flex items-center justify-between px-4 py-3 bg-gray-950 sticky top-0 z-[5000]">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-4 lg:py-3">

          <button className="p-2 lg:hidden" onClick={() => setMenuOpen(true)}>
            <Bars3Icon className="w-6 h-6 text-slate-50" />
          </button>

          <div className="flex items-center">
            <Image
              width={72}
              height={10}
              src="/images/aura-web_logo.webp"
              alt="Aura Logo"
              className="select-none"
            />
          </div>

          <div className="hidden lg:flex gap-10 text-slate-200 text-sm font-subtitle font-semibold">
            <a href="/" className="hover:text-rose-300 transition">Inicio</a>
            <a href="/catalogo" className="hover:text-rose-300 transition">Catálogo</a>
            <a href="/ofertas" className="hover:text-rose-300 transition">Ofertas</a>
          </div>

          <div className="flex items-center gap-4">

            {/* CART ICON */}
            <button className="relative p-2" onClick={() => setCartOpen(true)}>
              <ShoppingCartIcon className="w-6 h-6 text-slate-100" />

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-400 text-xs px-1.5 py-[1px] rounded-full text-white">
                  {cartCount}
                </span>
              )}
            </button>

          </div>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}