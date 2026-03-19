"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import ContactForm from "../ContactForm/index.jsx";

export default function ContactSection() {
  return (
    <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-52 py-12 px-6">
      {/* Card à esquerda */}
      <div
        className="
          w-full md:w-1/2
          bg-[#F9FBF2]
          rounded-xl
          p-8
          flex flex-col justify-between
          h-80
          border-l-4 border-[#83227D]
          shadow-[0_8px_30px_rgba(38,71,141,0.2)]
          transition-transform hover:scale-105
        "
      >
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#26478D] mb-4">
            Quer saber mais sobre nossos serviços?
          </h2>
          <p className="text-lg text-[#3B67AC]">
            Marque uma conversa com um dos nossos especialistas
          </p>
        </div>
        <a
          href="#contact-form"
          className="
            mt-6
            inline-flex items-center justify-center
            text-[#83227D] font-semibold
            hover:text-[#3B67AC]
            transition-colors
          "
        >
          Preencha o formulário <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>

              {/* Imagem de parceiros abaixo dos depoimentos */}
    

      {/* Formulário à direita */}
      <div id="contact-form" className="w-full md:w-1/2">
        <ContactForm />
      </div>
      

      
    </section>
    
  );
}
