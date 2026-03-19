"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import { LoaderIcon } from "@/components/ui/loader-icon";
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
  const sectionRef = useRef(null);
  const leftGlowRef = useRef(null);
  const rightGlowRef = useRef(null);
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
    `w-full rounded-xl border bg-white/90 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition ${
      hasError
        ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
        : "border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
    }`;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (leftGlowRef.current) {
        gsap.to(leftGlowRef.current, {
          y: 50,
          x: -20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (rightGlowRef.current) {
        gsap.to(rightGlowRef.current, {
          y: -42,
          x: 24,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-lp-section
      className="relative overflow-hidden bg-slate-950 px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16"
    >
      <div
        ref={leftGlowRef}
        className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-indigo-500/25 blur-3xl"
      />
      <div
        ref={rightGlowRef}
        className="absolute right-0 top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
        <motion.div
          className="space-y-7 lg:col-span-7"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex items-center rounded-full border border-indigo-300/35 bg-indigo-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-100">
            Produto digital para crescimento previsível
          </span>
          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            A sua operação comercial não precisa depender de tentativa e erro
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
            Construímos uma estrutura de aquisição com posicionamento premium, UX de conversão e estratégia orientada por dados para gerar pipeline qualificado com consistência.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Arquitetura de página orientada a decisão de compra",
              "Narrativa comercial com percepção de valor premium",
              "Estratégia de captação focada em leads com fit real",
              "Decisões priorizadas por impacto em receita",
            ].map((item, index) => (
              <motion.div
                key={item}
                className="flex items-start gap-2 rounded-xl border border-slate-700 bg-slate-900/60 p-3 text-sm text-slate-100 backdrop-blur"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 rounded-2xl border border-slate-700 bg-slate-900/60 p-3 text-center text-xs text-slate-300 sm:text-sm">
            <div>
              <p className="text-lg font-semibold text-white">+200</p>
              <p>Projetos entregues</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">95%</p>
              <p>Satisfação média</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">4.9/5</p>
              <p>Avaliação</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-300 sm:text-sm">
            <ShieldCheck size={16} className="text-emerald-400" />
            Seus dados ficam protegidos e são usados apenas para atendimento estratégico.
          </div>
        </motion.div>

        <motion.div
          id="form-lp-business"
          data-lp-card
          className="rounded-3xl border border-white/20 bg-white/75 p-5 shadow-[0_35px_100px_-30px_rgba(99,102,241,0.55)] backdrop-blur-xl sm:p-8 lg:col-span-5"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Receba um plano de ação para o seu cenário
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Preencha os dados e retornamos com próximos passos claros para escalar com previsibilidade.
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
              <div className="relative rounded-xl transition duration-200 focus-within:-translate-y-0.5">
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
              <div className="relative rounded-xl transition duration-200 focus-within:-translate-y-0.5">
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
              <div className="relative rounded-xl transition duration-200 focus-within:-translate-y-0.5">
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
              <div className="relative rounded-xl transition duration-200 focus-within:-translate-y-0.5">
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

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-75"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.985 }}
            >
              {isSubmitting ? (
                <>
                  <LoaderIcon size={16} className="text-white" />
                  Enviando...
                </>
              ) : (
                <>
                  Quero crescer com estratégia
                  <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
