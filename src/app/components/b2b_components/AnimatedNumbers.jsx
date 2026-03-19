"use client";
import React, { useEffect, useRef, useState } from "react";

// LÓGICA DA ANIMAÇÃO  
const easeOutExpo = (t) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const useCountUp = (target, duration = 2000, startAnimation) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef();

  useEffect(() => {
    if (!startAnimation) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const relativeProgress = Math.min(progress / duration, 1);
      const easedProgress = easeOutExpo(relativeProgress);

      setCount(easedProgress * target);

      if (progress < duration) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, startAnimation]);

  return count;
};

const AnimatedNumber = ({ target }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(target, 2500, isVisible);

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
    </span>
  );
};

//  COMPONENTE VISUAL
export default function SimpleStats() {
  const stats = [
    {
      value: 450,
      label: "Clientes Corporativos",
    },
    {
      value: 1500,
      label: "Consultas/Dia",
    },
    {
      value: 10,
      label: "Anos de Mercado",
    },
  ];

  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Grid de 3 Colunas */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
          
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              
              {/* O Números */}
              <div className="text-4xl md:text-6xl font-extrabold text-[#7C85F2] mb-4 tracking-tight">
                +<AnimatedNumber target={stat.value} />
              </div>

              {/* Descrição */}
              <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
              
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}