"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

import { poppins } from "../fonts/fonts";

const slides = [
  {
    href: "#soluções",
    label: "Conheça as Soluções",
    imgDesktop: "/images/carrosel1.png",
    imgMobile: "/images/carrosel-mobile-1.png",
    alt: "Banner Soluções",
  },
  {
    href: "../relatorios_inteligentes",
    label: "Explorar Relatórios",
    imgDesktop: "/images/carrosel2.png",
    imgMobile: "/images/carrosel-mobile-2.png",
    alt: "Banner Relatórios",
  },
  {
    href: "../cpf",
    label: "Consultar Agora",
    imgDesktop: "/images/carrosel3.png",
    imgMobile: "/images/carrosel-mobile-3.png",
    alt: "Banner Consultar",
  },
];

export default function Carousel() {
  return (
    <div
      className="
      w-full
      max-h-[600px] md:max-h-[700px]
      aspect-[390/320] md:aspect-[1380/620]
      mx-auto
    "
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 12_000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map(({ href, label, imgDesktop, imgMobile, alt }) => (
          <SwiperSlide key={href} className="relative w-full h-full">
            {/* Full-area clicável no mobile */}
            <Link
              href={href}
              aria-label={label}
              className="block w-full h-full md:pointer-events-none" // Desativa o link do slide inteiro no desktop
            >
              <picture>
                <source srcSet={imgDesktop} media="(min-width: 768px)" />
                <img
                  src={imgMobile}
                  alt={alt}
                  className="absolute inset-0 w-full h-full object-cover object-right "
                />
              </picture>
              <span className="sr-only">{label}</span>
            </Link>

            {/* Botão aparece só em md+ */}
            <div className="hidden md:flex absolute inset-0 items-center justify-end ">
              <Link
                href={href}
                className={`
                  ${poppins.className}
                  absolute top-1/2 
                  right-[10%] /* Posição em percentagem para desktop */
                  transform -translate-y-1/2 
                  bg-[#F5f5f5] text-black font-semibold
                  
                  /* MUDANÇA: Tamanhos explícitos para cada breakpoint para maior controlo */
                  md:px-5 md:py-2 md:text-sm /* Tamanho para tablets */
                  lg:px-6 lg:py-3 lg:text-base /* Tamanho para desktops */

                  rounded-lg shadow-lg ring-2 ring-white
                  hover:bg-black hover:text-white hover:ring-black
                  transition-all whitespace-nowrap
                  
                `}
              >
                {label}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
