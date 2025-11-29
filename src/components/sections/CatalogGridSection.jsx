import PerfumeCard from "../organisms/PerfumeCard";

export default function CatalogGridSection({ perfumes = [] }) {
  // Aseguramos que perfumes sea siempre un arreglo para evitar errores
  const safePerfumes = Array.isArray(perfumes) ? perfumes : [];

  // Limitar a 10 perfumes (2 columnas × 5 filas)
  const limitedPerfumes = safePerfumes.slice(0, 10);

  return (
    <section className="px-4 pt-8 pb-12">
      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {limitedPerfumes.map((p) => (
          <PerfumeCard key={p.id} perfume={p} />
        ))}
      </div>

      {/* Ver todos */}
      {safePerfumes.length > 10 && (
        <div className="mt-6 flex justify-center">
          <button
            className="
              w-full 
              bg-slate-100 
              text-slate-950 
              font-semibold 
              text-[16px]
              font-subtitle
              py-3 
              rounded-[6px]
            "
          >
            Ver todos
          </button>
        </div>
      )}
    </section>
  );
}