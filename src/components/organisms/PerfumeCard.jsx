"use client";

import IconHeart from "../atoms/IconHeart";
import Price from "../atoms/Price";
import Image from "next/image";
import { useState } from "react";

export default function PerfumeCard({ perfume }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="border border-slate-300 rounded-[10px] overflow-hidden bg-transparent">
      
      {/* Imagen */}
      <div className="relative w-full aspect-[3/4] bg-slate-200">
        <Image
          src={perfume.image}
          alt={perfume.name}
          fill
          className="object-cover"
        />

        {/* Corazón */}
        <button
          onClick={() => setFavorite(!favorite)}
          className="absolute top-2 right-2 text-gray-900 bg-white/70 p-1 rounded-full"
        >
          <IconHeart filled={favorite} className="w-5 h-5" />
        </button>
      </div>

      {/* Info */}
      <div className="p-3 bg-white">
        <p className="text-[10px] text-slate-600 font-poppins">{perfume.brand}</p>
        <p className="text-[16px] text-slate-950 font-spectral truncate">{perfume.name}</p>

        <Price price={perfume.price} oldPrice={perfume.oldPrice} />

        <button className="w-full mt-2 bg-fuchsia-800 text-slate-100 py-2 text-sm font-semibold rounded-[4px]">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}