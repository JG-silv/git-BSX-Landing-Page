import Header from "../../app/components/header";
import { FaqSection } from "../../components/faq_molde";
import Footer from "../../app/components/footer";


// Objeto de metadados
export const metadata = {
  title: "Perguntas Frequentes | Grupo BSX",
  description: "Encontre respostas rápidas para as perguntas mais comuns sobre os serviços, processos e soluções financeiras do Grupo BSX.",
  openGraph: {
    title: "Perguntas Frequentes | Grupo BSX",
    description: "Tire suas dúvidas sobre nossas soluções de crédito, análise de dados e processos. Respostas claras e diretas para você.",
    url: "https://www.grupobsx.com.br/faq", 
    siteName: "Grupo BSX",
    images: [
      {
        url: "https://grupobsx.com.br/images/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      <Header />
      <FaqSection />
      <Footer />
    </div>
  );
}
