"use client";

export default function FilterPill({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-1.5 
        rounded-full
        text-sm
        transition-all
        font-poppins
        ${
          selected
            ? "bg-gray-950 text-slate-100"
            : "text-gray-950 bg-transparent"
        }
      `}
      style={{ marginRight: "6px" }}
    >
      {label}
    </button>
  );
}