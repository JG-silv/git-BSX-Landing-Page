"use client";

import { motion } from "framer-motion";
import { Building2, Quote, Star } from "lucide-react";

const resultados = [
  { valor: "+200", label: "Projetos implementados" },
  { valor: "+450", label: "Clientes corporativos ativos" },
  { valor: "95%", label: "Satisfação média" },
  { valor: "4.9/5", label: "Avaliação dos clientes" },
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
      "A estrutura do funil ficou muito mais clara. Hoje recebemos leads com contexto, interesse e potencial de fechamento.",
  },
];

export default function Proof() {
  return (
    <section data-lp-section className="relative bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-xs font-medium text-amber-300">Resultados Reais</span>
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Evidências de performance para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">decisões sem achismo</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6 mb-8">
          {resultados.map((item, index) => (
            <motion.article
              key={item.label}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 text-center transition-all duration-300 hover:bg-slate-800/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">{item.valor}</p>
              <p className="text-sm font-medium text-slate-400">{item.label}</p>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 mb-6">
          {depoimentos.map((item, index) => (
            <motion.article
              key={item.nome}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 transition-all duration-300 hover:bg-slate-800/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Quote size={24} className="text-slate-700 mb-4 group-hover:text-indigo-400 transition-colors duration-300" strokeWidth={1.5} />
              <p className="text-base sm:text-lg leading-relaxed text-slate-300 mb-6 font-medium">"{item.texto}"</p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-slate-600">
                  <span className="text-sm font-bold text-slate-300">{item.nome.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-white">{item.nome}</p>
                  <p className="text-xs sm:text-sm text-slate-400">{item.cargo}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-indigo-950/20 p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300 border border-indigo-500/20">
                <Building2 size={16} />
                Métricas reais do cenário atual
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-slate-300 max-w-3xl">
                Operação com base ativa acima de <span className="font-semibold text-white">450+ clientes corporativos</span>, mantendo consistência de atendimento e crescimento previsível.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
