"use client";
import React, { useState } from "react";
import { Button } from "../buttons/button_tabela";
import ButtonCadastro from "../buttons/button_cadastro.jsx";
import { Check, X, HelpCircle } from "lucide-react";
import {
  inter,
  poppins,
  sourceSans3,
} from "../../app/components/fonts/fonts.jsx";
import Link from "next/link";

const FeatureIcon = ({ available }) =>
  available ? (
    <Check className="w-5 h-5 text-blue-600" />
  ) : (
    <X className="w-5 h-5 text-gray-400" />
  );

// ESTADO FECHADO OU ABERTO PARA MOBILE
const FeatureListItemMobile = ({ feature, planFeatures }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isAvailable = planFeatures.includes(feature.name);

  return (
    <li className="flex flex-col py-2">
      <div className="flex items-center gap-3 ">
        <FeatureIcon available={isAvailable} />
        <span
          className={`text-sm ${
            isAvailable ? "text-gray-800" : "text-gray-400 line-through"
          }`}
        >
          {feature.name}
        </span>
        {/* O ícone agora tem um evento de clique para mostrar/esconder a descrição */}
        <HelpCircle
          className="w-4 h-4 text-gray-400 cursor-pointer ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {/* A descrição só aparece se o estado 'isOpen' for verdadeiro */}
      {isOpen && (
        <div className="mt-2 ml-8 pl-3 border-l-2 border-gray-200">
          <p className="p-2 text-xs text-gray-600 bg-gray-50 rounded-md">
            {feature.description}
          </p>
        </div>
      )}
    </li>
  );
};

const TabelaComparacao = ({ planos, features }) => {
  const gridTemplateColumns = `minmax(250px, 1.5fr) repeat(${planos.length}, minmax(150px, 1fr))`;

  return (
    <div className="w-full">
      {/* ================================================================== */}
      {/*                         LAYOUT PARA DESKTOP                        */}
      {/* ================================================================== */}
      <div className="hidden lg:block translate-y-0 shadow-lg shadow-blue-700/20">
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {/* ... (cabeçalho da tabela) ... */}
          <div className="grid" style={{ gridTemplateColumns }}>
            <div className="p-6 font-bold text-[#83227D] flex items-end">
              <h2 className="h2 font-heading">Recursos</h2>
            </div>
            {planos.map((plan) => (
              <div
                key={plan.id}
                className={`relative pt-12 pb-4 p-2 text-center border-l border-gray-200
                  ${plan.theme.highlightClass}
                  }`}
              >
                {plan.isRecommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <span className="text-xs font-bold text-blue-600 uppercase">
                      Mais Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900">
                  {plan.title}
                </h3>
                <div className="mt-2">
                  <span
                    className={`text-2xl font-extrabold text-[${plan.theme.priceColor}]`}
                  >
                    R${plan.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CORPO DA TABELA (FEATURES) */}
          <div className="divide-y divide-gray-200">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="grid items-center"
                style={{ gridTemplateColumns }}
              >
                <div
                  className={`${poppins.className} p-4 text-2sm font-medium text-[#26478D]`}
                >
                  <div className="relative flex items-center group">
                    <span>{feature.name}</span>
                    <HelpCircle className="w-4 h-4 text-gray-400 ml-2 opacity-75" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs bg-gray-800 text-white text-xs rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {feature.description}
                    </div>
                  </div>
                </div>
                {planos.map((plan) => (
                  <div
                    key={plan.id}
                    className={`h-full p-4 flex justify-center items-center border-l border-gray-200 ${
                      plan.isRecommended
                        ? "bg-blue-100/50"
                        : "" /*MUDE AQUI A COR DA TABELA QUE NÃO É RECOMENDADA*/
                    }`}
                  >
                    <FeatureIcon
                      available={plan.features.includes(feature.name)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* ... (rodapé da tabela) ... */}
          <div className="grid" style={{ gridTemplateColumns }}>
            <div className="p-6"></div>
            {planos.map((plan) => (
              <div
                key={plan.id}
                className={`p-6 text-center border-l border-gray-200 ${
                  plan.isRecommended ? "bg-blue-100/50" : ""
                }`}
              >
                <Button
                  onClick={() =>
                    dataLayer.push({ event: "Button_cpf_cnpj" })
                  }
                  variant={plan.theme.buttonVariant}
                  size="lg"
                  asChild
                  className="w-full font-bold"
                >
                  <Link
                    href={`${plan.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Selecionar relatório
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/*                        LAYOUT PARA MOBILE                          */}
      {/* ================================================================== */}
      <div className="block lg:hidden space-y-8">
        {planos.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl border p-6 ${
              plan.isRecommended
                ? "border-blue-600 border-2"
                : "border-gray-200"
            }`}
          >
            {/* ... (cabeçalho do card mobile) ... */}
            <div className="text-center relative">
              {plan.isRecommended && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Mais Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900">{plan.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold text-gray-900">
                  R${plan.price}
                </span>
              </div>
              <Button
                variant={plan.theme.buttonVariant}
                size="lg"
                asChild
                className="w-full font-bold flex"
              >
                <Link
                  href={`${plan.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Selecionar Plano
                </Link>
              </Button>
            </div>
            <ul className="divide-y divide-gray-100 mt-8 border-t border-gray-200 pt-4">
              {features.map((feature) => (
                <FeatureListItemMobile
                  key={feature.name}
                  feature={feature}
                  planFeatures={plan.features}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* BOTÃO DE CADASTRO */}
      <div>
        <ButtonCadastro />
      </div>
    </div>
  );
};

export default TabelaComparacao;
