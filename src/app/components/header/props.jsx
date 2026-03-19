/* importa o link do linkedin */
const menuData = {
  services: {
    mainLabel: "Serviços", 
    type: "mega",
    items: [
      {
        category: "Consultas",
        items: [
          { label: "CPF", href: "../cpf", subtitle: "Análise de pessoa física" },
          { label: "CNPJ", href: "../cnpj", subtitle: "Análise de pessoa jurídica" },
          { label: "Veicular", href: "/veicular", subtitle: "Consulta de veículos" },
          { label: "Especiais", href: "../especiais", subtitle: "Consultas personalizadas" },
        ],
      },
      {
        category: "Créditos",
        items: [
          { label: "Comprar crédito", href: "../comprar_creditos", subtitle: "Adquira créditos para consultas e relatórios" },
        ],
      },
      {
        category: "Pacotes",
        items: [{ label: "Pacotes inteligentes", href: "../relatorios_inteligentes", subtitle: "Combos de relatórios" }],
      },
    ],
  },
  news: {
    mainLabel: "Novidades",
    type: "mega",
    items: [
      {
        category: "Conhecimento",
        items: [
          { label: "Cases de sucesso", href: "../sobre_nos", subtitle: "Veja nossos resultados" },
          { label: "FAQ", href: "../faq", subtitle: "Perguntas frequentes" },
        ],
      },
      /* importa o link do linkedin */
      {
        category: "Carreira",
        items: [{ label: "Trabalhe conosco", href: "https://www.linkedin.com/company/grupobsx/", subtitle: "Faça parte da equipe" }],
      },
    ],
  },
};

export default menuData;