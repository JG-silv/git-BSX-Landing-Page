"use client";

import React, { useState } from "react";
import { poppins, sourceSans3 } from "../../app/components/fonts/fonts.jsx";

const WEBHOOK =
  "https://grupobsx2025.app.n8n.cloud/webhook/29e53605-7084-4848-93fd-1f5624c064ce";

export default function RelatorioForm() {
  const [form, setForm] = useState({
    volume: "",
    cpfCnpj: "",
    razaoSocial: "",
    email: "",
    telefone: "",
    tipoConsulta: "",
    porteEmpresa: "",
    nomeContato: "",
    detalhes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setFeedback("");

    if (!WEBHOOK) {
      setFeedback("Configuração ausente. Contate o suporte.");
      setSubmitting(false);
      return;
    }

    try {
      // Envia como FormData (evita preflight/CORS)
      const fd = new FormData();
      Object.entries({
        ...form,
        submittedAt: new Date().toISOString(),
        source: "site-bsx/relatorio",
      }).forEach(([k, v]) => fd.append(k, v));

      const res = await fetch(WEBHOOK, {
        method: "POST",
        body: fd, // sem Content-Type manual
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      dataLayer.push({ event: "Forms_pacotes_enviado" });

      setFeedback("Solicitação enviada com sucesso!");
      setForm({
        volume: "",
        cpfCnpj: "",
        razaoSocial: "",
        email: "",
        telefone: "",
        tipoConsulta: "",
        porteEmpresa: "",
        nomeContato: "",
        detalhes: "",
      });
    } catch (err) {
      console.error(err);
      setFeedback("Ocorreu um erro ao enviar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="max-w-5xl mx-auto mb-10 px-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* === CARD DE TÍTULO À ESQUERDA === */}
        <div className="md:w-2/5 bg-white border-2 border-[#26478D] rounded-2xl p-6 shadow-md max-h-[400px] overflow-y-auto justify-center flex flex-col">
          <h2
            className={`text-3xl font-extrabold ${poppins.className} text-[#26478D] mb-4 `}
          >
            Não consegue decidir qual relatório precisa?
            <br />
            Ou quer um relatório personalizado?
          </h2>
          <p className={`text-base ${sourceSans3.className} text-[#83227D]`}>
            Preencha o formulário ao lado e um de nossos especialistas entrará
            em contato em breve.
          </p>
        </div>

        {/* === FORMULÁRIO À DIREITA === */}
        <div className="md:w-3/4">
          <form
            onSubmit={handleSubmit}
            className="bg-white border-2 border-[#26478D] rounded-2xl p-6 shadow-md grid grid-cols-1 md:grid-cols-2 gap-4 text-black"
          >
            {/* Nome */}
            <div className="flex flex-col">
              <label
                className={`text-[#050A30] font-medium text-sm ${sourceSans3.className}`}
              >
                Nome *
              </label>
              <input
                type="text"
                name="nomeContato"
                value={form.nomeContato}
                onChange={handleChange}
                placeholder="Nome da pessoa do contato"
                required
                className="mt-1 w-full bg-[#f5f5f5] border border-[#3B67AC] rounded px-3 py-2 text-sm"
              />
            </div>

            {/* Razão social */}
            <div className="flex flex-col">
              <label
                className={`text-[#050A30] font-medium text-sm ${sourceSans3.className}`}
              >
                Nome da empresa *
              </label>
              <input
                type="text"
                name="razaoSocial"
                value={form.razaoSocial}
                onChange={handleChange}
                placeholder="Razão Social da Empresa"
                required
                className="mt-1 w-full bg-[#f5f5f5] border border-[#3B67AC] rounded px-3 py-2 text-sm"
              />
            </div>

            {/* Telefone */}
            <div className="flex flex-col">
              <label
                className={`text-[#050A30] font-medium text-sm ${sourceSans3.className}`}
              >
                Número de telefone *
              </label>
              <input
                type="tel"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                required
                className="mt-1 w-full bg-[#f5f5f5] border border-[#3B67AC] rounded px-3 py-2 text-sm"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label
                className={`text-[#050A30] font-medium text-sm ${sourceSans3.className}`}
              >
                E-mail corporativo *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu@exemplo.com"
                required
                className="mt-1 w-full bg-[#f5f5f5] border border-[#3B67AC] rounded px-3 py-2 text-sm"
              />
            </div>

            {/* Volume */}
            <div className="flex flex-col">
              <label
                className={`text-[#050A30] font-medium text-sm ${sourceSans3.className}`}
              >
                Quantidade de consultas *
              </label>
              <select
                name="volume"
                value={form.volume}
                onChange={handleChange}
                required
                className="mt-1 w-full bg-[#f5f5f5] border border-[#3B67AC] rounded px-3 py-2 text-sm"
              >
                <option value="">Selecione...</option>
                <option value="1-20">1 – 20 consultas</option>
                <option value="21-40">21 – 40 consultas</option>
                <option value="41-60">41 – 60 consultas</option>
                <option value="61-80">61 – 80 consultas</option>
                <option value="81-100">81 – 100 consultas</option>
                <option value="diarias">Consultas Diárias</option>
              </select>
            </div>

            {/* Tipo do pacote */}
            <div className="flex flex-col">
              <label
                className={`text-[#050A30] font-medium text-sm ${sourceSans3.className}`}
              >
                Tipo do pacote *
              </label>
              <input
                type="text"
                name="tipoConsulta"
                value={form.tipoConsulta}
                onChange={handleChange}
                placeholder="Ex.: Básica, Avançada..."
                required
                className="mt-1 w-full bg-[#f5f5f5] border border-[#3B67AC] rounded px-3 py-2 text-sm"
              />
            </div>

            {/* CPF/CNPJ */}
            <div className="flex flex-col">
              <label
                className={`text-[#050A30] font-medium text-sm ${sourceSans3.className}`}
              >
                CPF ou CNPJ *
              </label>
              <input
                type="text"
                name="cpfCnpj"
                value={form.cpfCnpj}
                onChange={handleChange}
                placeholder="Ex: 00.000.000/0000-00"
                required
                className="mt-1 w-full bg-[#f5f5f5] border border-[#3B67AC] rounded px-3 py-2 text-sm"
              />
            </div>

            {/* Porte da empresa */}
            <div className="flex flex-col">
              <label
                className={`text-[#050A30] font-medium text-sm ${sourceSans3.className}`}
              >
                Porte da empresa *
              </label>
              <select
                name="porteEmpresa"
                value={form.porteEmpresa}
                onChange={handleChange}
                required
                className="mt-1 w-full bg-[#f5f5f5] border border-[#3B67AC] rounded px-3 py-2 text-sm"
              >
                <option value="">Selecione...</option>
                <option value="me">Microempresa (ME)</option>
                <option value="epp">Empresa de Pequeno Porte (EPP)</option>
                <option value="emp">Empresa de Médio Porte (EMP)</option>
                <option value="egp">Empresa de Grande Porte (EGP)</option>
                <option value="demais">Demais portes</option>
              </select>
            </div>

            {/* Detalhes */}
            <div className="md:col-span-2 flex flex-col mt-2">
              <label
                className={`text-[#050A30] font-medium text-sm ${sourceSans3.className}`}
              >
                Explique mais detalhes sobre as suas necessidades
              </label>
              <textarea
                name="detalhes"
                value={form.detalhes}
                onChange={handleChange}
                placeholder="Descreva aqui..."
                rows={4}
                className="mt-1 w-full bg-[#f5f5f5] border border-[#3B67AC] rounded px-3 py-2 text-sm resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-3 font-bold rounded text-sm ${
                  submitting
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#26478D] text-white hover:bg-[#3B67AC] transition-colors"
                }`}
              >
                {submitting ? "Enviando..." : "Enviar solicitação"}
              </button>
            </div>

            {feedback && (
              <p className="md:col-span-2 mt-2 text-center text-[#83227D] font-medium text-sm">
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
