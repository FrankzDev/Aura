"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

export default function MobileMenu({ open, onClose }) {
  const [visible, setVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Maneja montado/desmontado + animaciones
  useEffect(() => {
    if (open) {
      setVisible(true);
      setTimeout(() => setIsAnimating(true), 10); // permite animación de entrada
      document.body.style.overflow = "hidden";
    } else {
      setIsAnimating(false); // gatilla animación de salida
      document.body.style.overflow = "";

      const timer = setTimeout(() => setVisible(false), 300); // espera salida
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex">
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          absolute inset-0 bg-black/30 transition-opacity duration-300
          ${isAnimating ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* ASIDE */}
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`
          relative h-full w-[75%] bg-gray-950 shadow-xl overflow-y-auto p-6 z-[10000]
          transform transition-transform duration-300
          ${isAnimating ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Image width={72} height={15} alt={"Aura Logo"} src={"/images/aura-web_logo.webp"} />
          <button onClick={onClose}>
            <AiOutlineClose size={20} className="text-slate-100" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col space-y-4 text-gray-900 text-base">
          <a href="#">Nuevos Aromas</a>
          <a href="#">Catálogo</a>
          <a href="#">Para Caballero</a>
          <a href="#">Para Dama</a>
          <a href="#">Unisex</a>
          <a href="#">Ofertas del Mes</a>
        </nav>

        <div className="my-6 border-t border-gray-300" />

        <div className="flex flex-col space-y-3 text-gray-900 text-base">
          <p className="font-medium">Preguntas frecuentes:</p>
          <a href="#">¿Cómo hacer un pedido?</a>
          <a href="#">¿Cuánto cuesta el envío?</a>
          <a href="#">¿Aunque no esté en el catálogo, puedo solicitarlo?</a>
        </div>

        <div className="my-6 border-t border-gray-300" />

        <div className="flex flex-col space-y-3 text-gray-900 text-base mb-8">
          <a href="#">Términos y Condiciones</a>
          <a href="#">Políticas de Uso</a>
        </div>

        <div className="flex space-x-6 text-gray-800 pt-4">
          <AiFillFacebook size={26} />
          <FaTiktok size={22} />
          <AiFillInstagram size={26} />
        </div>
      </aside>
    </div>
  );
}
