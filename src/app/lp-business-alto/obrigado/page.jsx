import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl items-center justify-center">
        <section className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <CheckCircle2 className="text-emerald-600" size={34} />
          </div>

          <h1 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Formulário enviado com sucesso
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            Recebemos seus dados e nossa equipe vai analisar seu cenário para retornar com o próximo passo estratégico.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/lp-business-alto"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              <ArrowLeft size={18} />
              Voltar para a página inicial
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
