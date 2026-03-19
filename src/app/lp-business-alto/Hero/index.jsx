"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

const initialForm = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
};

export default function Hero() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: "" }));
  };

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (digits.length <= 2) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handlePhoneChange = (event) => {
    const formattedPhone = formatPhone(event.target.value);
    setFormData((previous) => ({ ...previous, telefone: formattedPhone }));
    setErrors((previous) => ({ ...previous, telefone: "" }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.nome.trim()) nextErrors.nome = "Informe seu nome.";
    if (!formData.email.trim()) {
      nextErrors.email = "Informe seu e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Informe um e-mail válido.";
    }

    const phoneDigits = formData.telefone.replace(/\D/g, "");
    if (!formData.telefone.trim()) {
      nextErrors.telefone = "Informe seu telefone.";
    } else if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      nextErrors.telefone = "Informe um telefone com DDD válido.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      router.push("/lp-business-alto/obrigado");
    } catch {
      setSubmitError("Não foi possível enviar agora. Tente novamente.");
      setIsSubmitting(false);
    }
  };

  const inputClassName = (hasError) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition ${
      hasError
        ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
        : "border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
    }`;

  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
      <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute -right-10 bottom-12 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-7">
          <span className="inline-flex items-center rounded-full border border-indigo-400/35 bg-indigo-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-100">
            Solução premium para aquisição de clientes
          </span>
          <h1 className="max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Construa um funil previsível de vendas com uma operação digital de alto desempenho
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Estruture sua aquisição com posicionamento premium, estratégia comercial e execução orientada por dados para escalar com confiança.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Estratégia orientada por métricas de conversão",
              "Posicionamento de marca com percepção premium",
              "Framework de aquisição para escalar sem desperdício",
              "Execução com foco em ROI e previsibilidade comercial",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 rounded-xl border border-slate-700 bg-slate-900/60 p-3 text-sm text-slate-100"
              >
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-300 sm:text-sm">
            <ShieldCheck size={16} className="text-emerald-400" />
            Seus dados são protegidos e usados exclusivamente para contato consultivo.
          </div>
        </div>

        <div
          id="form-lp-business"
          className="rounded-3xl border border-slate-700/70 bg-white p-5 shadow-[0_30px_80px_-30px_rgba(99,102,241,0.6)] sm:p-8"
        >
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Solicite uma análise estratégica personalizada
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Preencha os dados e nossa equipe entra em contato com o próximo passo.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            {submitError ? (
              <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {submitError}
              </div>
            ) : null}
            <div>
              <label htmlFor="nome" className="mb-1 block text-sm font-semibold text-slate-700">
                Nome
              </label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={formData.nome}
                  onChange={handleChange}
                  className={`${inputClassName(Boolean(errors.nome))} pl-10`}
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              {errors.nome ? <p className="mt-1 text-xs text-red-600">{errors.nome}</p> : null}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-700">
                E-mail
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputClassName(Boolean(errors.email))} pl-10`}
                  placeholder="voce@empresa.com"
                  required
                />
              </div>
              {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
            </div>

            <div>
              <label htmlFor="telefone" className="mb-1 block text-sm font-semibold text-slate-700">
                Telefone
              </label>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={handlePhoneChange}
                  className={`${inputClassName(Boolean(errors.telefone))} pl-10`}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
              {errors.telefone ? <p className="mt-1 text-xs text-red-600">{errors.telefone}</p> : null}
            </div>

            <div>
              <label htmlFor="empresa" className="mb-1 block text-sm font-semibold text-slate-700">
                Empresa
              </label>
              <div className="relative">
                <Building2
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  value={formData.empresa}
                  onChange={handleChange}
                  className={`${inputClassName(false)} pl-10`}
                  placeholder="Nome da empresa (opcional)"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-75"
            >
              {isSubmitting ? "Enviando..." : "Quero crescer com estratégia"}
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
