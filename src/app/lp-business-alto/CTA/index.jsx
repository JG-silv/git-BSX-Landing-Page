"use client";

import { motion } from "framer-motion";
import { LoaderIcon } from "@/components/ui/loader-icon";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section data-lp-section className="relative bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="relative mx-auto w-full max-w-5xl">
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-indigo-900/40 to-slate-900 border border-indigo-500/20 p-8 sm:p-16 text-center shadow-2xl shadow-indigo-950/50"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-50" />
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              className="mx-auto mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 shadow-inner"
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={32} strokeWidth={1.5} />
            </motion.div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl max-w-3xl mx-auto">
              Pronto para construir uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">máquina de vendas previsível</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Vamos estruturar sua página como um ativo comercial real com posicionamento premium e foco em receita. Pare de depender de achismos e comece a escalar.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#form-lp-business"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-xl bg-indigo-600 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600/0 via-white/20 to-indigo-600/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10 flex items-center gap-2">
                  Quero receber meu diagnóstico
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.a>
              <span className="text-sm text-slate-500 font-medium">Resposta em até 24h úteis</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
