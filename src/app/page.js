import Carrossel from "./components/carrosel";
import Header from "./components/header";
import HeroSection from "./components/title";
import StatsSection from "./components/animatedNumbers";
import ProductInfoCarousel from "./components/infoProdutos";
import Cardapio from "./components/cardapio";
import Feedback from "./components/Feedback";
import Footer from "./components/footer";
import ContactSection from "./components/ContactSection";

export const metadata = {
  // Título para o Google e aba do navegador
  title: "Grupo BSX | Consultas de CPF, CNPJ e Análise de Crédito",

  // Descrição para o Google
  description:
    "Plataforma completa para análise de crédito e gestão de risco. Consulte CPF, CNPJ, score, dívidas e ações judiciais com segurança e agilidade.",

  // Bloco para redes sociais (Wpp, Facebook, etc.)
  openGraph: {
    // Título para redes sociais
    title: "Grupo BSX: Decisões de Crédito Inteligentes e Seguras",

    // Descrição para redes sociais
    description:
      "Consulte CPF e CNPJ em segundos. Tenha acesso a relatórios completos para proteger seus negócios e tomar as melhores decisões.",

    // URL principal do site
    url: "https://www.grupobsx.com.br/",

    siteName: "Grupo BSX",
    images: [
      {
        // Imagem principal para compartilhamento
        url: "https://grupobsx.com.br/images/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <main className="bg-[#f5f5f5] min-h-screen text-black">
        <Header />
        <Carrossel />
        <HeroSection />
        <StatsSection />

        <section id="soluções">
          <Cardapio />
        </section>

        <Feedback />
        <div className="bg-gradient-to-b from-[#050A30] to-[#F5F5F5] py-12 px-6">
          <ProductInfoCarousel />
          <ContactSection />
        </div>

        <Footer />
      </main>
    </div>
  );
}
