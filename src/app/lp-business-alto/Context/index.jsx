"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertCircle, Clock3, TrendingDown } from "lucide-react";
import { LoaderIcon } from "@/components/ui/loader-icon";

gsap.registerPlugin(ScrollTrigger);
// REVER OS TEXTOS COM GABRIEL - PARA VER SE ESTÃO CORRETOS
const dores = [
  {
    icon: TrendingDown,
    title: "Baixa conversão com tráfego alto",
    description:
      "Sua empresa investe para gerar visitas, mas o volume não se transforma em leads qualificados.",
  },
  {
    icon: AlertCircle,
    title: "Mensagem genérica e pouco convincente",
    description:
      "Sem narrativa estratégica, o visitante não percebe valor suficiente para avançar no funil.",
  },
  {
    icon: Clock3,
    title: "Decisões lentas e sem priorização",
    description:
      "A equipe executa muitas frentes sem clareza de impacto real no crescimento comercial.",
  },
];

export default function Context() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".context-card");

      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.to(".icon-pulse", {
        scale: 1.15,
        duration: 2,
        repeat: -1,
        yoyo: true,
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
      {/* textura */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay pointer-events-none" />

      {/* linha topo */}
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-medium text-slate-300">
              Diagnóstico comum
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            O problema não é esforço.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              É estrutura de conversão.
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Muitas empresas investem em tráfego, mas sem um sistema claro de
            decisão e narrativa, o visitante não avança.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 relative">
          {dores.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="context-card relative group rounded-3xl border border-slate-800/60 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500/40"
            >
              {/* glow hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10" />

              <div className="mb-6 inline-flex rounded-2xl bg-slate-800 p-3.5 shadow-inner border border-slate-700/50 text-slate-300 icon-pulse">
                <Icon size={24} strokeWidth={1.5} />
              </div>

              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-400">
                {description}
              </p>

              {/* efeito sutil de linha */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </article>
          ))}
        </div>
      </div>

      {/* loader animado decorativo */}
      <div className="absolute left-8 bottom-8 opacity-30">
        <LoaderIcon className="w-10 h-10 text-cyan-400 animate-spin-slow" />
      </div>
    </section>
  );
}