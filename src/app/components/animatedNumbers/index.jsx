"use client";

import React from "react";
import { Users, Search, Calendar } from "lucide-react";
import { sourceSans3 } from "../fonts/fonts.jsx";
import  {AnimatedNumber } from "./AnimatedNumbers.jsx";

function StatCard({ icon: Icon, target, label, bgColor, iconColor }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`w-20 h-20 rounded-lg transform rotate-45 flex items-center justify-center ${bgColor}`}
      >
        <Icon className={`${iconColor} transform -rotate-45`} size={32} />
      </div>
      <div className="mt-4 text-4xl font-extrabold text-[#26478D]">
        +<AnimatedNumber target={target} />
      </div>
      <div className="mt-2 text-gray-600">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      target: 450,
      label: "Clientes corporativos ativos",
      bgColor: "bg-[#FFEDE1]",
      iconColor: "text-[#26478D]",
    },
    {
      icon: Search,
      target: 1500,
      label: "Consultas diárias realizadas",
      bgColor: "bg-[#F9FBF2]",
      iconColor: "text-[#83227D]",
    },
    {
      icon: Calendar,
      target: 10,
      label: "Anos de mercado",
      bgColor: "bg-[#FFEDE1]",
      iconColor: "text-[#3B67AC]",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#F5F5F5] rounded-lg">
      <h2 className={`${sourceSans3.className} titulo text-center text-[#26478D] mb-12`}>
        Estrutura que faz{" "}
        <span className="titulo font-bold text-[#83227D]"> diferença</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>
    </section>
  );
}
