"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ObrigadoPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16 text-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

      <motion.div
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900/60 p-8 sm:p-16 text-center shadow-2xl backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-sm h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-50" />

        <motion.div
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-inner"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        >
          <CheckCircle2 size={48} strokeWidth={1.5} />
        </motion.div>

        <motion.h1
          className="text-3xl font-bold tracking-tight text-white sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Diagnóstico <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">solicitado com sucesso!</span>
        </motion.h1>

        <motion.div
          className="mt-6 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-base sm:text-lg leading-relaxed text-slate-300">
            Nossa equipe de especialistas já recebeu seus dados e entrará em contato em breve para estruturar o plano de ação da sua empresa.
          </p>
          <div className="inline-flex items-center gap-2 rounded-xl bg-slate-800/50 px-4 py-2 border border-slate-700/50 text-sm text-slate-400">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Tempo médio de resposta: <strong className="text-slate-200">até 24h úteis</strong>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/lp-business-alto" className="group w-full sm:w-auto">
            <motion.div
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-700 hover:text-white"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              Voltar para o início
            </motion.div>
          </Link>

          <a href="https://wa.me/5521997147642" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto">
            <motion.div
              className="relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/20 transition-all hover:bg-[#20bd5a]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              Falar no WhatsApp agora
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
