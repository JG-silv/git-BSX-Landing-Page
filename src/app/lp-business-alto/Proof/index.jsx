import { Building2, Quote, Star } from "lucide-react";

const resultados = [
  { valor: "+200", label: "Projetos implementados" },
  { valor: "95%", label: "Satisfação média" },
  { valor: "4.9/5", label: "Avaliação dos clientes" },
];

const empresas = ["Atlas", "Nexo", "Volt", "Hubline", "PrimeLabs"];

const depoimentos = [
  {
    nome: "Marina Costa",
    cargo: "Diretora de Marketing",
    texto:
      "Saímos de uma página estática para uma experiência com narrativa comercial real e evolução perceptível de conversão.",
  },
  {
    nome: "Rafael Teixeira",
    cargo: "Sócio-Operador",
    texto:
      "A estrutura do funil ficou muito mais clara. Hoje recebemos leads com contexto, interesse e potencial de fechamento.",
  },
];

export default function Proof() {
  return (
    <section className="bg-slate-900 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Proof
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Evidências de performance para decisões sem achismo
            </h2>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm text-amber-200">
            <Star size={16} className="fill-amber-300 text-amber-300" />
            Times de alto crescimento já usam essa estrutura
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {resultados.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5 text-center"
            >
              <p className="text-3xl font-bold text-white">{item.valor}</p>
              <p className="mt-1 text-sm text-slate-300">{item.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {depoimentos.map((item) => (
            <article
              key={item.nome}
              className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg shadow-slate-950/30"
            >
              <Quote size={18} className="text-indigo-300" />
              <p className="mt-3 text-sm leading-relaxed text-slate-200">{item.texto}</p>
              <p className="mt-4 font-semibold text-white">{item.nome}</p>
              <p className="text-xs text-slate-400">{item.cargo}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-200">
            <Building2 size={16} className="text-cyan-300" />
            Empresas atendidas
          </div>
          <div className="flex flex-wrap gap-2">
            {empresas.map((empresa) => (
              <span
                key={empresa}
                className="rounded-full border border-slate-600 px-3 py-1 text-xs text-slate-300"
              >
                {empresa}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
