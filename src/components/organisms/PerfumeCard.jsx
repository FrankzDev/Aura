"use client";

import IconHeart from "../atoms/IconHeart";
import Price from "../atoms/Price";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { slugtify } from "@/app/utils/slugtify"; // ✅ archivo corregido

export default function PerfumeCard({ perfume }) {
  const [favorite, setFavorite] = useState(false);
  const { addToCart } = useCart();

  const slug = slugtify(perfume.name);

  return (
    <div className="rounded-[6px] bg-slate-300 overflow-hidden relative">
      
      {/* ⚡ CLICK A LA TARJETA → DETAIL */}
      <Link
        href={`/perfumes/${perfume.id}/${slug}`} // ✅ ruta corregida
        className="absolute inset-0 z-10"
      />

      {/* Imagen */}
      <div className="relative w-full aspect-[1/1] bg-slate-200 select-none">
        <Image
          src={perfume.image}
          alt={perfume.name}
          fill
          className="object-cover"
        />

        {/* Corazón */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setFavorite(!favorite);
          }}
          className="absolute top-2 right-2 z-20 text-gray-900 bg-white/70 p-1.5 rounded-full"
        >
          <IconHeart filled={favorite} className="w-4 h-4 text-slate-800" />
        </button>
      </div>

      {/* Info */}
      <div className="p-3 bg-slate-100 relative z-20 pointer-events-none">
        <p className="text-[10px] text-slate-700 font-title">{perfume.brand}</p>
        <p className="text-[15px] text-slate-950 font-body font-semibold truncate">
          {perfume.name}
        </p>
        <Price price={perfume.price} oldPrice={perfume.oldPrice} />
      </div>

      {/* Botón Comprar */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          addToCart(perfume);
        }}
        className="w-full bg-slate-950 text-white py-2 text-sm font-subtitle font-semibold rounded-b-[4px] relative z-20"
      >
        Comprar
      </button>
    </div>
  );
}