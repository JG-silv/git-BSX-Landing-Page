import CadastroWorkflow from "../../components/cadastro";
import Header from "../components/header";
import Footer from "../components/footer";

// Objeto de metadados
export const metadata = {
  title: "Crie sua Conta | Grupo BSX",
  description:
    "Cadastre-se em poucos passos e tenha acesso a relatórios completos de CPF, CNPJ e Veicular. Comece a tomar decisões de crédito mais seguras hoje mesmo.",
  openGraph: {
    title: "Crie sua Conta no Grupo BSX",
    description:
      "Acesso rápido e seguro a consultas de crédito. Cadastre-se agora e proteja seus negócios.",
    url: "https://www.grupobsx.com.br/cadastro",
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

export default function CadastroPage() {
  return (
    <div>
      <Header />
      <CadastroWorkflow />
      <Footer />
    </div>
  );
}
