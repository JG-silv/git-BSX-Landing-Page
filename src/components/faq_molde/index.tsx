"use client";

import React, { useState, useEffect } from "react";
import { FaqBody } from "./faqBody";
import { faqCnpjData, faqCpfData, allFaqData, FaqItem } from "./props";
import {
  inter,
  poppins,
  sourceSans3,
} from "../../app/components/fonts/fonts.jsx";

// Definindo um tipo para as categorias, para garantir que só usemos os valores corretos
type FaqCategory = "todos" | "cnpj" | "cpf";

// O nome do componente principal exportado. Ex: <FaqSection />
export function FaqSection() {
  // --- ESTADO DO COMPONENTE ---
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<FaqCategory>("todos");
  const [filteredItems, setFilteredItems] = useState<FaqItem[]>(allFaqData);

  // --- LÓGICA DE FILTRAGEM ---
  // Este Hook é executado sempre que o termo de busca ou a categoria ativa mudam.
  useEffect(() => {
    let itemsToFilter: FaqItem[] = [];

    // Selecionamos a lista baseada na categoria
    if (activeCategory === "cnpj") {
      itemsToFilter = faqCnpjData;
    } else if (activeCategory === "cpf") {
      itemsToFilter = faqCpfData;
    } else {
      itemsToFilter = allFaqData;
    }

    // Filtramos essa lista com base no termo de busca
    if (searchTerm) {
      const lowercasedFilter = searchTerm.toLowerCase();
      itemsToFilter = itemsToFilter.filter(
        (item) =>
          item.question.toLowerCase().includes(lowercasedFilter) ||
          item.answer.toLowerCase().includes(lowercasedFilter)
      );
    }

    // Atualizamos o estado com a lista final
    setFilteredItems(itemsToFilter);
  }, [searchTerm, activeCategory]);

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        {/* Título da Seção */}
        <div className="text-center mb-10">
          <h1
            className={`titulo ${sourceSans3.className} text-[#26478D] leading-tight mb-6`}
          >
            Perguntas
            <span className="font-extrabold text-[#83227D]"> frequentes</span>
          </h1>
          <p className="body-text ${sourceSans3.className} text-xl md:text-2xl text-[#2D3748] mb-8 mt-2`">
            Encontre aqui as respostas para as suas principais dúvidas.
          </p>
        </div>

        {/* Barra de Busca */}
        <div className="mb-8">
          <input
            type="search"
            placeholder="Buscar por palavra-chave..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Botões de Filtro por Categoria */}
        <div className="flex justify-center space-x-2 md:space-x-4 mb-10">
          <button
            onClick={() => setActiveCategory("todos")}
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              activeCategory === "todos"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setActiveCategory("cnpj")}
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              activeCategory === "cnpj"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            CNPJ
          </button>
          <button
            onClick={() => setActiveCategory("cpf")}
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              activeCategory === "cpf"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            CPF
          </button>
        </div>

        {/* Renderização da Lista de Perguntas */}
        {filteredItems.length > 0 ? (
          <FaqBody items={filteredItems} />
        ) : (
          <p className="text-center text-gray-900 dark:text-gray-800">
            Nenhum resultado encontrado para sua busca.
          </p>
        )}
      </div>
    </main>
  );
}
