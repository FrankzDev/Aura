import PerfumeCard from "../organisms/PerfumeCard";

export default function HorizontalSliderSection ({ title, perfumes }) {
  const limitedPerfumes = perfumes.slice(0, 10);

  return (
    <section className="px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-body font-semibold text-[16px] text-slate-100">
          {title}
        </h2>

        <button className="text-[14px] font-subtitle text-slate-100 underline">
          Ver todas
        </button>
      </div>

      {/* Slider */}
      <div
        className="
          flex gap-4 overflow-x-auto snap-x snap-mandatory
          scrollbar-none pb-2
        "
      >
        {limitedPerfumes.map((p) => (
          <div
            key={p.id}
            className="min-w-[45%] snap-start"
          >
            <PerfumeCard perfume={p} />
          </div>
        ))}
      </div>
    </section>
  );
}