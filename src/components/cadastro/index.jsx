"use client";

import React, { useState } from "react";
import { props } from "./props";
import { trackEvent } from '../../app/api/gtm.js'; // Importe a função de rastreamento

const CadastroWorkflow = () => {
  const [typePessoa, setTypePessoa] = useState(null);
  React.useEffect(() => {
  // Dispara um evento nomeado para o GTM quando o componente carrega
  trackEvent('view_cadastro_page', {
    page_title: 'Página de Cadastro',
  });
}, []);

  // monta titles/descriptions dinâmicos
  const computedSteps = props.map((step, idx) => {
    if (idx === 0) {
      return {
        title: "Nome/Razão Social",
        description:
          typePessoa === "juridica"
            ? "Para Pessoa Jurídica: Insira o nome completo da empresa ou a razão social conforme registrada na Receita Federal. Exemplo: “Empresa XYZ Ltda”."
            : "Para Pessoa Física: Insira o nome completo do indivíduo. Exemplo: “João da Silva”.",
      };
    }
    if (idx === 1) {
      return {
        title: typePessoa === "juridica" ? "CNPJ" : "CPF",
        description:
          typePessoa === "juridica"
            ? "Digite o número do CNPJ da empresa no formato: XXXXXXXXXXXX00. Exemplo: 12345678000190."
            : "Insira o número do CPF no formato: XXX.XXX.XXX-XX. Exemplo: 123.456.789-09.",
      };
    }
    return step;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050A30] to-[#F5F5F5] flex flex-col items-center py-16 px-4">
      {/* ---- Título principal ---- */}
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        CADASTRE-SE AGORA PARA EFETUAR SUAS CONSULTAS
      </h1>

      {/* ---- Botão inicial ---- */}
      <a
        href="https://app.grupobsx.com.br/access/cadastro/default.aspx?info=VJlOSuCFTQigTiUxnXvhQCncMbtHtOuz26fb72yZSxgk3z89ORVq6Q%3d%3d"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => dataLayer.push({ event: "Foi_para_form_Cadastro" })}
      >
        <button
          id="PageCadastro"
          className="bg-[#83227D] text-white px-6 py-3 rounded-full shadow-white/50 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 mb-12"
        >
          Cadastre-se
        </button>
      </a>

      {/* ---- Subtítulo e instrução ---- */}
      <div className="text-2xl font-semibold text-white flex items-center mb-2">
        <span>
          Não sabe efetuar o cadastro? siga agora este passo a passo abaixo
        </span>
        <svg
          className="w-6 h-6 ml-2 text-white animate-pulse drop-shadow-[0_0_8px_rgba(131,34,125,0.7)]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 4l6 6-6 6-1.4-1.4L13.2 11H4v-2h9.2L8.6 5.4z" />
        </svg>
      </div>
      <p className="text-white mb-8 text-center">
        Clique em pessoa jurídica ou pessoa física para iniciar a explicação do
        passo a passo
      </p>

      {/* ---- Seleção de tipo de pessoa ---- */}
      {typePessoa === null && (
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl mb-12">
          <h2 className="text-2xl font-semibold text-[#3b67ac] mb-4 text-center">
            Tipo de Pessoa
          </h2>
          <div className="flex gap-4">
            <button
              onClick={() => setTypePessoa("juridica")}
              className="flex-1 bg-white p-4 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition transform text-[#050A30]"
            >
              Pessoa Jurídica
            </button>
            <button
              onClick={() => setTypePessoa("fisica")}
              className="flex-1 bg-white p-4 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition transform text-[#050A30]"
            >
              Pessoa Física
            </button>
          </div>
        </div>
      )}

      {/* ---- Workflow em grid com botão de voltar ---- */}
      {typePessoa !== null && (
        <div className="w-full max-w-5xl mb-12 relative">
          {/* Botão de voltar */}
          <button
            onClick={() => setTypePessoa(null)}
            className=" bg-white p-3 rounded-full shadow hover:shadow-lg transition transform hover:-translate-y-1 mb-4"
            aria-label="Voltar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#050A30]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {computedSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
              >
                <div className="text-xl font-bold text-[#050A30] mb-2">
                  Passo {idx + 1}
                </div>
                <h2 className="text-lg font-semibold text-[#3b67ac] mb-2">
                  {step.title}
                </h2>
                <p className="text-[#050A30] text-sm">{step.description}</p>

                {/* seta indicando o próximo */}
                {idx < computedSteps.length - 1 && (
                  <div className="absolute right-4 bottom-4">
                    <svg
                      className="w-6 h-6 text-[#3b67ac] animate-pulse"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 4l6 6-6 6-1.4-1.4L13.2 11H4v-2h9.2L8.6 5.4z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---- Botão final ---- */}
      {typePessoa !== null && (
        <a
          href="https://app.grupobsx.com.br/access/cadastro/default.aspx?info=VJlOSuCFTQigTiUxnXvhQCncMbtHtOuz26fb72yZSxgk3z89ORVq6Q%3d%3d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#83227d] text-white px-8 py-4 rounded-full shadow-2xl animate-pulse transform hover:scale-110 transition duration-300">
            Cadastre-se Agora
          </button>
        </a>
      )}
    </div>
  );
};

export default CadastroWorkflow;
