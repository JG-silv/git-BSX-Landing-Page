'use client';

import React from 'react';
import '../globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import ButtonCadastro from '../../components/buttons/button_cadastro';
import { poppins, sourceSans3 } from '../../app/components/fonts/fonts';
import RelatoriosInteligentes from '../../components/relatorios_inteligentes/index';
import Beneficios from '../../components/beneficios';
import { reportsPackages } from '../../components/relatorios_inteligentes/props';
import RelatorioForm from '../../components/formulario_pacotes/index.jsx';
import VideoSection from "../../components/ytpasso_passo";


export default function Page() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <main>
        {/* Menu dos Pacotes */}
        <RelatoriosInteligentes packages={reportsPackages} />

        {/* Video Section */}
               <VideoSection 
               videoId="PnUbwXv1HEY" 
                title="Vídeo Tutorial Completo"
                description="Assista ao nosso tutorial passo a passo e veja como é simples comprar pacotes."
                videoTitle="Tutorial: Como comprar pacotes"
                videoDuration="Vídeo explicativo de 50 segundos"
               />

        <Beneficios />

        
        <div className="py-12 text-center">
          
        </div>
        <RelatorioForm/>
      </main>
      <ButtonCadastro />
      <Footer />
    </div>
  );
}