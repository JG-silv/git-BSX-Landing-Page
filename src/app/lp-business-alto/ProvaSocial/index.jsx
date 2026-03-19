import { Quote, Star } from "lucide-react";

const metricas = [
  { value: "+100", label: "Clientes atendidos" },
  { value: "95%", label: "Taxa média de satisfação" },
  { value: "4.9/5", label: "Avaliação dos projetos" },
];

const depoimentos = [
  {
    nome: "Mariana Costa",
    cargo: "Diretora Comercial",
    empresa: "Atlas Negócios",
    texto:
      "A nova estrutura de landing page elevou a qualidade dos leads e reduziu nosso custo de aquisição já no primeiro ciclo.",
  },
  {
    nome: "Rafael Dias",
    cargo: "Sócio",
    empresa: "Nexo Consulting",
    texto:
      "Conseguimos posicionar nossa oferta premium com clareza e dobramos a taxa de conversão em reuniões qualificadas.",
  },
];

export default function ProvaSocial() {
  return (
    <section className="bg-slate-900 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Prova social
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Empresas que buscam escala confiam no nosso método
            </h2>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200">
            <Star size={16} className="fill-amber-300 text-amber-300" />
            Alta percepção de valor em todos os projetos
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {metricas.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5 text-center"
            >
              <p className="text-3xl font-bold text-white">{item.value}</p>
              <p className="mt-1 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {depoimentos.map((item) => (
            <article
              key={item.nome}
              className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg shadow-slate-950/30"
            >
              <Quote className="text-indigo-300" size={20} />
              <p className="mt-3 text-sm leading-relaxed text-slate-200">{item.texto}</p>
              <div className="mt-4">
                <p className="font-semibold text-white">{item.nome}</p>
                <p className="text-xs text-slate-400">
                  {item.cargo} · {item.empresa}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
