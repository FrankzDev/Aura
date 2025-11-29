"use client";

import { useState } from "react";

export default function FilterSection() {
  const leftFilters = ["Todo", "Nuevos", "Caballero", "Damas", "Unisex", "Populares"];
  const rightFilter = "Los más vendidos";

  const [active, setActive] = useState("Todo");

  return (
    <div className="w-full overflow-x-auto no-scrollbar bg-slate-950">
      {/* Contenedor centrado con max-width */}
      <div className="max-w-[1440px] mx-auto flex justify-between px-4">
        {/* Filtros izquierda + mobile */}
        <div className="flex space-x-6 overflow-x-auto no-scrollbar">
          {leftFilters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`whitespace-nowrap text-sm font-medium h-full px-3 py-4
                  ${isActive ? "text-gray-50" : "text-gray-50"}
                  md:hover:bg-slate-300
                  hover:text-slate-950 transition-colors duration-150`}
              >
                {filter}
              </button>
            );
          })}

          {/* Filtro "Los más vendidos" solo visible en mobile dentro del scroll */}
          <button
            onClick={() => setActive(rightFilter)}
            className={`whitespace-nowrap text-sm font-medium h-full px-3 md:hidden
              ${active === rightFilter ? "text-gray-900" : "text-gray-50"}
              hover:text-gray-900 transition-colors duration-150`}
          >
            {rightFilter}
          </button>
        </div>

        {/* Filtro derecha solo visible en desktop */}
        <div className="flex-shrink-0 hidden md:flex">
          <button
            onClick={() => setActive(rightFilter)}
            className={`whitespace-nowrap text-sm font-medium h-full px-3
              ${active === rightFilter ? "text-gray-900" : "text-gray-50"}
              md:hover:bg-slate-300
              hover:text-slate-950 transition-colors duration-150`}
          >
            {rightFilter}
          </button>
        </div>
      </div>
    </div>
  );
}