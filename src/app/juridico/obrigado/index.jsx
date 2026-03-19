import React from "react";
import {
  CheckCircle,
  MessageCircle,
  Clock,
  FileSearch,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

const phoneNumber = "5521997147642";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <main className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        {/* Header Visual de Sucesso */}
        <div className="bg-slate-900 p-8 text-center relative overflow-hidden">
          {/* Elemento decorativo de fundo */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/30 animate-bounce-short">
              <CheckCircle size={40} className="text-white" />
            </div>

            <h1 className="text-3xl font-bold text-white mb-2">
              Solicitação Recebida!
            </h1>
            <p className="text-slate-300 text-lg">
              Nossa equipe jurídica já iniciou a triagem do seu caso.
            </p>
          </div>
        </div>

        {/* Corpo da Página */}
        <div className="p-8 md:p-10 space-y-8">
          {/* Seção: O que acontece agora (Timeline) */}
          <section>
            <h2 className="text-slate-900 font-bold mb-6 text-center">
              O que acontece agora?
            </h2>

            <div className="space-y-6 relative">
              {/* Linha vertical conectora */}
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200"></div>

              {/* Passo 1: Concluído */}
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-500 z-10 shrink-0">
                  <CheckCircle size={20} className="text-green-600" />
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-slate-900">Envio de Dados</h3>
                  <p className="text-sm text-slate-500">
                    Suas informações foram recebidas com segurança.
                  </p>
                </div>
              </div>

              {/* Passo 2: Em andamento (Destaque) */}
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border-2 border-blue-600 z-10 shrink-0 animate-pulse">
                  <FileSearch size={20} className="text-blue-600" />
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-blue-700">Análise Prévia</h3>
                  <p className="text-sm text-slate-600">
                    Estamos verificando a viabilidade jurídica com base no
                    perfil informado.
                  </p>
                </div>
              </div>

              {/* Passo 3: Futuro */}
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border-2 border-slate-300 z-10 shrink-0">
                  <MessageCircle size={20} className="text-slate-400" />
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-slate-400">
                    Contato do Especialista
                  </h3>
                  <p className="text-sm text-slate-400">
                    Em breve entraremos em contato via WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Card de Aviso / Tempo */}
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3 items-start">
            <Clock className="text-amber-600 shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-sm text-amber-900 font-medium">
                Prazo médio de retorno: 2 horas comerciais.
              </p>
              <p className="text-xs text-amber-700 mt-1">
                Fique atento ao seu WhatsApp. Nosso contato será feito por um
                número oficial da BSX.
              </p>
            </div>
          </div>

          {/* CTA Secundário: Apressar atendimento */}
          <div className="text-center pt-2">
            <p className="text-slate-600 mb-4 text-sm">Tem muita urgência?</p>

            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition flex items-center justify-center gap-2 mx-auto shadow-lg shadow-green-200"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp agora
            </a>
          </div>
        </div>

        {/* Footer Simples */}
        <div className="bg-slate-50 p-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <a
            href="/juridico"
            className="text-slate-500 hover:text-slate-800 text-sm flex items-center gap-2 font-medium transition"
          >
            <ArrowLeft size={16} />
            Voltar ao site
          </a>
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <ShieldCheck size={14} />
            <span>Dados criptografados</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYouPage;
