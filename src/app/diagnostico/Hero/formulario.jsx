import React, { useState, useEffect } from "react";
import { CreditCard, ShieldCheck, AlertCircle, Search } from "lucide-react";
import LeadForm from "./leadForm";

const FormSection = () => {

  return (
    <section
      id="formulario"
      className="px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20 pb-10"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all hover:shadow-xl">
          <div className="bg-slate-900 p-5 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 via-amber-500 to-slate-900 opacity-50" />

            {/* Facilidade de pagamento */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
              <CreditCard size={14} />
              <span>Parcele em até 3x no cartão</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              Diagnóstico Estratégico de Regularização
              <br />
             
            </h2>

            <p className="text-slate-300 text-sm md:text-base max-w-lg mx-auto mb-8">
              Clareza do que trava seu CPF ou CNPJ e o caminho mais seguro para destravar.
            </p>

            {/* BLOCO DE VAGAS DA SEMANA */}
            <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800 w-full max-w-md mx-auto mb-6 shadow-inner">
              <div className="flex items-center justify-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wide mb-2">
                <AlertCircle size={14} />
                <span>Vagas de análise desta semana</span>
              </div>

              <p className="text-slate-300 text-sm text-center leading-relaxed">
                Nossa equipe trabalha com número limitado de diagnósticos por
                semana para manter análise individual e criteriosa.
              </p>

              <div className="mt-3 text-center">
                <span className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-xs font-semibold">
                  Restam poucas vagas disponíveis
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 text-xs">
              <Search size={12} />
              <span>
                Diagnóstico primeiro. Encaminhamentos depois (quando aplicável).
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-10 bg-white">
            <div className="flex items-center justify-center gap-2 mb-6 text-slate-500 text-xs font-medium">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>Seus dados são tratados com confidencialidade e LGPD</span>
            </div>

            {/* form real */}
            <LeadForm />

            {/* Micro-reassurance abaixo do form */}
            <div className="mt-6 text-center text-xs text-slate-500 leading-relaxed">
              Você não precisa “adivinhar” o caminho. Após o envio, nossa equipe
              analisa e retorna com orientação objetiva do próximo passo.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
