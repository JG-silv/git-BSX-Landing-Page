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
    <section data-lp-section className="relative bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-xs font-medium text-amber-300">Resultados Reais</span>
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Evidências de performance para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">decisões sem achismo</span>
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/50 px-5 py-3 text-sm text-slate-300 backdrop-blur-sm">
            <Star size={18} className="fill-amber-400 text-amber-400" />
            <span className="font-medium text-white">Times de alto crescimento</span> já usam essa estrutura
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6 mb-8">
          {resultados.map((item, index) => (
            <motion.article
              key={item.label}
              data-lp-card
              className="group relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 sm:p-8 text-center backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/60 hover:border-slate-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="relative z-10 text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">{item.valor}</p>
              <p className="relative z-10 text-sm font-medium text-slate-400">{item.label}</p>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
          {depoimentos.map((item, index) => (
            <motion.article
              key={item.nome}
              data-lp-card
              className="group relative rounded-3xl border border-slate-800/60 bg-slate-900/40 p-8 sm:p-10 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/60 hover:border-slate-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />
              
              <div className="relative z-10">
                <Quote size={32} className="text-slate-700 mb-6 group-hover:text-indigo-400 transition-colors duration-500" strokeWidth={1} />
                <p className="text-base sm:text-lg leading-relaxed text-slate-300 mb-8 font-medium">"{item.texto}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-slate-600">
                    <span className="text-sm font-bold text-slate-300">{item.nome.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.nome}</p>
                    <p className="text-sm text-slate-400">{item.cargo}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          data-lp-card
          className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-indigo-950/20 p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300 border border-indigo-500/20">
                <Building2 size={16} />
                Métricas reais do cenário atual
              </div>
              <p className="text-lg leading-relaxed text-slate-300 max-w-3xl">
                Operação com base ativa acima de <span className="font-semibold text-white">450+ clientes corporativos</span>, mantendo consistência de atendimento e crescimento previsível.
              </p>
            </div>
            <div className="shrink-0 flex -space-x-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className={`h-12 w-12 rounded-full border-2 border-indigo-950 bg-slate-800 flex items-center justify-center z-[${5-i}]`}>
                  <Building2 size={16} className="text-slate-500" />
                </div>
              ))}
              <div className="h-12 w-12 rounded-full border-2 border-indigo-950 bg-indigo-600 flex items-center justify-center text-xs font-bold text-white z-0">
                +450
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
