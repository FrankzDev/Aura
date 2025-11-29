"use client";

import { useState, useEffect } from "react";
import { XMarkIcon, PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

export default function CartDrawer({ open, onClose }) {
  // CONTEXT REAL
  const { cart, addQty, minusQty, removeItem, total } = useCart();

  // Animación / visibilidad local
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
      const t = setTimeout(() => setAnimateIn(true), 10);
      return () => clearTimeout(t);
    } else {
      setAnimateIn(false);
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[6000]">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          animateIn ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`absolute right-0 top-0 h-full w-[85%] sm:w-[400px] bg-gray-950 p-5 shadow-xl flex flex-col text-slate-200 transition-transform duration-300 ${
          animateIn ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Tu Carrito</h2>
          <button
            onClick={onClose}
            aria-label="Cerrar carrito"
            className="p-2 rounded hover:bg-white/5 transition"
          >
            <XMarkIcon className="w-6 h-6 text-slate-300" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {cart.length === 0 ? (
            <div className="pt-8 text-center text-slate-400">
              <p className="mb-2">Tu carrito está vacío</p>
              <p className="text-sm">Agrega productos y los verás aquí.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-3 items-center bg-gray-900 p-3 rounded-xl">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-800">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{item.name}</p>
                  <p className="text-sm text-slate-400">${item.price}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className="p-1 bg-gray-800 rounded hover:bg-gray-700 transition"
                    onClick={() => minusQty(item.id)}
                  >
                    <MinusIcon className="w-4 h-4" />
                  </button>

                  <span className="w-6 text-center">{item.qty}</span>

                  <button
                    className="p-1 bg-gray-800 rounded hover:bg-gray-700 transition"
                    onClick={() => addQty(item.id)}
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>

                  <button
                    className="p-1 text-rose-400 hover:text-rose-300 transition"
                    onClick={() => removeItem(item.id)}
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 border-t border-gray-800 pt-4">
          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <button
            className={`w-full py-3 rounded-xl font-semibold transition ${
              cart.length > 0
                ? "bg-rose-500 hover:bg-rose-400 text-white"
                : "bg-gray-800 text-slate-400 cursor-not-allowed"
            }`}
            disabled={cart.length === 0}
          >
            Proceder al pago
          </button>
        </div>
      </aside>
    </div>
  );
}
