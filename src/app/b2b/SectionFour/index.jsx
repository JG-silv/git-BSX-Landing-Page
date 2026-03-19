'use client';

import React, { useEffect } from 'react'; // Importe o useEffect do React
import AnimatedNumber from '../../components/b2b_components/AnimatedNumbers';
import LogoLoop from '../../components/b2b_components/LogoLoop';

function SectionFour() {
 

  const partners = [
    { src: "/Parceiros/Banco_do_Brasil.png", alt: "Banco_do_Brasil" },
    { src: "/Parceiros/Porto_Seguro.png", alt: "Porto_Seguro" },
    { src: "/Parceiros/OABRJ.png", alt: "OABRJ" },
    { src: "/Parceiros/Santander.png", alt: "Santander" },
  ];

  const testimonials = [
    {
      name: 'Juliana Mendes',
      role: 'MEI – Loja de Roupas (João Pessoa – PB)',
      text: 'Antes do BSX, eu vendia fiado no escuro. Agora consulto CPF antes de qualquer venda a prazo. Já evitei dois calotes só este mês.'
    },
    {
      name: 'Renato Souza',
      role: 'Técnico de Refrigeração (Uberlândia – MG)',
      text: 'Uso os relatórios do Grupo BSX toda semana. É rápido, completo e me dá a confiança que eu precisava pra trabalhar com novos clientes.'
    },
    {
      name: 'Paula Lima',
      role: 'Consultora de Crédito (São Paulo – SP)',
      text: 'A interpretação do relatório com IA me poupa tempo. Em 1 minuto já sei se posso aprovar ou não.'
    },
    {
      name: 'Letícia Moura',
      role: 'Freelancer PJ (Belo Horizonte – MG)',
      text: 'Consultei um CNPJ antes de fechar parceria e descobri pendências ocultas. Com certeza evitei uma dor de cabeça.'
    },
    {
      name: 'Diego Azevedo',
      role: 'Distribuidor (Recife – PE)',
      text: 'Já deixamos de fechar com empresas que pareciam boas, mas estavam cheias de protestos. Os relatórios do BSX salvaram nosso caixa.'
    }
  ];

  return (
    <section className="items-center parceiros reveal" id="parceiros">
      <div className="container mx-auto px-8">
        <div className="pt-12">
          <h2 className="section-title text-center text-3xl font-bold mb-8 text-black">
            Empresas que confiam na <span className="text-bsx-primary text-blue-600">BSX</span>
          </h2>

          <div style={{ height: '140px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={partners}
              speed={30}
              logoHeight={100}
              pauseOnHover={true}
              gap={64}
              fadeOutColor="white" 
            />
          </div>

          {/* NUMEROS */}
          <AnimatedNumber />

          {/* DIVISOR */}
          <div className="w-full h-px bg-gray-200 mb-8"></div>

          {/*O que nossos clientes dizem */}
          <h3 className="text-2xl font-bold text-center mb-8 text-black">O que nossos clientes dizem</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <p className="italic text-gray-700 mb-4">“{t.text}”</p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-blue-600">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section 
      id='confianca'
      className="confidence-block bg-gray-900 text-white py-16 text-center mt-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-[#6b4eff]">Confiança</span> em larga escala
        </h1>
        <h2 className="text-xl md:text-2xl mb-4">
          mais de <span className='text-[#6b4eff] font-bold'> 15 milhões</span> de consultas processadas!
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 px-4">
          Imobiliárias, fintechs, varejistas, bancos e empresas de cobrança já usam a BSX
          para analisar crédito com mais velocidade, confiabilidade e economia.
        </p>
      </section>
    </section>
  );
}

export default SectionFour;