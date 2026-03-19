'use client';

import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AboutUs from '../../components/sobre';

const clients = [
  {
    title: 'Integração de Pessoas e Tecnologia',
    description:
      'Nossos clientes realizam soluções integradas que conectam pessoas, tecnologia e inovação de forma simples, melhorando processos, análises e impulsionando o crescimento dos negócios.',
  },
  {
    title: 'Consultas de Crédito Nacionais',
    description:
      'Nossos clientes realizam consultas online de CPF e CNPJ através de sistema pré-pago, com informações diretas das bases de proteção ao crédito, garantindo maior segurança e comodidade.',
  },
  {
    title: 'Plataforma de Consulta Premium',
    description:
      'Nossos clientes realizam o cadastramento em plataforma especializada, facilitando o acesso ao maior distribuidor de consultas de crédito no país e oferecendo suporte completo para suas necessidades.',
  },
];

const highlight = {
  title: '10 anos no mercado',
  description:
    'Trabalhamos com big players do mercado de crédito, além de oferecer o sistema mais completo de consultas CPF/CNPJ do mercado.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <AboutUs clients={clients} highlight={highlight} />
      <Footer />
    </div>
  );
}
