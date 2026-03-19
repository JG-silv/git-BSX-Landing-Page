"use client";
import { ArrowRight, FileText, MessageCircle } from "lucide-react";
import { useState } from "react";
import Modal from "../../components/b2b_components/Modal_off";

function SectionFive() {
  const phoneNumber = "5521994590797";
  const defaultMessage = "Olá! Gostaria de saber mais sobre a BSX";

  // Link para WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  const handleOpenWhatsApp = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  const handleOpenAndScroll = (sectionId) => {
    setIsModalOpen(true);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="py-8 md:py-8 bg-linear-to-b from-white to-blue-50/30 reveal"
      id="contact"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Título */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
          Sua empresa não precisa mais <br className="hidden md:block" />
          se adaptar ao sistema.
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          A BSX é a parceira certa para quem quer escalar com inteligência.
          Preço justo, API rápida, dados completos e atendimento que entende seu
          negócio.
        </p>

        {/* Container dos Botões */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
          {/* Botão Solicitar Proposta  */}
          <button
            onClick={() => handleOpenAndScroll("confianca")}
            className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-[#6b4eff] to-[#8b6bff] hover:from-[#5a3de0] hover:to-[#7a5add] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            Solicitar Proposta
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          {/* Botão Falar com Consultor */}
          <button
            id="BtnConsultor"
            onClick={handleOpenWhatsApp}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#6b4eff] text-[#6b4eff] font-bold rounded-xl hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle size={20} />
            Falar com Consultor
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

export default SectionFive;
