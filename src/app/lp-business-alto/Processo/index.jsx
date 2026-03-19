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
    <section data-lp-section className="bg-slate-950 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
            Processo
          </span>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Como transformamos uma LP em um ativo real de receita
          </h2>
        </motion.div>

        <div className="mt-10">
          <div className="hidden h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent lg:block" />
          <div className="mt-0 grid grid-cols-1 gap-4 lg:grid-cols-4">
            {passos.map(({ id, icon: Icon, title, description }, index) => (
              <motion.article
                key={id}
                data-lp-card
                className="relative rounded-2xl border border-slate-700 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/30"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-cyan-300">
                    {id}
                  </span>
                  <motion.div
                    className="rounded-lg bg-indigo-500/15 p-2 text-indigo-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.45 }}
                  >
                    <div className="flex items-center gap-1.5">
                      <LoaderIcon size={13} className="text-cyan-300" />
                      <Icon size={15} />
                    </div>
                  </motion.div>
                </div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
