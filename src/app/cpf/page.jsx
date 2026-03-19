import React from "react";
import TabelaComparacao from "../../components/tabelacomparacao_cpf_cnpj";
import { dadosCpf } from "../../components/tabelacomparacao_cpf_cnpj/props.jsx";
import Header from "../../app/components/header/index.jsx";
import Footer from "../../app/components/footer/index.jsx";
import "../globals.css";
import {
  inter,
  poppins,
  sourceSans3,
} from "../../app/components/fonts/fonts.jsx";

// Objeto de metadados
export const metadata = {
  title: "Consulta de CPF Completa e Análise de Crédito - Grupo BSX",
  description: dadosCpf.subtitulo, 
  openGraph: {
    title: "Consulta de CPF | Grupo BSX",
    description: "Verifique o score de crédito, dívidas, protestos e outras informações essenciais de qualquer CPF em segundos.",
    url: "https://www.grupobsx.com.br/cpf", 
    siteName: "Grupo BSX",
    images: [
      {
        url: "https://grupobsx.com.br/images/logo.png", // URL de uma imagem para redes sociais
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const CpfPage = () => {
  const { subtitulo, planos, features } = dadosCpf;

  return (
    <div className="bg-[#f5f5f5] min-h-screen text-black">
      <Header />
      <main className="py-16 pb-0 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1
              className={`titulo ${sourceSans3.className} text-[#26478D] leading-tight mb-6`}
            >
              Escolha um
              <span className="font-extrabold text-[#83227D]"> relatório</span>
            </h1>
            <p
              className={`body-text ${sourceSans3.className} text-xl md:text-2xl text-[#2D3748] mb-8 mt-2`}
            >
              {subtitulo}
            </p>
          </div>
          <TabelaComparacao planos={planos} features={features} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CpfPage;
