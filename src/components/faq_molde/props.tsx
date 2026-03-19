export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// Perguntas Frequentes sobre o Relatório CNPJ
export const faqCnpjData: FaqItem[] = [
  {
    id: "cnpj-1",
    question: "O que vem no Relatório Completo CNPJ?",
    answer: "Score de crédito empresarial, protestos, dívidas, participação societária, ações judiciais, cheques devolvidos, Cadin e informações cadastrais completas.",
  },
  {
    id: "cnpj-2",
    question: "Para quem é indicado o relatório CNPJ?",
    answer: "Empresas que desejam analisar clientes, fornecedores, parceiros ou realizar concessão de crédito com segurança.",
  },
  {
    id: "cnpj-3",
    question: "O relatório mostra os sócios da empresa?",
    answer: "Sim. Mostra o quadro societário completo, incluindo nome, CPF (quando disponível) e percentual de participação de cada sócio.",
  },
  {
    id: "cnpj-4",
    question: "Em quanto tempo o relatório é gerado?",
    answer: "Imediatamente após a compra. A plataforma do Grupo BSX entrega o relatório completo em poucos segundos.",
  },
  {
    id: "cnpj-5",
    question: "As informações do relatório são confiáveis?",
    answer: "Sim. Todos os dados vêm de fontes oficiais como Receita Federal, cartórios, BACEN, Cadin e bureaus de crédito reconhecidos.",
  },
];

// Perguntas Frequentes sobre a Análise de Crédito CPF
export const faqCpfData: FaqItem[] = [
  {
    id: "cpf-1",
    question: "O que é uma análise de crédito de CPF?",
    answer: "É um processo que avalia o histórico financeiro e o comportamento de pagamento de uma pessoa física, utilizando dados como score de crédito, protestos, pendências, cheques devolvidos e registros de inadimplência.",
  },
  {
    id: "cpf-2",
    question: "Quais informações o relatório CPF do Grupo BSX fornece?",
    answer: "O relatório apresenta: score de crédito atualizado, protestos em cartórios, cheques devolvidos (BACEN), dívidas em aberto, ações judiciais, pendências no Cadin e dados cadastrais completos.",
  },
  {
    id: "cpf-3",
    question: "Para que serve a análise de crédito de CPF?",
    answer: "Ela é usada para avaliar o risco de conceder crédito, realizar contratos de aluguel, prestar serviços, vender a prazo ou contratar colaboradores com responsabilidade financeira.",
  },
  {
    id: "cpf-4",
    question: "Quem pode consultar o CPF de outra pessoa?",
    answer: "Empresas, consultores e autônomos que tenham uma finalidade legítima e justificada, como análise de crédito, podem realizar a consulta, conforme a LGPD.",
  },
  {
    id: "cpf-5",
    question: "A consulta de CPF no Grupo BSX é confiável?",
    answer: "Sim. O Grupo BSX utiliza dados oficiais e seguros de fontes como cartórios, bureaus de crédito, Banco Central e Cadin. A plataforma é criptografada e 100% online.",
  },
  {
    id: "cpf-6",
    question: "O score de crédito interfere diretamente nas decisões?",
    answer: "Sim. O score indica a probabilidade de inadimplência e é um dos principais critérios utilizados por bancos, financeiras e empresas para aprovar ou negar crédito.",
  },
];

// Um array para exibir todas as perguntas juntas
export const allFaqData: FaqItem[] = [...faqCnpjData, ...faqCpfData];
