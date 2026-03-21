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
// REVER OS TEXTOS COM GABRIEL - PARA VER SE ESTÃO CORRETOS
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section data-lp-section className="relative bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto w-full max-w-4xl">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 mb-6">
            <span className="text-xs font-medium text-slate-300">Dúvidas Frequentes</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ainda tem alguma <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">dúvida?</span>
          </h2>
        </div>

        <div className="mx-auto mt-8 sm:mt-10 max-w-3xl space-y-4">
          {itensFaq.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.pergunta}
                className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? "border-indigo-500/30 bg-slate-800/60 shadow-lg shadow-indigo-900/10" 
                    : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left focus:outline-none"
                >
                  <span className={`text-sm sm:text-base font-medium transition-colors duration-300 pr-4 ${isOpen ? "text-indigo-300" : "text-slate-200"}`}>
                    {faq.pergunta}
                  </span>
                  <div
                    className={`ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-400 rotate-180" : "border-slate-700 bg-slate-800 text-slate-400"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-sm leading-relaxed text-slate-400">
                    <p className="border-t border-slate-700/50 pt-4 mt-2">
                      {faq.resposta}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
