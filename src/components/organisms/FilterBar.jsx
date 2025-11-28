"use client";

import { useState } from "react";
import FilterPill from "../molecules/FilterPill";

export default function FilterBar() {
  const options = ["Todos", "Nuevos", "Hombre", "Mujer", "Unisex", "Populares"];
  const [selected, setSelected] = useState("Todos");

  return (
    <div className="w-screen overflow-x-auto no-scrollbar px-4">
      <div className="flex items-center py-2">
        {options.map(option => (
          <FilterPill
            key={option}
            label={option}
            selected={selected === option}
            onClick={() => setSelected(option)}
          />
        ))}
      </div>
    </div>
  );
}