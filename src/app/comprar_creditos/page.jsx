"use client";
import React from "react";
import Link from "next/link";
import "../globals.css";
import ButtonCadastro from "../../components/buttons/button_cadastro.jsx";
import { poppins, sourceSans3 } from "../../app/components/fonts/fonts.jsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/comprar_creditos/card.tsx";
import { steps } from "../../components/comprar_creditos/props.jsx";
import { Button } from "../../components/buttons/button_tabela";
import Header from "../../app/components/header/";
import Footer from "../../app/components/footer/";
import { CreditCard, ShoppingCart } from "lucide-react";
import Beneficios from "../../components/beneficios/";
import VideoSection from "../../components/ytpasso_passo";

// ===================================================================
// CORPO DO COMPONENTE DA PÁGINA
// ===================================================================
const ComprarCreditos = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />

      <main>
        {/* Seção Hero */}
        <section className="mt-16 mb-2 px-4 text-center ">
          <div className="container mx-auto max-w-4xl">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CreditCard className="h-10 w-10 text-white" />
            </div>
            {/* Título com Poppins */}
            <h1
              className={`titulo ${sourceSans3.className} text-2xl md:text-5xl font text-center text-[#26478D] mb-12`}
            >
              Como comprar
              <span className="font-extrabold text-[#83227D]"> créditos</span>
            </h1>
            {/* Texto com Source Sans 3 */}
          </div>
        </section>

        {/* Seção dos Passos */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="mb-8">
              {/* Título com Poppins */}
              <h2
                className={`h2 text-3xl font-bold text-gray-800 mb-4 ${sourceSans3.className}`}
              >
                6 Passos Simples
              </h2>
              {/* Texto com Source Sans 3 */}
              <p
                className={`body-text ${sourceSans3.className} text-xl md:text-2xl text-[#2D3748] mb-8 mt-2`}
              >
                Comprar crédito é rápido e muito fácil!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:-translate-y-1"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <p
                      className={`${poppins.className} text-sm font-medium text-[#26478D]`}
                    >
                      PASSO {step.number}
                    </p>
                    <CardTitle className={`${poppins.className}`}>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`body-text ${sourceSans3.className} text-center text-[#2D3748]`}
                    >
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* BOTÃO DE COMPRAR CREDITOS */}
        <div className="text-lg m-8 flex justify-center items-center pb-8">
          <Button
            onClick={() => dataLayer.push({ event: "Comprar_creditos" })}
            size="lg"
            className="bg-blue-600 text-white hover:bg-[#83227D] text-lg px-10 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link
              href="https://app.grupobsx.com.br/restrito/painel-controle/financeiro/creditos/default.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ShoppingCart size={20} />
              Comprar créditos agora
            </Link>
          </Button>
        </div>

        {/* Video Section */}
        <VideoSection
          videoId="-LHar6O__gg"
          title="Vídeo Tutorial Completo"
          description="Assista ao nosso tutorial passo a passo e veja como é simples comprar créditos."
          videoTitle="Tutorial: Como comprar créditos"
          videoDuration="Vídeo explicativo de 50 segundos"
        />

        <Beneficios />

        {/* BOTÃO DE CADASTRO */}
        <ButtonCadastro />
      </main>

      <Footer />
    </div>
  );
};

export default ComprarCreditos;
