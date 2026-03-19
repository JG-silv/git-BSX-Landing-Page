"use client";
import React from "react";
import {
  Scale,
  Clock,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  FileText,
  Activity,
  ShieldCheck,
  Search,
  Map,
  Wrench,
} from "lucide-react";
import Formulario from "./formulario";
import LeadForm from "./leadForm";

const LandingPageBSX = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // PASSO A PASSO 
  const steps = [
    {
      step: 1,
      title: "Solicitação",
      desc: "Você preenche o formulário e descreve sua situação (CPF ou CNPJ).",
      icon: FileText,
    },
    {
      step: 2,
      title: "Diagnóstico (o que trava de verdade)",
      desc: "Analisamos os sinais e restrições que mais bloqueiam crédito, contrato e aprovação.",
      icon: Search,
    },
    {
      step: 3,
      title: "Plano de regularização",
      desc: "Você recebe um caminho prático: o que fazer primeiro, o que evitar e qual é a rota mais segura.",
      icon: Map,
    },
    {
      step: 4,
      title: "Execução (quando aplicável)",
      desc: "Se fizer sentido, orientamos os próximos passos. Em casos específicos, pode existir rota jurídica, mas só com base real.",
      icon: Wrench,
    },
    {
      step: 5,
      title: "Acompanhamento",
      desc: "Acompanhamos a evolução do caso conforme o pacote e registramos progresso e próximos passos.",
      icon: Activity,
    },
  ];

  const TimelineItem = ({ step, title, desc, icon: Icon, isLast }) => {
    return (
      <div className="relative flex gap-6 pb-12 last:pb-0 group">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 z-10 shrink-0">
            <Icon size={20} />
          </div>
          {!isLast && (
            <div className="absolute top-12 bottom-0 w-px bg-slate-200 group-hover:bg-blue-200 transition-colors h-full" />
          )}
        </div>

        <div className="pt-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1 block">
            Passo 0{step}
          </span>
          <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-700 font-sans text-slate-800">
      {/* --- HERO SECTION --- */}
      <section className="pt-8 pb-10 lg:pt-15 lg:pb-14 px-4 sm:px-6 lg:px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 ">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Seu nome está negativado, mas
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {" "}
                você sabe exatamente o motivo?
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Regularizar CPF ou CNPJ não começa pagando qualquer coisa.
              Começa entendendo o que realmente está bloqueando seu crédito, e
              qual é o caminho mais seguro para destravar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("formulario")}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30 cursor-pointer"
              >
                Avaliar meu caso agora
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="mt-6 space-y-3 max-w-lg">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <ShieldCheck size={16} className="text-blue-400" />
                <span>
                  Análise confidencial, diagnóstico objetivo, sem promessa milagrosa
                </span>
              </div>

              <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-3 text-xs text-gray-400 leading-relaxed">
                A BSX atua com inteligência de dados para reduzir risco e orientar decisões.
                Quando há indícios de irregularidade e base aplicável, pode existir encaminhamento jurídico, mas isso não é o ponto de partida.
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-blue-800 rounded-3xl opacity-5 transform rotate-6"></div>

            <div className="relative bg-white border border-slate-200 p-8 rounded-3xl shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="bg-amber-50 p-3 rounded-full text-amber-600">
                    <AlertTriangle size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Trava identificada</h3>
                    <p className="text-sm text-slate-500">
                      Crédito / contrato / aprovação bloqueados
                    </p>
                  </div>
                </div>

                <div className="flex justify-center text-slate-400">
                  <ArrowRight className="transform rotate-90" />
                </div>

                <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div className="bg-blue-600 p-3 rounded-full text-white">
                    <Scale size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Diagnóstico + Plano</h3>
                    <p className="text-sm text-slate-600">
                      clareza do motivo + caminho de regularização
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl border border-green-100">
                  <div className="bg-green-600 p-3 rounded-full text-white">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Próximos passos</h3>
                    <p className="text-sm text-slate-600">
                      o que fazer primeiro (e o que evitar)
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- O QUE FAZEMOS --- */}
      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 rounded-t-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">O que fazemos</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            A BSX entrega clareza para você decidir com segurança.
            Fazemos um diagnóstico completo do que está travando seu CPF ou CNPJ
            e montamos um plano prático de regularização, por prioridade e risco.
          </p>

          <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-lg inline-block text-left max-w-2xl mx-auto shadow-sm">
            <p className="font-medium text-slate-800 italic">
              “Regularizar nome não é chute. É estratégia baseada em evidência.”
            </p>
          </div>
        </div>
      </section>

      {/* --- PASSO A PASSO --- */}
      <section
        id="como-funciona"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
            Metodologia
          </span>
          <h2 className="text-3xl font-bold text-gray-300 mt-2">
            Como funciona na prática
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8">
              {steps.map((item, idx) => (
                <TimelineItem
                  key={item.step}
                  step={item.step}
                  title={item.title}
                  desc={item.desc}
                  icon={item.icon}
                  isLast={idx === steps.length - 1}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-100 sticky top-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Quer parar de adivinhar?
            </h3>
            <p className="text-slate-600 mb-6 text-sm">
              Se seu CPF/CNPJ está travado, o primeiro passo é entender o motivo real.
              Solicite a avaliação e receba um caminho objetivo.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm text-slate-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                Diagnóstico objetivo e sigiloso
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                Plano prático por prioridade
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                Sem “promessa de milagre”
              </li>
            </ul>

            <button
              onClick={() => scrollToSection("formulario")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md cursor-pointer"
            >
              Solicitar avaliação
            </button>
          </div>
        </div>
      </section>

      {/* --- PARA QUEM É --- */}
      <section className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Para quem é</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Para quem está com o CPF ou CNPJ travado e precisa de clareza para regularizar
              sem cometer erro (ou perder tempo com o caminho errado).
            </p>

            <ul className="space-y-4">
              {[
                "Não consigo crédito e não sei o motivo",
                "Quero financiar/contratar e preciso organizar o CPF",
                "Score não reage mesmo pagando as contas",
                "CNPJ travado para fornecedor, limite ou meios de pagamento",
                "Tenho restrição, mas não sei qual pesa mais",
                "Tenho medo de negociar errado e piorar a situação",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 min-h-10">
                  <CheckCircle className="text-blue-400 shrink-0" size={20} />
                  <span className="text-slate-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <Scale className="text-blue-400" size={32} />
              <h3 className="text-xl font-bold">E quando vira caso jurídico?</h3>
            </div>
            <p className="text-slate-300">
              Em alguns cenários específicos (ex.: negativação irregular, cobrança indevida, dívida já paga ou prescrita),
              pode existir rota jurídica. Mas isso só é definido depois do diagnóstico, com base real.
            </p>
          </div>
        </div>
      </section>

      {/* --- VALORES --- */}
      <section
        id="valores"
        className="py-20 pb-10 md:pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50"
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Investimento transparente
          </h2>
          <p className="text-slate-600 mt-4">
            Você começa com diagnóstico + plano. Execução/encaminhamentos variam conforme o caso.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {/* Card CPF */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:border-blue-400 transition relative overflow-hidden w-full max-w-md mx-auto">
            <div className="absolute top-0 right-0 bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-bl-lg">
              PESSOA FÍSICA
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Diagnóstico + Plano (CPF)
            </h3>

            <div className="flex items-baseline gap-1 my-6">
              <span className="text-sm text-slate-500 font-medium mr-1">
                A partir de
              </span>
              <span className="font-bold text-slate-900">R$</span>
              <span className="text-4xl font-extrabold text-slate-900">
                1.490,00
              </span>
            </div>

            <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle size={16} className="text-blue-600" /> Diagnóstico do que trava o CPF
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle size={16} className="text-blue-600" /> Plano prático por prioridade
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle size={16} className="text-blue-600" /> Orientação do melhor caminho
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle size={16} className="text-blue-600" /> Encaminhamento quando aplicável
              </li>
            </ul>

            <button
              onClick={() => scrollToSection("formulario")}
              className="w-full py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-900 hover:text-white transition cursor-pointer"
            >
              Selecionar CPF
            </button>
          </div>

          {/* Card CNPJ */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-600 p-8 md:-translate-y-4 relative w-full max-w-md mx-auto">
            <div className="absolute top-0 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-b-lg left-1/2 -translate-x-1/2">
              MAIS PROCURADO
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Diagnóstico + Plano (CNPJ)
            </h3>

            <div className="flex items-baseline gap-1 my-6">
              <span className="text-sm text-slate-500 font-medium mr-1">
                A partir de
              </span>
              <span className="font-bold text-blue-600">R$</span>
              <span className="text-4xl font-extrabold text-blue-600">
                1.990,00
              </span>
            </div>

            <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle size={16} className="text-blue-600" /> Diagnóstico do que trava o CNPJ
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle size={16} className="text-blue-600" /> Plano para crédito e fornecedores
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle size={16} className="text-blue-600" /> Estratégia para destravar limite/compra
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle size={16} className="text-blue-600" /> Acompanhamento conforme pacote
              </li>
            </ul>

            <button
              onClick={() => scrollToSection("formulario")}
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200 cursor-pointer"
            >
              Selecionar CNPJ
            </button>
          </div>
        </div>
      </section>

      {/* --- FORMULÁRIO --- */}
      <Formulario />

      {/* ------ */}
      <section className="bg-slate-100 py-12 px-4 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 items-start bg-white p-6 rounded-lg border border-slate-200">
            <AlertTriangle className="text-amber-500 shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">
                Aviso importante
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                A BSX não promete resultado. O diagnóstico e o plano orientam o melhor caminho com base em evidências.
                Em casos específicos, pode haver encaminhamento jurídico, e qualquer medida judicial depende de análise do caso e decisões externas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Grupo BSX. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default LandingPageBSX;