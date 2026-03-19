"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  inter,
  poppins,
  sourceSans3,
} from "../../app/components/fonts/fonts.jsx";

/**
 * Componente para exibir pacotes de Relatórios Inteligentes.
 * @param {{ title: string, features: string[], price: string, unitPrice: string, link: string, icon: React.ElementType, color: string }[]} packages
 */
export default function RelatoriosInteligentes({ packages = [] }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="text-center mb-10">
          <h1
            className={`titulo font-normal ${sourceSans3.className} text-[#26478D] leading-tight mb-6`}
          >
            Pacotes de
            <span className="font-extrabold text-[#83227D]">
              {" "}
              relatórios inteligentes
            </span>
          </h1>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: idx * 0.2,
                  type: "spring",
                  stiffness: 120,
                }}
                className="bg-[#f5f5f5] rounded-2xl shadow-lg p-6 flex flex-col"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white ${pkg.color}`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-[#26478d] mb-2">
                  {pkg.title}
                </h3>
                <ul
                  className={`mb-4 text-left list-disc list-inside text-gray-700 flex-1 ${inter.className} `}
                >
                  {pkg.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <p className="text-2xl font-bold text-[#050A30]">
                    {pkg.price}
                  </p>
                  <p className="text-sm text-gray-500">
                    Valor unitário: {pkg.unitPrice}
                  </p>
                  <a
                  onClick={() => dataLayer.push({ event: "Click_pacotes" })}
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 px-4 py-2 bg-[#26478d] text-white rounded-lg font-medium hover:bg-[#3b67ac] transition-colors"
                  >
                    Registre-se neste link para adquirir o pacote
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
