"use client";

import React from "react";
import { Building, Users, ShieldCheck, Database, Zap } from "lucide-react";
import { sourceSans3 } from "../../app/components/fonts/fonts.jsx";
import { AnimatedNumber } from "../../app/components/animatedNumbers/AnimatedNumbers.jsx";

// --- Sub-componentes de Layout ---

// Componente para cada item da Timeline
const TimelineItem = ({ icon: Icon, title, description, isLast = false }) => (
  <div className="relative flex items-start">
    <div className="flex flex-col items-center mr-6">
      <div className="flex-shrink-0 bg-blue-800 rounded-full p-3 z-10 shadow-lg">
        <Icon className="text-white" size={22} />
      </div>
      {!isLast && (
        <div className="w-px h-full bg-gray-300 absolute top-12 left-5" />
      )}
    </div>
    <div className="pb-12 pt-1">
      <h4 className="font-bold text-lg text-gray-900">{title}</h4>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

// Componente para os cartões de estatísticas, agora usando o AnimatedNumber importado
const StatCard = ({ value, label }) => {
  const numericValue = parseFloat(
    value.replace(/[^0-9,.]/g, "").replace(",", ".")
  );
  const prefix = value.match(/^\D*/)?.[0] || "";
  const suffix = value.match(/[^0-9,.]*$/)?.[0] || "";

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <p className="text-3xl font-bold text-blue-800">
        {prefix}
        <AnimatedNumber target={numericValue} />
        {suffix}
      </p>
      <p className="text-gray-500 text-sm mt-1">{label}</p>
    </div>
  );
};

// --- Componente Principal ---

export default function AboutUs({ clients = [], highlight }) {
  const icons = [Zap, Database, ShieldCheck];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1
            className={`titulo ${sourceSans3.className} text-[#26478D] leading-tight mb-6`}
          >
            Sobre o
            <span className="font-extrabold text-[#83227D]"> Grupo BSX</span>
          </h1>
          <p
            className={`body-text ${sourceSans3.className} text-xl md:text-2xl text-[#2D3748] mb-8 mt-2`}
          >
            Conheça um pouco do que nossos clientes conquistaram com nossas
            soluções.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">
              Nossos diferenciais
            </h3>
            <div>
              {clients.map((item, idx) => (
                <TimelineItem
                  key={idx}
                  icon={icons[idx % icons.length]}
                  title={item.title}
                  description={item.description}
                  isLast={idx === clients.length - 1}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8 sticky top-24">
            <div className="bg-[#83227D] text-white p-8 rounded-2xl shadow-2xl shadow-violet-500/30">
              <h2 className="font-bold text-2xl mb-3">{highlight.title}</h2>
              <p className="opacity-90">{highlight.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatCard value="+10000" label="Clientes Ativos" />
              <StatCard value="99.8%" label="Uptime e Segurança" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
