"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkles, ArrowRight } from "lucide-react";
import { LoaderIcon } from "@/components/ui/loader-icon";

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(".cta-badge", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
      })
        .from(".cta-title", {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.2")
        .from(".cta-text", {
          opacity: 0,
          y: 25,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.3")
        .from(".cta-actions", {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
        }, "-=0.2");

      gsap.to(".cta-glow", {
        scale: 1.1,
        opacity: 0.6,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
// REVER OS TEXTOS COM GABRIEL - PARA VER SE ESTÃO CORRETOS
  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24 overflow-hidden"
    >
      <div className="relative mx-auto w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-indigo-900/40 to-slate-900 border border-indigo-500/20 p-6 sm:p-12 text-center shadow-2xl">

          {/* background */}
          <div className="cta-glow absolute -top-20 -right-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative z-10">
            <div className="cta-badge mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300">
              <Sparkles size={28} strokeWidth={1.5} />
            </div>

            <h2 className="cta-title text-2xl font-bold tracking-tight text-white sm:text-4xl max-w-3xl mx-auto">
              Pronto para construir uma{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                máquina de vendas previsível
              </span>
              ?
            </h2>

            <p className="cta-text mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Vamos estruturar sua página como um ativo comercial real com
              posicionamento premium e foco em receita.
            </p>

            <div className="cta-actions mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#form-lp-business"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-xl bg-indigo-600 px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-indigo-700 hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Quero receber meu diagnóstico
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>

                {/* botao com efeito */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </a>

              <span className="text-sm text-slate-500 font-medium">
                Resposta em até 24h úteis
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* loader, pra girar */}
      <div className="absolute left-8 bottom-8 opacity-30">
        <LoaderIcon className="w-10 h-10 text-indigo-400 animate-spin-slow" />
      </div>
    </section>
  );
}