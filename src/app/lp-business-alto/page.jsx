"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Beneficios from "./Beneficios/index";
import CTA from "./CTA/index";
import Chat from "./Chat/index";
import Context from "./Context/index";
import FAQ from "./FAQ/index";
import Hero from "./Hero/index";
import Processo from "./Processo/index";
import Proof from "./Proof/index";

export default function LpBusinessAltoPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray("[data-lp-section]");

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 48 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          }
        );
      });

      const cards = gsap.utils.toArray("[data-lp-card]");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 26, x: index % 2 === 0 ? -16 : 16 },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-slate-950 text-slate-900">
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
      <footer className="border-t border-slate-800 bg-slate-950 px-4 py-6 text-center text-sm text-slate-300">
        2026 © GRUPO BSX — Todos os direitos reservados 
      </footer>
    </div>
  );
}
