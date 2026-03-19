import {
  Search,
  FileText,
  ShieldCheck,
  Car,
  User,
  FileSearch,
  Phone,
  ShieldAlert,
  Contact,
  BadgeCent,
  FileJson,
} from "lucide-react";

const products = {
  cpf: [
    {
      icon: FileText,
      title: "Relatório Básico",
      description:
        "Uma consulta essencial com as principais informações do CPF.",
      price: "R$ 12,00",
      link: "../cpf",
    },
    {
      icon: FileText,
      title: "Relatório Intermediário",
      description:
        "Análise detalhada, incluindo pendências financeiras e score.",
      price: "R$ 25,00",
      link: "../cpf",
    },
    {
      icon: FileText,
      title: "Relatório Avançado",
      description:
        "A consulta mais completa para uma análise de crédito aprofundada.",
      price: "R$ 42,00",
      link: "../cpf",
    },
    // ========================
    // ESPECIAIS (CPF) => alterado
    // ========================
    {
      icon: Search,
      title: "Relatório Jurídico",
      description:
        "Mostra se há processos judiciais em nome de pessoa física (CPF).",
      price: "R$ 22,50",
      link: "../especiais#cpf-relatorio-juridico",
    },
    {
      icon: User,
      title: "Radar de Endividamento",
      description:
        "Monitore o nível de endividamento e o comportamento financeiro.",
      price: "R$ 20,00",
      link: "../especiais#cpf-radar-de-endividamento",
    },
    {
      icon: ShieldCheck,
      title: "CND Express",
      description: "Emissão rápida da Certidão Negativa de Débitos.",
      price: "R$ 8,00",
      link: "../especiais#cpf-cnd-express",
    },
  ],
  cnpj: [
    {
      icon: FileText,
      title: "Relatório Básico",
      description:
        "Consulta rápida com informações cadastrais essenciais do CNPJ.",
      price: "R$ 14,00",
      link: "../cnpj",
    },
    {
      icon: FileText,
      title: "Relatório Intermediário",
      description:
        "Análise completa do CNPJ, incluindo quadro societário e pendências.",
      price: "R$ 29,00",
      link: "../cnpj",
    },
    {
      icon: FileText,
      title: "Relatório Avançado",
      description:
        "A visão mais aprofundada para análise de crédito de parceiros e clientes PJ.",
      price: "R$ 58,00",
      link: "../cnpj",
    },
    // ========================
    // ESPECIAIS (CNPJ) => alterado
    // ========================
    {
      icon: Search,
      title: "Relatório Jurídico",
      description:
        "Mostra se há processos judiciais em nome jurídico (CNPJ).",
      price: "R$ 22,50",
      link: "../especiais#cnpj-relatorio-juridico",
    },
    {
      icon: User,
      title: "Radar de Endividamento",
      description:
        "Monitore o nível de endividamento e o comportamento financeiro.",
      price: "R$ 20,00",
      link: "../especiais#cnpj-radar-de-endividamento",
    },
    {
      icon: ShieldCheck,
      title: "CND Express",
      description: "Emissão rápida da Certidão Negativa de Débitos.",
      price: "R$ 8,00",
      link: "../especiais#cnpj-cnd-express",
    },
  ],
veicular: [
    {
      id: "dados-basico",
      icon: Car,
      title: "Dados do Veículo - Básico",
      description:
        "Consulta básica de dados do veículo: Chassi, Cidade e Estado, Renavam, Ano de fabricação, CF, Combustível e Proprietário.",
      price: "R$ 10,00",
      link: "../veicular#veicular-dados-basico",
    },
    {
      id: "dados-intermediario",
      icon: Search,
      title: "Dados do Veículo - Intermediário",
      description:
        "Inclui dados básicos mais Modelo, Cor, Capacidade, Cilindradas, Renajud, RFB, Alienação, Roubo e Último licenciamento.",
      price: "R$ 12,00",
      link: "../veicular#veicular-dados-intermediario",
    },
    {
      id: "dados-completo",
      icon: FileSearch,
      title: "Dados do Veículo - Completo",
      description:
        "Todos os dados intermediários mais IPVA, Licenciamento, Débitos detalhados e Gravames.",
      price: "R$ 18,00",
      link: "../veicular#veicular-dados-completo",
    },
    {
      id: "endereco-telefone",
      icon: Phone,
      title: "Endereço e Telefone por Placa",
      description:
        "Nome, endereço completo e telefone do proprietário (restrito, exige base legal).",
      price: "R$ 12,00",
      link: "../veicular#veicular-endereco-telefone",
    },
    {
      id: "perda-total",
      icon: ShieldAlert,
      title: "Perda Total / Sinistro",
      description:
        "Verifica se o veículo foi declarado como perda total ou envolvido em sinistro grave.",
      price: "R$ 13,00",
      link: "../veicular#veicular-perda-total",
    },
    {
      id: "laudo-cautelar",
      icon: FileText,
      title: "Laudo Cautelar",
      description:
        "Um check-up completo de um veículo usado ou seminovo, para garantir sua procedência, segurança e evitar fraudes e problemas legais.",
      price: "R$ 42,90",
      link: "../veicular#veicular-laudo-cautelar",
    },
    {
      id: "proprietario-atual",
      icon: User,
      title: "Proprietário Atual",
      description: "Dados do atual proprietário do veículo: Nome e CPF/CNPJ.",
      price: "R$ 15,00",
      link: "../veicular#veicular-proprietario-atual",
    },
    {
      id: "consulta-cnh",
      icon: Contact,
      title: "Consulta CNH",
      description:
        "Categoria, Data de Expiração, RENACH, Nome, Bloqueios, Cursos e Observações.",
      price: "R$ 20,00",
      link: "../veicular#veicular-consulta-cnh", 
    },
    {
      id: "leilao-score",
      icon: BadgeCent,
      title: "LEILÃO SCORE + INDÍCIO + PT",
      description:
        "Probabilidade de leilão: indica a origem e o estado do veículo ao ser leiloado",
      price: "R$ 16,00",
      link: "../veicular#veicular-leilao-score",
    },
    {
      id: "emissao-crlve",
      icon: FileJson,
      title: "Emissão do CRLV-e",
      description: "Geração do PDF do CRLV-e para o estado selecionado.",
      price: "R$ 20,00",
      link: "../veicular#veicular-emissao-crlve",
    },
  ],
};
export default products;
