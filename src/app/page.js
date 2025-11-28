import Navbar from "@/components/organisms/Navbar";
import BottomMenu from "@/components/organisms/BottomMenu";
import HeroSection from "@/components/sections/HeroSection";
import FiltersSection from "@/components/sections/FilterSection";
import CatalogGridSection from "@/components/sections/CatalogGridSection";

import perfumes from "./data/perfumes";
import HorizontalSliderSection from "@/components/sections/HorizontalSliderSection";

export default function HomePage() {
  return (
    <main className="pb-20 bg-slate-100"> 
      {/* TOP NAV */}
      <Navbar />
      <HeroSection />
      <FiltersSection />
      <CatalogGridSection perfumes={perfumes} />
      <HorizontalSliderSection
        title="Para El"
        perfumes={perfumes.filter(p => p.gender === "male")}
      />

      <HorizontalSliderSection
        title="Para Ella"
        perfumes={perfumes.filter(p => p.gender === "female")}
      />

      <HorizontalSliderSection
        title="Para Ambos"
        perfumes={perfumes.filter(p => p.gender === "unisex")}
      />
      {/* BOTTOM MENU NAV */}
      <BottomMenu />
    </main>
  );
}