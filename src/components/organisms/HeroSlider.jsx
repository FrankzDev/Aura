"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function HeroSlider() {
  const slides = [
    { id: 1, image: "/images/hero/slide-1.webp", link: "/producto/1" },
    { id: 2, image: "/images/hero/slide-2.webp", link: "/producto/2" },
    { id: 3, image: "/images/hero/slide-3.webp", link: "/producto/3" },
    { id: 4, image: "/images/hero/slide-4.webp", link: "/producto/4" },
    { id: 5, image: "/images/hero/slide-5.webp", link: "/producto/5" },
  ];

  return (
    <div className="w-full h-[250px] md:h-[600px] overflow-hidden m-0 p-0">
      <Swiper
        modules={[Autoplay]}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="w-full h-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <a href={slide.link} className="block w-full h-full">
              <img
                src={slide.image}
                alt="promo"
                className="w-full h-full object-cover block"
                draggable="false"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}