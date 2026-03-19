import React from "react";
import Beneficios from "./Beneficios/index";
import CTA from "./CTA/index";
import Chat from "./Chat/index";
import Context from "./Context/index";
import FAQ from "./FAQ/index";
import Hero from "./Hero/index";
import Processo from "./Processo/index";
import Proof from "./Proof/index";

export default function LpBusinessAltoPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-900">
      <main className="relative">
        <Hero />
        <Context />
        <Beneficios />
        <Processo />
        <Proof />
        <CTA />
        <FAQ />
        <Chat />
      </main>
    </div>
  );
}
 
