"use client";

import { useState } from "react";

const WEBHOOK = "https://grupobsx2025.app.n8n.cloud/webhook/e83d5e42-02f3-45d7-b428-ea5a92187d8c"; 


export default function ContactForm() {
  const [form, setForm] = useState({
    service: "",
    fullName: "",
    Email: "",
    cellPhone: "",
    companyName: "",
    companySize: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess("");

    if (!WEBHOOK) {
      console.error("NEXT_PUBLIC_N8N_WEBHOOK_URL não definida");
      setSuccess("Configuração ausente. Contate o suporte.");
      setSubmitting(false);
      return;
    }

    try {
      // payload que o n8n vai receber
      const payload = {
        ...form,
        submittedAt: new Date().toISOString(),
        source: "site-bsx",
      };

      const res = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
      }

      dataLayer.push({ event: "Forms_home_enviado" });

      setSuccess("Formulário enviado com sucesso!");
      setForm({
        service: "",
        fullName: "",
        Email: "",
        cellPhone: "",
        companyName: "",
        companySize: "",
      });
    } catch (err) {
      console.error(err);
      setSuccess("Ocorreu um erro ao enviar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-[#F9FBF2] border-2 border-[#26478D] rounded-lg p-6 space-y-4 shadow-lg mt-12 mb-12 animate-shadow"
    >
      <h2 className="text-2xl font-bold text-[#26478D] text-center mb-4">
        Preencha o Formulário
      </h2>

      <label className="block text-[#26478D] font-medium">
        Serviço desejado *
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="mt-1 w-full bg-[#FFEDE1] border border-[#3B67AC] rounded px-3 py-2"
        >
          <option value="">Selecione...</option>
          <option value="relatorios_credito">Relatórios de Créditos</option>
          <option value="relatorios_ia">Relatórios Inteligentes com IA</option>
          <option value="relatorios_veicular">Relatórios Veicular</option>
          <option value="relatorios_acoes">Relatórios de Ações</option>
        </select>
      </label>

      <label className="block text-[#26478D] font-medium">
        Nome completo *
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Ex.: Sara da Silva"
          required
          className="mt-1 w-full bg-[#FFEDE1] border border-[#3B67AC] rounded px-3 py-2"
        />
      </label>

      <label className="block text-[#26478D] font-medium">
        E-mail corporativo *
        <input
          type="email"
          name="Email"
          value={form.Email}
          onChange={handleChange}
          placeholder="seunome@empresa.com.br"
          required
          className="mt-1 w-full bg-[#FFEDE1] border border-[#3B67AC] rounded px-3 py-2"
        />
      </label>

      <label className="block text-[#26478D] font-medium">
        Celular *
        <input
          type="tel"
          name="cellPhone"
          value={form.cellPhone}
          onChange={handleChange}
          placeholder="DDD + Número"
          required
          className="mt-1 w-full bg-[#FFEDE1] border border-[#3B67AC] rounded px-3 py-2"
        />
      </label>

      <label className="block text-[#26478D] font-medium">
        Nome da empresa *
        <input
          type="text"
          name="companyName"
          value={form.companyName}
          onChange={handleChange}
          placeholder="Ex.: Penso Tecnologia"
          required
          className="mt-1 w-full bg-[#FFEDE1] border border-[#3B67AC] rounded px-3 py-2"
        />
      </label>

      <label className="block text-[#26478D] font-medium">
        Tamanho da empresa *
        <select
          name="companySize"
          value={form.companySize}
          onChange={handleChange}
          required
          className="mt-1 w-full bg-[#FFEDE1] border border-[#3B67AC] rounded px-3 py-2"
        >
          <option value="">Selecione...</option>
          <option value="pequena">1–10 colaboradores</option>
          <option value="media">11–100 colaboradores</option>
          <option value="grande">+100 colaboradores</option>
        </select>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className={`w-full py-3 font-bold rounded ${
          submitting
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-[#26478D] text-white hover:bg-[#3B67AC] transition-colors"
        }`}
      >
        {submitting ? "Enviando..." : "Avançar"}
      </button>

      {success && (
        <p className="mt-3 text-center text-sm font-medium text-[#83227D]">
          {success}
        </p>
      )}
    </form>
  );
}
