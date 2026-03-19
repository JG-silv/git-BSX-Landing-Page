"use client";

import React from "react";
import Header from "../components/header";
import ConsultasEspeciaisPage from "../../components/tabela_especiais/props.jsx";
import ButtonCadastro from "../../components/buttons/button_cadastro.jsx";
import Footer from "../components/footer";

export default function PaginaEspeciais() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#050A30] to-[#f5f5f5] to-60%">
      <Header />
      <ConsultasEspeciaisPage />
      <ButtonCadastro />
      <Footer />
    </div>
  );
}
