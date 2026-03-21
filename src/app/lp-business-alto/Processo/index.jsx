"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Lottie from "lottie-react";

import compassAnim from "@/components/ui/compass.json";
import searchAnim from "@/components/ui/search.json";
import layoutAnim from "@/components/ui/layout.json";
import rocketAnim from "@/components/ui/rocket.json";

const passos = [
  {
    id: "01",
    anim: compassAnim,
    title: "Diagnóstico do cenário",
    description:
      "Entendemos contexto de negócio, oferta e estágio atual da operação comercial.",
  },
  {
    id: "02",
    anim: searchAnim,
    title: "Arquitetura de conversão",
    description:
      "Definimos narrativa, proposta de valor e estrutura de página orientada à decisão.",
  },
  {
    id: "03",
    anim: layoutAnim,
    title: "Design e implementação",
    description:
      "Construímos experiência premium focada em clareza, confiança e performance.",
  },
  {
    id: "04",
    anim: rocketAnim,
    title: "Otimização contínua",
    description:
      "Ajustamos pontos críticos com base em dados para aumentar conversão.",
  },
];

export default function Processo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".process-line", {
        scaleX: 0,
        duration: 1.4,
        ease: "power4.out",
        transformOrigin: "left",
      });

      gsap.to(".glow-orb", {
        y: 40,
        repeat: -1,
        yoyo: true,
        duration: 8,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-950 px-5 py-20"
    >
      {/*  */}
      <div className="glow-orb absolute -left-20 top-10 h-72 w-72 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="glow-orb absolute right-0 top-32 h-80 w-80 bg-indigo-500/20 blur-3xl rounded-full" />

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs text-cyan-300">
            Como funciona
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Metodologia para transformar uma LP em ativo de aquisição
          </h2>
        </div>

        {/* timeline */}
        <div className="relative mt-16">
          <div className="process-line hidden lg:block absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/20 via-indigo-500/40 to-cyan-500/20" />

          <div className="grid gap-6 lg:grid-cols-4">
            {passos.map((step) => (
              <article
                key={step.id}
                className="process-card group relative"
              >
                <div className="relative h-full rounded-2xl border border-slate-800 bg-slate-900/40 p-7 backdrop-blur transition-all duration-500 hover:border-indigo-500/40 hover:bg-slate-900">
                  
                  {/* */}
                  <span className="text-xs tracking-widest text-cyan-400/70">
                    {step.id}
                  </span>

                  {/* */}
                  <div className="mt-4 mb-6 w-14">
                    <Lottie animationData={step.anim} loop />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/*  */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}