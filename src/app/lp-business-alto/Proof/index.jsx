"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Lottie from "lottie-react";

import quoteAnim from "@/components/ui/quote.json";
import starAnim from "@/components/ui/star.json";
import buildingAnim from "@/components/ui/building.json";

const resultados = [
  { valor: 200, prefix: "+", label: "Projetos implementados" },
  { valor: 450, prefix: "+", label: "Clientes corporativos ativos" },
  { valor: 95, suffix: "%", label: "Satisfação média" },
  { valor: 4.9, suffix: "/5", label: "Avaliação dos clientes" },
];

const depoimentos = [
  {
    nome: "Marina Costa",
    cargo: "Diretora de Marketing",
    texto:
      "Saímos de uma página estática para uma experiência com narrativa comercial real e evolução perceptível de conversão.",
  },
  {
    nome: "Rafael Teixeira",
    cargo: "Sócio-Operador",
    texto:
      "A estrutura do funil ficou muito mais clara. Hoje recebemos leads com contexto e potencial de fechamento.",
  },
];

export default function Proof() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proof-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".testimonial", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.from(".metric-block", {
        scale: 0.95,
        opacity: 0,
        duration: 0.7,
        delay: 0.4,
      });

      document.querySelectorAll(".counter").forEach((el) => {
        const target = parseFloat(el.getAttribute("data-value"));
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent =
              target % 1 === 0
                ? Math.floor(obj.val)
                : obj.val.toFixed(1);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-900 px-5 py-20"
    >
      {/*  */}
      <div className="absolute left-0 top-10 h-72 w-72 bg-indigo-500/20 blur-3xl rounded-full" />
      <div className="absolute right-0 top-20 h-72 w-72 bg-amber-500/20 blur-3xl rounded-full" />

      <div className="mx-auto max-w-7xl">
        {/* */}
        <div className="mb-14 max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-xs text-amber-300">
            Resultados reais
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Evidências de performance
          </h2>
        </div>

        {/* */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-10">
          {resultados.map((item) => (
            <div
              key={item.label}
              className="proof-card group rounded-2xl border border-slate-800 bg-slate-900/50 p-7 text-center backdrop-blur hover:border-indigo-500/30 transition"
            >
              <div className="mx-auto mb-4 w-10">
                <Lottie animationData={starAnim} loop />
              </div>

              <p className="text-3xl font-bold text-white">
                {item.prefix}
                <span
                  className="counter"
                  data-value={item.valor}
                >
                  0
                </span>
                {item.suffix}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/*  */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {depoimentos.map((item) => (
            <div
              key={item.nome}
              className="testimonial rounded-2xl border border-slate-800 bg-slate-900/40 p-7 hover:border-indigo-500/20 transition"
            >
              <div className="mb-4 w-10">
                <Lottie animationData={quoteAnim} loop />
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                "{item.texto}"
              </p>

              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-full bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-300">
                  {item.nome.charAt(0)}
                </div>

                <div>
                  <p className="text-white font-semibold">
                    {item.nome}
                  </p>
                  <p className="text-sm text-slate-400">
                    {item.cargo}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  */}
        <div className="metric-block rounded-2xl border border-indigo-500/20 bg-indigo-950/30 p-8 backdrop-blur">
          <div className="flex items-center gap-4">
            <div className="w-12">
              <Lottie animationData={buildingAnim} loop />
            </div>

            <p className="text-slate-300">
              Operação com base ativa acima de{" "}
              <span className="text-white font-semibold">
                450+ clientes corporativos
              </span>{" "}
              com crescimento consistente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}