"use client";

import Image from "next/image";
import { use } from "react";
import { useCart } from "@/app/context/CartContext";
import perfumes from "@/app/data/perfumes";
import { slugtify } from "@/app/utils/slugtify";

export default function ProductDetail({ params }) {
  // ✅ Next.js 15: params ahora es un Promise
  const { id, slug } = use(params);

  const product = perfumes.find(
    (p) => String(p.id) === String(id) && slugtify(p.name) === slug
  );

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="p-10 text-center text-slate-100">
        <h2 className="text-xl font-semibold mb-2">Producto no encontrado</h2>
        <p>Este producto no existe o fue retirado.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 min-h-screen text-slate-100">
      <div className="max-w-[1200px] mx-auto px-4 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Imagen */}
          <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Información */}
          <div className="flex flex-col justify-center">
            <p className="text-sm opacity-80 uppercase tracking-wide">
              {product.brand}
            </p>

            <h1 className="text-4xl font-bold mt-2">{product.name}</h1>

            <div className="mt-4 flex items-center gap-4">
              <span className="text-3xl font-semibold">${product.price}</span>
              {product.oldPrice && (
                <span className="text-xl opacity-70 line-through">
                  ${product.oldPrice}
                </span>
              )}
            </div>

            <p className="mt-6 opacity-90 leading-relaxed">
              {product.description ??
                "Una fragancia premium seleccionada cuidadosamente para ofrecer una experiencia única."}
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-slate-100 text-slate-900 py-4 rounded-xl text-lg font-bold hover:bg-slate-200 transition"
              >
                Añadir al carrito
              </button>

              <button className="w-full py-4 rounded-xl border border-slate-400 text-lg font-medium hover:bg-slate-700 transition">
                Comprar ahora
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-slate-900 p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Detalles del producto</h2>
          <p className="opacity-90 leading-relaxed">
            {product.longDescription ??
              "Esta fragancia ha sido elaborada pensando en quienes buscan elegancia y una esencia inolvidable."}
          </p>
        </div>
      </div>
    </div>
  );
}