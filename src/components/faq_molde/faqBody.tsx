'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from './props'; 
import {
  inter,
  poppins,
  sourceSans3,
} from "../../app/components/fonts/fonts.jsx";

// Definindo as props que o FaqBody espera receber
interface FaqBodyProps {
  items: FaqItem[];
}

// --- Componente Interno para cada linha do Acordeão ---
// Isso ajuda a manter o código organizado.
function AccordionItem({ item, isOpen, onToggle }: { item: FaqItem, isOpen: boolean, onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      {/* O botão que o usuário clica para abrir/fechar */}
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left py-4 text-base md:text-lg font-semibold focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
        aria-expanded={isOpen}
        aria-controls={`faq-content-${item.id}`}
      >
        {/*  cor do titulo */} 
        <span className={`${poppins.className} p-4 text-2sm font-medium text-[#26478D]`}>{item.question}</span>
        {/* Troca o ícone de + para - quando está aberto */}
        {isOpen ? (
          <Minus className="h-5 w-5 text-gray-700 flex-shrink-0" />
        ) : (
          <Plus className="h-5 w-5 text-gray-700 flex-shrink-0" />
        )}
      </button>

      {/* A resposta só é renderizada no HTML se o item estiver aberto */}
      {isOpen && (
        <div
          id={`faq-content-${item.id}`}
          className="pt-2 pb-4 text-gray dark:text-gray-600"
        >
          {item.answer}
        </div>
      )}
    </div>
  );
}


// --- O Componente Principal FaqBody ---
export function FaqBody({ items }: FaqBodyProps) {
  // Este estado controla qual item do acordeão está aberto no momento.
  // Armazenamos o 'id' do item aberto, ou 'null' se nenhum estiver aberto.
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  // Função para lidar com o clique em uma pergunta
  const handleToggle = (itemId: string) => {
    // Se o item clicado já for o que está aberto, feche-o (setando para null).
    // Caso contrário, abra o item clicado (setando seu id).
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  return (
    <div className="w-full">
      {/* Mapeamos a lista de itens recebida via props */}
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          // Passamos para o filho se ele deve estar aberto ou não
          isOpen={openItemId === item.id}
          // Passamos a função para que o filho possa avisar o pai quando for clicado
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
