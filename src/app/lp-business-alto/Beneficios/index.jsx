import { BarChart3, Layers3, Rocket, ShieldCheck } from "lucide-react";

const beneficios = [
  {
    icon: Rocket,
    title: "Aquisição acelerada",
    description:
      "Estratégia orientada para aumentar oportunidades qualificadas sem sacrificar qualidade.",
    size: "lg:col-span-2",
  },
  {
    icon: BarChart3,
    title: "Decisão com inteligência",
    description:
      "Métricas claras para priorizar canais, ofertas e mensagens com maior potencial de retorno.",
    size: "",
  },
  {
    icon: Layers3,
    title: "Funil estruturado",
    description:
      "Jornada de conversão organizada para reduzir fricção e elevar a taxa de fechamento.",
    size: "",
  },
  {
    icon: ShieldCheck,
    title: "Escala com consistência",
    description:
      "Modelo de crescimento que combina previsibilidade comercial com posicionamento premium.",
    size: "lg:col-span-2",
  },
];

export default function Beneficios() {
  return (
    <section className="bg-slate-950 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
            Benefícios
          </span>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Estrutura de crescimento para negócios que exigem alta performance
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Um framework completo para transformar visitas em leads e leads em vendas recorrentes.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {beneficios.map(({ icon: Icon, title, description, size }) => (
            <article
              key={title}
              className={`rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-900/65 p-5 shadow-lg shadow-indigo-950/20 transition hover:-translate-y-0.5 hover:border-indigo-400/40 ${size}`}
            >
              <div className="mb-4 inline-flex rounded-xl bg-indigo-500/15 p-2.5 text-indigo-300">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
