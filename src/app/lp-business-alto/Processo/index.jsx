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
    <section data-lp-section className="relative bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24 overflow-hidden">
      {/* Elementos de background decorativos */}
      <div className="absolute top-1/4 -left-64 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-medium text-cyan-300">Como Funciona</span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Metodologia que transforma uma LP em um <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">ativo real de receita</span>
          </h2>
        </motion.div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-800/60" />
          <div className="mt-0 grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6 relative">
            {passos.map(({ id, icon: Icon, title, description }, index) => (
              <motion.article
                key={id}
                data-lp-card
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="hidden lg:block absolute -top-12 left-6 h-4 w-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-cyan-400 transition-colors duration-300 z-10" />
                
                <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/60 hover:border-slate-700 h-full">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="mb-6 flex items-start justify-between relative z-10">
                    <span className="text-sm font-bold tracking-widest text-cyan-400/80 group-hover:text-cyan-400 transition-colors">
                      {id}
                    </span>
                    <motion.div
                      className="rounded-2xl bg-slate-800 border border-slate-700/50 p-3 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 group-hover:bg-cyan-950/20 transition-all duration-300 shadow-inner"
                      whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </motion.div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3">{title}</h3>
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
