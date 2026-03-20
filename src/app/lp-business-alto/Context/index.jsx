"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock3, TrendingDown } from "lucide-react";

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
  return (
    <section data-lp-section className="relative bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-medium text-slate-300">O Desafio Atual</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            O problema não é falta de esforço, é falta de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">estrutura de conversão</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Empresas que operam com metas agressivas precisam de uma experiência digital orientada por decisão de compra, não apenas uma página bonita.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 relative">
          {/* Linha conectora desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0" />
          
          {dores.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              data-lp-card
              className="relative group rounded-3xl border border-slate-800/60 bg-slate-900/40 p-8 backdrop-blur-sm transition-colors hover:bg-slate-800/60 hover:border-slate-700 z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <motion.div
                className="mb-6 inline-flex rounded-2xl bg-slate-800 p-3.5 shadow-inner border border-slate-700/50 text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500/30 group-hover:bg-cyan-950/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Icon size={24} strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
