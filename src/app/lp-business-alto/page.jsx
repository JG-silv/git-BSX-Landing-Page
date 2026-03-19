import React from "react";
import Beneficios from "./Beneficios/index";
import Chat from "./Chat/index";
import FAQ from "./FAQ/index";
import Hero from "./Hero/index";
import Oferta from "./Oferta/index";
import ProvaSocial from "./ProvaSocial/index";

export default function LpBusinessAltoPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-900">
      <main className="relative">
        <Hero />
        <Beneficios />
        <ProvaSocial />
        <Oferta />
        <FAQ />
        <Chat />
      </main>
    </div>
  );
}
 
