"use client";

import React from "react";
import products from "./props"; // Os seus dados
import { Carrossel } from "./carrosel"; // O seu componente de carrossel reutilizável
import { ProductCard } from "./ProductCard"; // O card que extraímos
import { sourceSans3 } from "../fonts/fonts.jsx";

export default function Solutions() {
  return (
    <section className="container px-8 py-16 mx-auto">
      <h1 className="titulo text-2xl md:text-5xl font text-center text-[#26478D] mb-12">
        Conheça{" "}
        <span className="h1 font-bold text-[#83227D]">nossas soluções</span>
      </h1>

      {/* Usamos space-y-16 para dar um espaçamento vertical entre os carrosséis */}
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Secção CPF */}
        <div>
          <h2 className={`${sourceSans3.className} text-2xl font-semibold text-[#83227D] mb-6 flex items-center gap-2`}>
            Para pessoa física (CPF)
          </h2>
          <Carrossel
            data={products.cpf}
            renderItem={(product) => <ProductCard product={product} />}
          />
        </div>

        {/* Secção CNPJ */}
        <div>
          <h2 className={`${sourceSans3.className} text-2xl font-semibold text-[#83227D] mb-6`}>
            Para pessoa jurídica (CNPJ)
          </h2>
          <Carrossel
            data={products.cnpj}
            renderItem={(product) => <ProductCard product={product} />}
          />
        </div>

        {/* Secção Veicular */}
        <div>
          <h2 className={`${sourceSans3.className} text-2xl font-semibold text-[#83227D] mb-6`}>
            Consulta veicular
          </h2>
          <Carrossel
            data={products.veicular}
            renderItem={(product) => <ProductCard product={product} />}
          />
        </div>

      </div>
    </section>
  );
}

