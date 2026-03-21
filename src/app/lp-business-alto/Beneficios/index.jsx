"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";// Import para ter animação do GSAP
import { LoaderIcon } from "@/components/ui/loader-icon";
import { BarChart3, Layers3, Rocket, ShieldCheck } from "lucide-react";
// REVER OS TEXTOS COM GABRIEL - PARA VER SE ESTÃO CORRETOS
const beneficios = [
  {
    icon: Rocket,
    title: "Aquisição acelerada",
    description:
      "Estratégia orientada para aumentar oportunidades qualificadas sem sacrificar qualidade.",
    size: "lg:col-span-2",
  },
  {
    icon: BarChart3,
    title: "Decisão com inteligência",
    description:
      "Métricas claras para priorizar canais, ofertas e mensagens com maior potencial de retorno.",
    size: "",
  },
  {
    icon: Layers3,
    title: "Funil estruturado",
    description:
      "Jornada de conversão organizada para reduzir fricção e elevar a taxa de fechamento.",
    size: "",
  },
  {
    icon: ShieldCheck,
    title: "Escala com consistência",
    description:
      "Modelo de crescimento que combina previsibilidade comercial com posicionamento premium.",
    size: "lg:col-span-2",
  },
];

export default function Beneficios() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".benefit-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.to(".icon-glow", {
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs font-medium text-indigo-300">
              Estrutura validada
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Sistema de crescimento para negócios de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              alta performance
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Estrutura pensada para transformar tráfego em demanda comercial real.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {beneficios.map(({ icon: Icon, title, description, size }, index) => (
            <article
              key={title}
              className={`benefit-card group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/40 ${size}`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10" />

              <div className="mb-5 inline-flex rounded-xl bg-slate-800 p-3 border border-slate-700/50 text-indigo-400 icon-glow">
                <Icon size={24} strokeWidth={1.5} />
              </div>

              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-2">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="absolute right-6 bottom-6 opacity-40">
        <LoaderIcon className="w-10 h-10 text-indigo-400 animate-spin-slow" />
      </div>
    </section>
  );
}