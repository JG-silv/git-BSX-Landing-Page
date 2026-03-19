"use client";
import React, { useMemo, useState } from "react";
import {
  Scale,
  Clock,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  FileText,
  ShieldCheck,
  Search,
  MessageCircle,
  BadgeCheck,
  HelpCircle,
} from "lucide-react";
import Formulario from "./formulario";

const LandingPageBSX = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Ajuste aqui o link do WhatsApp (com seu número e mensagem)
  const whatsappLink = useMemo(() => {
    const msg = encodeURIComponent(
      "Olá! Quero solicitar a análise do meu CPF/CNPJ.",
    );
    return `https://wa.me/5521997147642?text=${msg}`;
  }, []);

  const processSteps = [
    {
      step: "",
      title: "Diagnóstico Completo",
      desc: "Levantamento detalhado de restrições, protestos, apontamentos e inconsistências.",
      icon: Search,
    },
    {
      step: "",
      title: "Análise Estratégica",
      desc: "Verificação de possíveis irregularidades, excessos ou oportunidades legais.",
      icon: Scale,
    },
    {
      step: "",
      title: "Atuação Direcionada",
      desc: "Adoção das medidas adequadas para buscar a regularização e reabilitação do crédito.",
      icon: BadgeCheck,
    },
  ];

  const indicatedFor = [
    "Está com nome negativado",
    "Possui dívidas bancárias",
    "Está com protesto em cartório",
    "Identificou erro de cadastro",
    "Precisa melhorar o score",
  ];

  const faqs = [
    {
      q: "Em quanto tempo meu nome será limpo?",
      a: "Cada caso é analisado individualmente. O prazo médio de atuação é de 15 a 20 dias úteis, podendo variar conforme a situação.",
    },
    {
      q: "Vocês garantem que meu nome será retirado?",
      a: "Não prometemos resultados impossíveis. Atuamos de forma técnica e estratégica para buscar a melhor solução dentro da legalidade.",
    },
    {
      q: "Preciso sair de casa?",
      a: "Não. Todo o atendimento pode ser feito online.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(0);

  const Card = ({ icon: Icon, title, desc }) => (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-700">{title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed mt-1">{desc}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-700 font-sans text-slate-100">
      {/* HERO */}
      <section className="pt-10 pb-10 lg:pt-14 lg:pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-7">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              Regularize
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                CPF e CNPJ com estratégia e segurança jurídica
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Se você está enfrentando restrições no CPF ou cnpj, protestos ou
              cobranças indevidas, é possível agir de forma estratégica para
              buscar a regularização da sua situação.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 max-w-xl">
              <div className="flex gap-3">
                <div className="mt-0.5">
                  <AlertTriangle className="text-amber-300" size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100">
                    Está com o nome negativado?
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mt-1">
                    Nós realizamos uma{" "}
                    <span className="font-semibold">
                      análise completa do seu CPF
                    </span>
                    , identificamos apontamentos e avaliamos as melhores medidas
                    para redução de impactos e reabilitação do crédito.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollToSection("formulario")}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-7 py-4 rounded-xl font-bold text-base hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/20"
              >
                QUERO FAZER MINHA ANÁLISE AGORA
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck size={14} className="text-blue-300" />
              <span>
                Atendimento online, orientação técnica, sem promessa milagrosa
              </span>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-blue-800 rounded-3xl opacity-10 transform rotate-6" />
            <div className="relative bg-white text-slate-700 border border-slate-200 p-8 rounded-3xl shadow-2xl">
              <div className="space-y-5">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="bg-amber-50 p-3 rounded-full text-amber-600">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold">Análise completa</h3>
                    <p className="text-sm text-slate-500">
                      restrições, protestos, apontamentos
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 p-2 rounded-full text-white">
                      <Scale size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold">Estratégia</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        avaliação técnica das melhores medidas dentro da
                        legalidade
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 p-2 rounded-full text-white">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold">Prazo médio</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        15 a 20 dias úteis (pode variar conforme o caso)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 leading-relaxed">
                  Atuamos de forma técnica e estratégica. Não prometemos
                  resultados impossíveis. Qualquer atuação depende das
                  evidências do caso e fatores externos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-white text-slate-700 py-14 px-4 sm:px-6 lg:px-8 rounded-t-3xl">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
            Metodologia
          </span>
          <h2 className="text-3xl font-bold"> Como funciona o processo</h2>
          <p className="text-slate-600 mt-4 leading-relaxed">
            Um fluxo simples, com clareza do que existe no CPF/CNPJ e o que faz
            sentido fazer primeiro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {processSteps.map((s) => (
            <Card
              key={s.title}
              icon={s.icon}
              title={`${s.step} ${s.title}`}
              desc={s.desc}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => scrollToSection("formulario")}
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-7 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/20"
          >
            Solicitar minha análise
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* INDICADO PARA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold"> Indicado para quem:</h2>
            <p className="text-slate-300 mt-3 leading-relaxed">
              Se você se identificou com algum ponto abaixo, a análise ajuda a
              organizar o cenário e definir uma rota realista.
            </p>

            <ul className="mt-7 space-y-3">
              {indicatedFor.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" size={18} />
                  <span className="text-slate-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold">Segurança e Transparência</h3>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <Clock className="text-green-400 mt-0.5" size={18} />
                <span>
                  <span className="font-semibold">Prazo médio de análise:</span>{" "}
                  15 a 20 dias úteis
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-400  mt-0.5" size={18} />
                <span>Acompanhamento durante o processo</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-green-400 mt-0.5" size={18} />
                <span>
                  <span className="font-semibold">Garantia contratual:</span> 6
                  meses
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-400  mt-0.5" size={18} />
                <span>Atendimento personalizado</span>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-300 leading-relaxed bg-black/20 border border-white/10 rounded-xl p-4">
              Atuamos de forma técnica e estratégica para buscar a melhor
              solução dentro da legalidade. Não prometemos resultados
              impossíveis.
            </div>
          </div>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section
        id="valores"
        className="bg-slate-50 text-slate-700 py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold"> Investimento</h2>
            <p className="text-slate-600 mt-3">
              Pagamento via PIX ou cartão parcelado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* CPF */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-bl-lg">
                PESSOA FÍSICA
              </div>

              <h3 className="text-xl font-bold">Pessoa Física (CPF)</h3>

              <div className="flex items-baseline gap-2 mt-5">
                <span className="text-slate-700 font-bold text-lg">R$</span>
                <span className="text-4xl font-extrabold">1.490,00</span>
              </div>

              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5" size={16} />
                  <span>Análise completa do CPF</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5" size={16} />
                  <span>Estratégia e direcionamento de medidas</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5" size={16} />
                  <span>Acompanhamento durante o processo</span>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("formulario")}
                className="mt-8 w-full py-3 border-2 border-slate-700 text-slate-700 font-bold rounded-lg hover:bg-slate-700 hover:text-white transition"
              >
                Solicitar análise CPF
              </button>
            </div>

            {/* CNPJ */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-600 p-8 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-b-lg">
                MAIS PROCURADO
              </div>

              <h3 className="text-xl font-bold">Pessoa Jurídica (CNPJ)</h3>

              <div className="flex items-baseline gap-2 mt-5">
                <span className="text-blue-700 font-bold text-lg">R$</span>
                <span className="text-4xl font-extrabold text-blue-700">
                  1.990,00
                </span>
              </div>

              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5" size={16} />
                  <span>Análise completa do CNPJ</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5" size={16} />
                  <span>
                    Estratégia para redução de impactos e reabilitação
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5" size={16} />
                  <span>Acompanhamento durante o processo</span>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("formulario")}
                className="mt-8 w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200"
              >
                Solicitar análise CNPJ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ATENDIMENTO IMEDIATO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold">Atendimento Imediato</h2>
              <p className="text-slate-300 mt-4 leading-relaxed">
                Após solicitar a análise, você será direcionado para atendimento
                via WhatsApp, onde explicaremos os próximos passos e enviaremos
                as instruções para início do processo.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-7 py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg"
                >
                  <MessageCircle size={18} />
                  INICIAR ATENDIMENTO AGORA
                </a>

                <button
                  onClick={() => scrollToSection("formulario")}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/15 text-white px-7 py-4 rounded-xl font-bold hover:bg-white/15 transition"
                >
                  SOLICITAR MINHA ANÁLISE
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="bg-black/20 border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-blue-300 mt-0.5" size={32} />
                <div>
                  <h3 className="font-bold">Compromisso com clareza</h3>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    A análise aponta o cenário real, oportunidades e riscos. A
                    atuação é direcionada para buscar regularização dentro da
                    legalidade, sem promessas irreais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-100 text-slate-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold"> Perguntas Frequentes</h2>
            <p className="text-slate-600 mt-3">
              Transparência sobre prazos, limites e como funciona.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={item.q}
                  className="border border-slate-200 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="text-blue-600" size={18} />
                      <span className="font-bold text-slate-700">{item.q}</span>
                    </div>
                    <span className="text-slate-500 text-sm">
                      {isOpen ? "—" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-slate-700">
              Não adie a regularização do seu crédito
            </h3>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Ter o nome regularizado abre portas para crédito, financiamentos e
              oportunidades. Solicite agora sua análise e receba orientação
              especializada.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollToSection("formulario")}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-7 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg"
              >
                SOLICITAR MINHA ANÁLISE
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <Formulario />

      {/* AVISO LEGAL */}
      <section className="bg-slate-100 py-12 px-4 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-slate-200">
            <AlertTriangle className="text-amber-500 shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-slate-700 text-sm uppercase mb-1">
                Aviso importante
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Não prometemos resultados impossíveis. Atuamos de forma técnica
                e estratégica para buscar a melhor solução dentro da legalidade.
                Prazos e resultados podem variar conforme o caso e fatores
                externos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 text-slate-400 py-8 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Grupo BSX. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export default LandingPageBSX;
