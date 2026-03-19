import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ObrigadoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="mx-auto flex min-h-[75vh] w-full max-w-3xl items-center justify-center">
        <section className="relative w-full rounded-3xl border border-white/20 bg-white/80 p-6 shadow-[0_35px_100px_-30px_rgba(99,102,241,0.45)] backdrop-blur-xl sm:p-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <CheckCircle2 className="text-emerald-600" size={34} />
          </div>

          <h1 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Recebemos sua solicitação com sucesso
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            Seu formulário foi enviado e nossa equipe vai retornar com os próximos passos para o seu cenário.
          </p>

          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center text-sm text-slate-600">
            Você receberá o contato no canal informado no cadastro.
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/lp-business-alto"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
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
