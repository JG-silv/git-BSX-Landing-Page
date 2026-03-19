"use client"
import { ArrowRight } from 'lucide-react';
import Button from '../../components/b2b_components/button'
import Modal from '../../components/b2b_components/Modal_off'
import { useState } from 'react'

function Hero() {

  const handleOpenAndScroll = (sectionId) => {
    setIsModalOpen(true);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const phoneNumber = "5521994590797";
  const defaultMessage = "Olá! Gostaria de saber mais sobre a BSX";

  // Link para WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const handleOpenWhatsApp = () => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative pt-8 pb-20 lg:pb-32 overflow-hidden min-h-[85vh] flex items-center">

      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Background Corporativo"
          className="w-full h-full object-cover"
        />
        {/* O overlay preto  */}
        <div className="absolute inset-0 bg-gray-900/75 bg-linear-to-b from-gray-800/80 via-gray-800/75 to-gray-100 to-90%"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">

          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-7xl mb-8 leading-tight">
            Consulta CPF e CNPJ para empresas
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400"> antes de vender ou conceder crédito</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 mb-12 leading-relaxed">
            Score, dívidas, protestos e histórico para tomar decisões seguras
            e evitar inadimplência no seu negócio.

          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => handleOpenAndScroll('confianca')}
              id="BtnProposta" variant="primary" className="cursor-pointer w-full sm:w-auto text-lg px-8 py-4">
              Demonstração da Plataforma
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div>

              <p className="md:hidden max-w-2xl text-xs mx-auto  text-gray-300 leading-relaxed">
                Atendimento consultivo para empresas.
                Não realizamos consultas individuais ou gratuitas.
              </p>
            </div>

            <Button
              onClick={handleOpenWhatsApp}
              id="BtnConsultor" variant="outline" className="cursor-pointer w-full sm:w-auto text-lg px-8 py-4">
              Falar com Consultor
            </Button>

          </div>

          {/* Microcopy */}
          <p className="mt-6 text-sm text-gray-800 italic">
            A BSX ajuda empresas a reduzir inadimplência, validar clientes e tomar decisões de crédito com dados confiáveis.
          </p>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Hero
