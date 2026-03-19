"use client";

import { motion } from "framer-motion";
import { LoaderIcon } from "@/components/ui/loader-icon";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section data-lp-section className="bg-slate-950 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          data-lp-card
          className="rounded-3xl border border-indigo-400/25 bg-gradient-to-r from-indigo-600/25 via-slate-900 to-cyan-500/20 p-6 shadow-2xl shadow-indigo-950/30 sm:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
              <motion.span
                animate={{ rotate: [0, -12, 12, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="flex items-center gap-1">
                  <LoaderIcon size={14} className="text-cyan-100" />
                  <Sparkles size={13} />
                </span>
              </motion.span>
              Próximo passo
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Se você quer crescer com previsibilidade, precisa de uma experiência que converte
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
              Vamos estruturar sua página como um ativo comercial real com posicionamento premium e foco em receita.
            </p>
            <a
              href="#form-lp-business"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              Falar com especialista agora
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
