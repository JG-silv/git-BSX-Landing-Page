"use client"
import { CheckCircle2, XCircle, X } from 'lucide-react';
import Button from '../../components/b2b_components/button';
import Modal from '../../components/b2b_components/Modal_off'
import { useState } from 'react'

const painPoints = [
  "Contratos fixos e pacotes engessados",
  "Custo elevado por consulta",
  "API lenta, mal documentada",
  "Suporte automático ou inexistente",
  "Painel confuso, sem relatórios úteis"
];

const solutionPoints = [
  "Planos sob medida para seu volume",
  "Preços agressivos por escala",
  "Integração em dias com suporte real",
  "Gerente de conta exclusivo",
  "Dashboard intuitivo com insights"
];


function SectionTwo() {

const handleOpenAndScroll = (sectionId) => {
  setIsModalOpen(true);

  const section = document.getElementById(sectionId);
  section.scrollIntoView({behavior: 'smooth', block:'start'});
}

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <section id="solucao" className="bg-gray-50 bg-linear-to-b from-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Seu bureau atual é caro, lento e inflexível?
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Você está pagando demais por cada consulta e recebendo de menos. A BSX nasceu para empresas como a sua: que consultam em volume, querem autonomia, valorizam atendimento personalizado e não aceitam pagar caro por burocracia.

          </p>
        </div>

        {/* Grid de Comparação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Card Dores */}
          <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-8 relative overflow-hidden h-full">
            <div className="absolute top-0 left-0 w-2 h-full bg-red-400"></div>
            <div className="flex items-center mb-6">
              <span className="bg-red-100 p-2 rounded-full mr-3">
                <XCircle className="h-6 w-6 text-red-600" />
              </span>
              <h3 className="text-xl font-bold text-gray-900">Antes: Modelos Tradicionais</h3>
            </div>
            <ul className="space-y-4">
              {painPoints.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-600">
                  <X className="h-5 w-5 text-red-400 mr-3 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card Solução BSX */}
          <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 relative overflow-hidden transform md:-translate-y-2 transition-transform h-full">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#4a36b2]"></div>
            <div className="flex items-center mb-6">
              <span className="bg-blue-100 p-2 rounded-full mr-3">
                <CheckCircle2 className="h-6 w-6 text-[#4a36b2]" />
              </span>
              <h3 className="text-xl font-bold text-gray-900">Agora: Com a BSX</h3>
            </div>
            <ul className="space-y-4">
              {solutionPoints.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-800 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={() => handleOpenAndScroll('confianca')}
            id="BtnMigrar" className="cursor-pointer">Quero migrar agora</Button>
          <p className="mt-4 text-sm text-gray-500 italic">
            Sem compromisso. Entenda como a BSX pode reduzir seus custos já no primeiro mês.
          </p>
        </div>

      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

export default SectionTwo;