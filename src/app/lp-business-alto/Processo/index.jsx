"use client";

import { motion } from "framer-motion";
import { LoaderIcon } from "@/components/ui/loader-icon";
import { Compass, FileSearch, LayoutTemplate, Rocket } from "lucide-react";

const passos = [
  {
    id: "01",
    icon: Compass,
    title: "Diagnóstico do cenário",
    description:
      "Entendemos contexto de negócio, oferta e estágio atual da operação comercial.",
  },
  {
    id: "02",
    icon: FileSearch,
    title: "Arquitetura de conversão",
    description:
      "Definimos narrativa, proposta de valor e estrutura de página orientada à decisão.",
  },
  {
    id: "03",
    icon: LayoutTemplate,
    title: "Design e implementação",
    description:
      "Construímos uma experiência premium com foco em clareza, confiança e performance.",
  },
  {
    id: "04",
    icon: Rocket,
    title: "Otimização contínua",
    description:
      "Ajustamos pontos críticos com base em dados para elevar conversão e qualidade dos leads.",
  },
];

export default function Processo() {
  return (
    <section data-lp-section className="relative bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-medium text-cyan-300">Como Funciona</span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Metodologia que transforma uma LP em um <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">ativo real de receita</span>
          </h2>
        </div>

        <div className="mt-12 lg:mt-16 relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-800/60" />
          <div className="mt-0 grid grid-cols-1 gap-6 lg:grid-cols-4 relative">
            {passos.map(({ id, icon: Icon, title, description }, index) => (
              <motion.article
                key={id}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="hidden lg:block absolute -top-12 left-6 h-4 w-4 rounded-full bg-slate-950 border-2 border-slate-700 transition-colors duration-300 z-10" />
                
                <div className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 transition-all duration-300 hover:bg-slate-800/60 hover:border-slate-700 h-full">
                  <div className="mb-5 flex items-start justify-between">
                    <span className="text-sm font-bold tracking-widest text-cyan-400/80">
                      {id}
                    </span>
                    <div className="rounded-xl bg-slate-800 border border-slate-700/50 p-2.5 text-slate-400 transition-all duration-300">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-2">{title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
