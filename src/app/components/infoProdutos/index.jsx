"use client";

import React, { useRef, useState } from "react";
import { items } from "./props";
import { openSans, roboto } from "../fonts/fonts";

export default function ProductInfoCarousel() {
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onPointerDown = (e) => {
    const el = ref.current;
    setIsDragging(true);
    setStartX(e.clientX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!isDragging || !ref.current) return;
    const el = ref.current;
    const x = e.clientX - el.offsetLeft;
    el.scrollLeft = scrollLeft - (x - startX);
  };

  const onPointerUp = (e) => {
    setIsDragging(false);
    ref.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <section className="py-12 px-6 ">
      <h2 className="titulo text-center text-white mb-8">
        Análises Completas, Dados Precisos e Resultados Inteligentes.   
      </h2>

      <div className="flex justify-center">
        <div
          ref={ref}
          className="flex w-max gap-6 overflow-x-auto no-scrollbar cursor-grab"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={() => setIsDragging(false)}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg p-6 flex flex-col"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#FFEDE1] rounded-lg mb-4 animate-shadow">
                <item.icon className="text-[#26478D]" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-[#26478D] mb-2">
                {item.title}
              </h3>
              <p className={`text-gray-700 flex-1 mb-4 ${openSans.className}`}>
                {item.description}
              </p>
              <a
                href="#"
                className="self-start bg-[#26478D] text-white font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-[#3B67AC] transition animate-shadow"
              >
                Saiba Mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
