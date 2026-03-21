"use client";

import { motion } from "framer-motion";
import { LoaderIcon } from "@/components/ui/loader-icon";
import { BarChart3, Layers3, Rocket, ShieldCheck } from "lucide-react";

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
  return (
    <section data-lp-section className="relative bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400" />
            <span className="text-xs font-medium text-indigo-300">Solução Completa</span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Estrutura de crescimento para negócios de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">alta performance</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Um framework completo para transformar visitas em leads e leads em vendas recorrentes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {beneficios.map(({ icon: Icon, title, description, size }, index) => (
            <motion.article
              key={title}
              className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 transition-all duration-300 hover:bg-slate-800/80 hover:border-indigo-500/30 ${size}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="mb-5 inline-flex rounded-xl bg-slate-800 p-3 border border-slate-700/50 text-indigo-400 transition-colors duration-300">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-2">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
