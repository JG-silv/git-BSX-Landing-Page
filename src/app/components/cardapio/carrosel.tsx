"use client";

import React, { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Usando Generics (<T>) para que o componente aceite qualquer tipo de dado
interface Carrossel<T> {
  data: T[]; // O array de dados a ser exibido
  renderItem: (item: T) => React.ReactNode; // A função que renderiza cada item
}

export function Carrossel<T>({ data, renderItem }: Carrossel<T>) {
  // O useId gera um ID único para esta instância do carrossel. Ex: ":r1:"
  const uniqueId = useId();
  const prevButtonId = `swiper-prev-${uniqueId}`;
  const nextButtonId = `swiper-next-${uniqueId}`;

  return (
    <div className="relative w-full">
      {/* Botões de navegação com IDs únicos */}
      <button
        id={prevButtonId}
        type="button"
        aria-label="Anterior"
        className="absolute button prev z-10" // 
      >
        <ChevronLeft size={24} />
      </button>
      <button
        id={nextButtonId}
        type="button"
        aria-label="Próximo"
        className="absolute button next z-10" // 
      >
        <ChevronRight size={24} />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ prevEl: `#${prevButtonId}`, nextEl: `#${nextButtonId}` }}
        pagination={{
          clickable: true,
          bulletClass: "bg-gray-300 w-2 h-2 rounded-full",
          bulletActiveClass: "bg-emerald-600",
        }}
        autoplay={{ delay: 12000, disableOnInteraction: false }}
        loop
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
        }}
        className="!pb-2"
      >
        {/* Mapeando os dados recebidos e usando a função renderItem */}
        {data.map((item, index) => (
          <SwiperSlide key={index} className="h-auto">
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
