import { ArrowRight, Check } from "lucide-react";

const vantagens = [
  "Mapeamento estratégico da operação comercial",
  "Plano de ação com prioridades de curto e médio prazo",
  "Estrutura de conversão focada em geração de leads qualificados",
  "Direcionamento de posicionamento para aumentar percepção de valor",
];

export default function Oferta() {
  return (
    <section className="bg-slate-950 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/15 via-slate-900 to-cyan-500/10 p-6 shadow-2xl shadow-indigo-900/20 sm:p-9 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Oferta estratégica
              </span>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Um plano claro para transformar atenção em vendas recorrentes
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                Você recebe uma abordagem completa para posicionar sua empresa com padrão premium e elevar a conversão com previsibilidade.
              </p>
            </div>

            <div className="space-y-3">
              {vantagens.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/65 p-3 text-sm text-slate-100"
                >
                  <span className="mt-0.5 inline-flex rounded-full bg-emerald-400/20 p-1 text-emerald-300">
                    <Check size={14} />
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#form-lp-business"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Quero falar com especialista
              <ArrowRight size={16} />
            </a>
            <p className="text-sm text-slate-300">
              Resposta inicial rápida para entender seu momento e definir o próximo passo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
