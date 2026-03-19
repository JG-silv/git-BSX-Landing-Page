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
    <section className="bg-slate-900 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
            Contexto
          </span>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            O problema não é falta de esforço, é falta de estrutura de conversão
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            Empresas que operam com metas agressivas precisam de uma experiência digital orientada por decisão de compra, não apenas uma página bonita.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {dores.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5 shadow-lg shadow-slate-950/30"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="mb-3 inline-flex rounded-xl bg-cyan-400/10 p-2 text-cyan-300"
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Icon size={18} />
              </motion.div>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
