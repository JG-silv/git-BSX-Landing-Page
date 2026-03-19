import { Package, UserPlus, Banknote, MailCheck, Star, Search } from "lucide-react";

// Dados para a seção de passos
export const steps = [
  {
    number: "01",
    title: "Escolha seu Pacote",
    description: "Selecione o pacote de créditos que melhor atende às suas necessidades de consulta.",
    color: "bg-blue-500",
    icon: Package
  },
  {
    number: "02",
    title: "Cadastre-se na Plataforma",
    description: "Crie sua conta gratuita em nossa plataforma segura. Processo rápido e simples.",
    color: "bg-cyan-500",
    icon: UserPlus
  },
  {
    number: "03",
    title: "Realize o Pagamento",
    description: "Efetue o pagamento via PIX. Transação 100% segura.",
    color: "bg-green-500",
    icon: Banknote
  },
  {
    number: "04",
    title: "Receba a Confirmação",
    description: "Após a aprovação, você receberá um e-mail de confirmação com os detalhes da sua compra.",
    color: "bg-purple-500",
    icon: MailCheck
  },
  {
    number: "05",
    title: "Créditos Liberados",
    description: "Seus créditos são liberados automaticamente em sua conta. Para PIX, a liberação é instantânea.",
    color: "bg-orange-500",
    icon: Star
  },
  {
    number: "06",
    title: "Comece a Consultar",
    description: "Acesse sua área do usuário e comece a realizar suas consultas imediatamente.",
    color: "bg-indigo-500",
    icon: Search
  }
];

// Dados para a seção de vantagens
export const benefits = [
  {
    title: "Pagamento Seguro",
    description: "Transações criptografadas e métodos de pagamento confiáveis",
  },
  {
    title: "Liberação Rápida",
    description: "Créditos liberados automaticamente, PIX é instantâneo",
  },
  {
    title: "Suporte Especializado",
    description: "Atendimento por WhatsApp com consultores especializados",
  },
  {
    title: "Dados Oficiais",
    description: "Informações de fontes oficiais e atualizadas em tempo real",
  },
];
