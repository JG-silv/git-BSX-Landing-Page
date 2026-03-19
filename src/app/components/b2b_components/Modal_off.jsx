"use client";

import React, { useState } from "react";
import {
  X,
  User,
  Mail,
  Phone,
  Briefcase,
  Building2,
  FileText,
} from "lucide-react";
import { useRouter } from "next/navigation";

/* const WEBHOOK_URL =
  "https://grupobsx2025.app.n8n.cloud/webhook/6e103b16-57a0-4829-870b-646ce6426418"; */
  const WEBHOOK_URL = "https://grupobsx2025.app.n8n.cloud/webhook/6e103b16-57a0-4829-870b-646ce6426418";

// Máscara de telefone
const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};

// Máscara para CNPJ
const maskCNPJ = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export default function Modal({ isOpen, onClose }) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Estado expandido para qualificação B2B
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    empresa: "",
    cnpj: "",
    cargo: "",
    segmento: "",
    volume: "",
    finalidade: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Aplica máscaras específicas
    if (name === "phone") value = phoneMask(value);
    if (name === "cnpj") value = maskCNPJ(value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const payload = {
        ...formData,
        submittedAt: new Date().toISOString(),
        source: "landing-page-b2b-modal", // Identificador da origem
      };

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Erro no envio: ${res.status}`);
      }

      // Evento GTM
      if (typeof window !== "undefined" && window.datalayer) {
        window.datalayer.push({
          event: "Forms_b2b_enviado",
          user_segment: formData.segmento, // Enviando segmento para o GTM também
        });
      }

      // Sucesso
      setTimeout(() => {
        setIsLoading(false);
        onClose();
        router.push("/b2b/obrigado");
      }, 500);
    } catch (error) {
      console.error(error);
      setErrorMessage("Erro ao enviar. Por favor, tente novamente.");
      setIsLoading(false);
    }
  };

  const inputClasses =
    "w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#6b4eff] focus:ring-2 focus:ring-[#6b4eff]/20 outline-none transition-all text-gray-900 placeholder-gray-400 text-sm";

  const selectClasses =
    "w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#6b4eff] focus:ring-2 focus:ring-[#6b4eff]/20 outline-none transition-all text-gray-900 text-sm appearance-none";

  const labelClasses =
    "block text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider mb-1";

  const iconClasses =
    "absolute left-3 top-[34px] h-4 w-4 text-gray-400 pointer-events-none"; // Posicionamento do ícone

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl animate-scale-in my-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-600 transition-colors p-1 z-10"
        >
          <X size={24} />
        </button>

        <div className="p-6 md:p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#0b1220] mb-2">
              Solicitar Proposta Comercial
            </h2>
            <p className="text-gray-500 text-sm">
              Preencha os dados da sua empresa para falar com nossos
              especialistas.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* --- GRID DE DADOS PESSOAIS --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nome Completo */}
              <div className="relative">
                <label className={labelClasses}>Nome Completo</label>
                <User className="absolute left-3 top-[28px] h-4 w-4 text-gray-400" />
                <input
                  autoComplete="name"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  className={inputClasses}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label className={labelClasses}>E-mail Corporativo</label>
                <Mail className="absolute left-3 top-[28px] h-4 w-4 text-gray-400" />
                <input
                  autoComplete="email"
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@empresa.com.br"
                  className={inputClasses}
                />
              </div>

              {/* WhatsApp */}
              <div className="relative">
                <label className={labelClasses}>WhatsApp</label>
                <Phone className="absolute left-3 top-[28px] h-4 w-4 text-gray-400" />
                <input
                  autoComplete="tel"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={15}
                  placeholder="(00) 00000-0000"
                  className={inputClasses}
                />
              </div>

              {/* Cargo */}
              <div className="relative">
                <label className={labelClasses}>Cargo</label>
                <Briefcase className="absolute left-3 top-[28px] h-4 w-4 text-gray-400" />
                <input
                  autoComplete="organization-title"
                  required
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  placeholder="Ex: Sócio, Gerente"
                  className={inputClasses}
                />
              </div>
            </div>

            <hr className="border-gray-100 my-2" />

            {/* --- GRID DE DADOS DA EMPRESA --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nome da Empresa */}
              <div className="relative">
                <label className={labelClasses}>Nome da empresa</label>
                <Building2 className="absolute left-3 top-[28px] h-4 w-4 text-gray-400" />
                <input
                  required
                  autoComplete="organization"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Razão Social"
                  className={inputClasses}
                />
              </div>

              {/* CNPJ */}
              <div className="relative">
                <label className={labelClasses}>CNPJ</label>
                <FileText className="absolute left-3 top-[28px] h-4 w-4 text-gray-400" />
                <input
                  required
                  autoComplete="off"
                  name="cnpj"
                  value={formData.cnpj}
                  onChange={handleChange}
                  maxLength={18}
                  placeholder="00.000.000/0000-00"
                  className={inputClasses}
                />
              </div>
            </div>

            {/* --- GRID DE QUALIFICAÇÃO (3 Colunas no PC) --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Segmento */}
              <div>
                <label className={labelClasses}>Segmento</label>
                <select
                  required
                  name="segmento"
                  value={formData.segmento}
                  onChange={handleChange}
                  className={selectClasses}
                >
                  <option value="" disabled>
                    Selecione...
                  </option>
                  <option value="financeira">Financeira</option>
                  <option value="imobiliaria">Imobiliária</option>
                  <option value="varejo">Varejo/Loja</option>
                  <option value="servicos">Serviços B2B</option>
                  <option value="industria">Indústria</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              {/* Volume */}
              <div>
                <label className={labelClasses}>Consultas/Mês</label>
                <select
                  required
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  className={selectClasses}
                >
                  <option value="" disabled>
                    Volume...
                  </option>
                  <option value="ate_50">Até 50</option>
                  <option value="50_200">50 a 200</option>
                  <option value="200_1000">200 a 1.000</option>
                  <option value="acima_1000">+1.000 (Enterprise)</option>
                  <option value="nao_sei">Não sei</option>
                </select>
              </div>

              {/* Finalidade */}
              <div>
                <label className={labelClasses}>Objetivo</label>
                <select
                  required
                  name="finalidade"
                  value={formData.finalidade}
                  onChange={handleChange}
                  className={selectClasses}
                >
                  <option value="" disabled>
                    Finalidade...
                  </option>
                  <option value="analise_credito">Análise Crédito</option>
                  <option value="cobranca">Cobrança</option>
                  <option value="validacao">Validação Cadastral</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>

            {errorMessage && (
              <p className="text-red-500 text-xs text-center font-semibold bg-red-50 p-2 rounded">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full mt-4 bg-gradient-to-r from-[#6b4eff] to-[#8b6bff] hover:from-[#5a3de0] hover:to-[#7a5add] text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex justify-center items-center uppercase text-sm tracking-wide ${
                isLoading ? "opacity-70 cursor-wait" : ""
              }`}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Receber Proposta Personalizada"
              )}
            </button>

            <p className="text-xs text-gray-400 text-center mt-2">
              Solução exclusiva para empresas (B2B). Seus dados estão
              protegidos.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
