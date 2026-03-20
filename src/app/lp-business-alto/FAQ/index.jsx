  "use client";

import { motion } from "framer-motion";
import { LoaderIcon } from "@/components/ui/loader-icon";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const itensFaq = [
  {
    pergunta: "Quanto tempo demora para receber retorno?",
    resposta:
      "Após o envio do formulário, o contato inicial acontece rapidamente para mapear seu cenário e alinhar a melhor abordagem.",
  },
  {
    pergunta: "Como funciona o processo?",
    resposta:
      "Primeiro entendemos seus objetivos comerciais, depois apresentamos um diagnóstico com oportunidades e um plano de ação claro.",
  },
  {
    pergunta: "Precisa de contrato de longo prazo?",
    resposta:
      "A estrutura é flexível e desenhada conforme maturidade do negócio, sempre com escopo transparente e foco em resultado.",
  },
  {
    pergunta: "Como entro em contato com o time?",
    resposta:
      "Você pode enviar o formulário da página ou falar diretamente no WhatsApp pelo botão flutuante.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section data-lp-section className="relative bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="relative mx-auto w-full max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 mb-6">
            <span className="text-xs font-medium text-slate-300">Dúvidas Frequentes</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ainda tem alguma <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">dúvida?</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {itensFaq.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.pergunta}
                data-lp-card
                className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? "border-indigo-500/30 bg-slate-800/60 shadow-lg shadow-indigo-900/10" 
                    : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-800/40"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <span className={`text-base font-medium transition-colors duration-300 ${isOpen ? "text-indigo-300" : "text-slate-200 group-hover:text-white"}`}>
                    {faq.pergunta}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-400" : "border-slate-700 bg-slate-800 text-slate-400 group-hover:border-slate-600 group-hover:text-slate-300"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ 
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-slate-400">
                    <p className="border-t border-slate-700/50 pt-4 mt-2">
                      {faq.resposta}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
