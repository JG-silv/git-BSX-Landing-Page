"use client";

import React, { useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { openSans, roboto, inter, poppins, sourceSans3 } from "../fonts/fonts.jsx";

export default function HeroSection() {
  const handleScrollDown = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
    }
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 rounded-lg">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título principal */}
        <h1 className={`titulo ${sourceSans3.className} text-[#26478D] leading-tight mb-6`}>
          Bem-vindo ao <span className="font-extrabold text-[#83227D]"> Grupo BSX</span>
        </h1>

        {/* Subtítulo com o texto principal em cor neutra */}
        <p className={`${sourceSans3.className} mt-4 text-xl md:text-3xl text-[#2D3748] max-w-7xl`}>
          Potencialize suas <span className="text-[#83227D]"> Consultas de Crédito </span>
          com nossos <span className="text-[#83227D]"> relatórios inteligentes. </span>
        </p>

        {/* Subtítulo */}
        <p className={`body-text ${sourceSans3.className} text-xl md:text-2xl text-[#2D3748] mb-8 mt-2`}>
          Entregamos dados completos, atualizados e confiáveis para você tomar decisões financeiras
          acertadas. Conheça nossos serviços e transforme a gestão de crédito da sua empresa!
        </p>

        {/* Links de serviço sem background */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
          <a
            href="/relatorios_inteligentes"
            className="flex items-center gap-2 text-[#83227D] font-semibold hover:underline transition"
          >
            <ChevronDown className="w-5 h-5 text-[#0D2C54] rotate-180" />
            Relatórios Inteligentes
          </a>
          <a
            href="/comprar_creditos"
            className="flex items-center gap-2 text-[#83227D] font-semibold hover:underline transition"
          >
            <ChevronDown className="w-5 h-5 text-[#0D2C54] rotate-180" />
            Compra de Créditos
          </a>
        </div>

        {/* Call to action textual + setas */}
        <div className="flex flex-col items-center mt-4">
          <p className="text-2xl font-bold text-[#26478D]">Veja mais abaixo</p>
          <button
            type="button"
            onClick={handleScrollDown}
            className="mt-2 flex flex-col items-center gap-1 animate-bounce focus:outline-none cursor-pointer"
            aria-label="Rolar para baixo"
          >
            <ChevronDown className="w-6 h-6 text-[#26478D]" />
            <ChevronDown className="w-6 h-6 text-[#26478D] opacity-75" />
            <ChevronDown className="w-6 h-6 text-[#26478D] opacity-50" />
          </button>
        </div>
      </div>
    </section>
  );
}
