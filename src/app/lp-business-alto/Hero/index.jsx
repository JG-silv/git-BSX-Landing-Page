"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import Lottie from "lottie-react";

import loaderAnim from "@/components/ui/lu-loader.json";

import {
  ArrowRight,
  Building2,
  Mail,
  Phone,
  ShieldCheck,
  User,
  CheckCircle2,
} from "lucide-react";

const initialForm = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
};

export default function Hero() {
  const router = useRouter();

  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const cardRef = useRef(null);

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power4.out",
      });

      gsap.to(".orb-1", {
        y: 40,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb-2", {
        y: -50,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handlePhoneChange = (e) => {
    setFormData((p) => ({
      ...p,
      telefone: formatPhone(e.target.value),
    }));
  };

  const validate = () => {
    const e = {};
    if (!formData.nome) e.nome = true;
    if (!formData.email) e.email = true;
    if (!formData.telefone) e.telefone = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    router.push("/lp-business-alto/obrigado");
  };

  const inputBase =
    "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all";

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-slate-950 px-5 pt-10 pb-20"
    >
      {/* background orbs */}
      <div className="orb-1 absolute -left-10 top-0 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="orb-2 absolute right-0 top-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
        {/* LEFT */}
        <div ref={leftRef} className="space-y-6 lg:col-span-7">
          <span className="inline-flex items-center rounded-full border border-indigo-400/30 px-4 py-1 text-xs text-indigo-200">
            Estrutura de aquisição previsível
          </span>

          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Transforme sua landing page em um ativo de vendas
          </h1>

          <p className="text-slate-300 max-w-xl">
            Criamos páginas com engenharia de conversão, posicionamento
            premium e experiência pensada para gerar pipeline real.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Arquitetura focada em decisão",
              "UX de conversão real",
              "Posicionamento premium",
              "Aquisição qualificada",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl bg-slate-900/60 p-3 border border-slate-700"
              >
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span className="text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <ShieldCheck size={16} className="text-emerald-400" />
            Seus dados são usados apenas para contato estratégico
          </div>
        </div>

        {/* FORM */}
        <div
          ref={cardRef}
          className="lg:col-span-5 rounded-3xl border border-white/20 bg-white p-6 shadow-2xl"
        >
          <h2 className="text-xl font-bold text-slate-900">
            Receba um diagnóstico da sua página
          </h2>

          <form onSubmit={submit} className="mt-6 space-y-4">
            <div className="relative">
              <User size={18} className="absolute left-3 top-3.5 text-slate-400" />
              <input
                name="nome"
                placeholder="Seu nome"
                onChange={handleChange}
                onFocus={() => setFocusedField("nome")}
                className={`${inputBase} pl-10 ${
                  errors.nome ? "border-red-400" : "border-slate-200"
                }`}
              />
            </div>

            <div className="relative">
              <Mail size={18} className="absolute left-3 top-3.5 text-slate-400" />
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className={`${inputBase} pl-10 border-slate-200`}
              />
            </div>

            <div className="relative">
              <Phone size={18} className="absolute left-3 top-3.5 text-slate-400" />
              <input
                name="telefone"
                placeholder="WhatsApp"
                value={formData.telefone}
                onChange={handlePhoneChange}
                className={`${inputBase} pl-10 border-slate-200`}
              />
            </div>

            <div className="relative">
              <Building2
                size={18}
                className="absolute left-3 top-3.5 text-slate-400"
              />
              <input
                name="empresa"
                placeholder="Empresa"
                onChange={handleChange}
                className={`${inputBase} pl-10 border-slate-200`}
              />
            </div>

            <button
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700 transition"
            >
              {isSubmitting ? (
                <div className="w-6 h-6">
                  <Lottie animationData={loaderAnim} loop />
                </div>
              ) : (
                <>
                  Receber diagnóstico
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}