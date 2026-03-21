"use client";

import { motion } from "framer-motion";
import { LoaderIcon } from "@/components/ui/loader-icon";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section data-lp-section className="relative bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-indigo-900/40 to-slate-900 border border-indigo-500/20 p-6 sm:p-12 text-center shadow-2xl">
          <div className="relative z-10">
            <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300">
              <Sparkles size={28} strokeWidth={1.5} />
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl max-w-3xl mx-auto">
              Pronto para construir uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">máquina de vendas previsível</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Vamos estruturar sua página como um ativo comercial real com posicionamento premium e foco em receita. Pare de depender de achismos e comece a escalar.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#form-lp-business"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-xl bg-indigo-600 px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-indigo-700"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Quero receber meu diagnóstico
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
              <span className="text-sm text-slate-500 font-medium">Resposta em até 24h úteis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
