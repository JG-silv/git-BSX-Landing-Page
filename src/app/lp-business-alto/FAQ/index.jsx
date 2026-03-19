"use client";

import { motion } from "framer-motion";
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
    <section className="bg-slate-900 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
            FAQ
          </span>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Respostas objetivas para você avançar com confiança.
          </p>
        </motion.div>

        <div className="mt-8 space-y-3">
          {itensFaq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.article
                key={item.pergunta}
                className="rounded-2xl border border-slate-700 bg-slate-800/70 px-4 py-3 transition hover:border-indigo-400/40 sm:px-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {item.pergunta}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-300 transition ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden pr-6 text-sm leading-relaxed text-slate-300">
                    {item.resposta}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
