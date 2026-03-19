"use client";
import { useEffect } from 'react';

import React from "react";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function ObrigadoPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "page_view", 
        page_path: "/b2b/obrigado",
        page_title: "Obrigado B2B",
      });

      window.dataLayer.push({ event: "conversao_b2b_concluida" });
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center animate-scale-in">
        {/* Ícone Animado */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-bounce-slow">
            <CheckCircle className="text-green-600 w-12 h-12" strokeWidth={3} />
          </div>
        </div>

        {/* Mensagem Principal */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Recebemos sua solicitação!
        </h1>

        {/* Mensagem de Apoio */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Obrigado pelo interesse no{" "}
          <span className="font-bold text-[#6b4eff]"> Grupo BSX</span>. Nossa
          equipe comercial já recebeu seus dados e entrará em contato nas
          próximas horas para apresentar a solução ideal para sua empresa.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8 text-left">
          <h3 className="font-bold text-blue-900 mb-2">
            O que acontece agora?
          </h3>
          <ul className="space-y-2 text-blue-800/80 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Análise preliminar do seu perfil de negócio.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Contato via WhatsApp ou telefone para agendamento.
            </li>
          </ul>
        </div>

        <Link
          href="/b2b"
          className="inline-flex items-center gap-2 font-semibold text-[#6b4eff] hover:text-[#5a3de0] transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar para a página inicial
        </Link>
      </div>
      {/* Footer simples */}
      <footer className="mt-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} Grupo BSX. Todos os direitos reservados.
      </footer>
    </main>
  );
}
