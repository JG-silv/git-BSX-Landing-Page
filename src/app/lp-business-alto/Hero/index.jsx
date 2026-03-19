"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Mail, Phone, User } from "lucide-react";

const initialForm = {
  nome: "",
  email: "",
  telefone: "",
};

export default function Hero() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputBaseClasses =
    "w-full rounded-xl border px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition";
  const inputClasses = useMemo(
    () => ({
      default:
        `${inputBaseClasses} border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100`,
      error:
        `${inputBaseClasses} border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100`,
    }),
    []
  );

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
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      router.push("/lp-business-alto/obrigado");
    }, 250);
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
            Plataforma Business High Performance
          </span>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Diagnóstico estratégico para transformar dados em decisões de alto impacto
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Estruture seu próximo movimento com inteligência operacional, visão de risco e clareza de execução para crescer com previsibilidade.
          </p>
          <div className="grid grid-cols-1 gap-3 text-sm text-slate-200 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              Acelera decisões estratégicas com base em dados reais.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              Prioriza ações com foco em receita, margem e eficiência.
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-white p-5 shadow-2xl sm:p-8">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Solicite seu plano personalizado</h2>
          <p className="mt-2 text-sm text-slate-600">
            Preencha os dados para receber um contato consultivo.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
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
                  className={`${errors.nome ? inputClasses.error : inputClasses.default} pl-10`}
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
                  className={`${errors.email ? inputClasses.error : inputClasses.default} pl-10`}
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
                  className={`${errors.telefone ? inputClasses.error : inputClasses.default} pl-10`}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
              {errors.telefone ? <p className="mt-1 text-xs text-red-600">{errors.telefone}</p> : null}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-75"
            >
              {isSubmitting ? "Enviando..." : "Receber diagnóstico"}
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
