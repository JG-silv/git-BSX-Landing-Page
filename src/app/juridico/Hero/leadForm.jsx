import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Ou 'next/router' dependendo da sua versão
import {
  User,
  Phone,
  FileText,
  MapPin,
  AlertTriangle,
  ArrowRight,
  HelpCircle,
  DollarSign
} from "lucide-react";

const LeadForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

 /* URL DE TESTE 
  const WEBHOOK_URL =
    "https://grupobsx2025.app.n8n.cloud/webhook-test/278a1082-2f72-4100-a6ab-1421fae97447"; */

    // URL PADRÃO
    const WEBHOOK_URL = "https://grupobsx2025.app.n8n.cloud/webhook/278a1082-2f72-4100-a6ab-1421fae97447";

  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    documento: "",
    localizacao: "",
    situacao: "",
    valorDivida: "", // NOVO CAMPO
  });

  // --- MÁSCARAS (Mantive sua lógica original que está ótima) ---

  const whatsappMask = (value) => {
    let v = value.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    return v;
  };

  const maskCpfCnpj = (value) => {
    let v = value.replace(/\D/g, "");
    if (v.length > 14) v = v.slice(0, 14);
    if (v.length <= 11) {
      return v
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
    return v
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "whatsapp") value = whatsappMask(value);
    if (name === "documento") value = maskCpfCnpj(value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const cleanDoc = formData.documento.replace(/\D/g, "");
    const cleanPhone = formData.whatsapp.replace(/\D/g, "");

    // Validações
    if (cleanDoc.length !== 11 && cleanDoc.length !== 14) {
      setErrorMessage("Por favor, digite um CPF ou CNPJ válido.");
      return;
    }
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      setErrorMessage("Por favor, digite um telefone válido com DDD.");
      return;
    }
    // Validação do novo campo
    if (!formData.valorDivida) {
        setErrorMessage("Por favor, selecione uma estimativa do valor.");
        return;
    }

    setIsLoading(true);

    try {
      const payload = {
        ...formData,
        submittedAt: new Date().toISOString(),
        source: "landing-page-juridico-oferta", // Tag alterada para rastrear a nova campanha
        is_high_ticket: formData.valorDivida === "acima_50k" || formData.valorDivida === "entre_10k_50k", // Flag útil para automação
      };

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Erro no envio: ${res.status}`);
      }

      // DataLayer Google Ads/Analytics
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "Form_juridico_lp",
          user_segment: formData.situacao,
          user_debt_value: formData.valorDivida, // Importante para criar públicos no Google
        });
      }

      // Sucesso
      setTimeout(() => {
        setIsLoading(false);
        router.push("/juridico/obrigado");
      }, 500);
    } catch (error) {
      console.error(error);
      setErrorMessage("Erro ao enviar. Por favor, tente novamente.");
      setIsLoading(false);
    }
  };

  // Classes padrão para inputs (DRY)
  const inputClasses = "w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition text-slate-700 placeholder-slate-400 bg-white";
  const labelClasses = "block text-sm font-semibold text-slate-700 mb-1 ml-1";
  const iconClasses = "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* Mensagem de Erro */}
      {errorMessage && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2 animate-pulse">
          <AlertTriangle size={16} />
          {errorMessage}
        </div>
      )}

      {/* Nome */}
      <div>
        <label htmlFor="nome" className={labelClasses}>Nome Completo</label>
        <div className="relative">
          <div className={iconClasses}><User size={18} /></div>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            className={inputClasses}
            placeholder="Seu nome ou da empresa"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* WhatsApp e Documento (Grid) */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="whatsapp" className={labelClasses}>WhatsApp</label>
          <div className="relative">
            <div className={iconClasses}><Phone size={18} /></div>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              className={inputClasses}
              placeholder="(00) 00000-0000"
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="documento" className={labelClasses}>CPF ou CNPJ</label>
          <div className="relative">
            <div className={iconClasses}><FileText size={18} /></div>
            <input
              type="text"
              id="documento"
              name="documento"
              required
              className={inputClasses}
              placeholder="000.000.000-00"
              value={formData.documento}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Localização */}
      <div>
        <label htmlFor="localizacao" className={labelClasses}>Cidade e Estado</label>
        <div className="relative">
          <div className={iconClasses}><MapPin size={18} /></div>
          <input
            type="text"
            id="localizacao"
            name="localizacao"
            required
            className={inputClasses}
            placeholder="Ex: São Paulo - SP"
            value={formData.localizacao}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Situação (Mantido) */}
      <div>
        <label htmlFor="situacao" className={labelClasses}>Qual o motivo do bloqueio/problema?</label>
        <div className="relative">
          <div className={iconClasses}><HelpCircle size={18} /></div>
          <select
            id="situacao"
            name="situacao"
            required
            className={`${inputClasses} appearance-none`}
            value={formData.situacao}
            onChange={handleChange}
          >
            <option value="" disabled>Selecione o motivo</option>
            <option value="divida_bancaria">Dívida Bancária / Financiamento</option>
            <option value="processo_judicial">Bloqueio Judicial / Penhora</option>
            <option value="busca_apreensao">Busca e Apreensão de Veículo</option>
            <option value="erro_cadastro">Nome negativado indevidamente</option>
            <option value="outro">Outros</option>
          </select>
        </div>
      </div>

      {/* --- NOVO CAMPO ESTRATÉGICO: VALOR DA DÍVIDA --- */}
      <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
        <label htmlFor="valorDivida" className="block text-sm font-bold text-amber-900 mb-1 ml-1">
            Qual o valor aproximado da pendência?
        </label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-amber-500">
                <DollarSign size={18} />
            </div>
            <select
                id="valorDivida"
                name="valorDivida"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-amber-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition text-slate-800 bg-white appearance-none cursor-pointer hover:border-amber-400"
                value={formData.valorDivida}
                onChange={handleChange}
            >
                <option value="" disabled>Selecione uma faixa de valor</option>
                <option value="ate_5k">Até R$ 5.000 (Cartão/Cheque)</option>
                <option value="entre_5k_20k">De R$ 5.000 a R$ 20.000</option>
                <option value="entre_20k_100k">De R$ 20.000 a R$ 100.000</option>
                <option value="acima_100k">Acima de R$ 100.000 (Alto Valor)</option>
            </select>
        </div>
        <p className="text-[10px] text-amber-700/70 mt-1 ml-1">
            *Isso define qual advogado especialista analisará seu caso.
        </p>
      </div>

      {/* Botão de Submit (CTA Focado em Desconto) */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-amber-500 text-white font-bold py-4 px-6 rounded-lg hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/30 transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-2 flex justify-center items-center gap-2"
      >
        {isLoading ? (
            // Spinner Simples
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        ) : (
          <>
            SOLICITAR ANÁLISE 
            <ArrowRight size={20} />
          </>
            // COM 50% OFF
        )}
      </button>

      <p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        Seus dados estão protegidos por criptografia SSL.
      </p>
    </form>
  );
};

export default LeadForm;