const corRoxa = "#83227D";
const corAzul = "#26478D";

export const dadosCpf = {
  titulo: "Escolha um relatório",
  subtitulo:
    "Analise o CPF de clientes, parceiros ou fornecedores e tome decisões de crédito com segurança e agilidade.",
  planos: [
    {
      id: "cpf-basico",
      link: "https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=fEssV%2b9o%2fhc%3d",
      title: "Relatório básico",
      price: "12,00",
      features: [
        "Identificação Cadastral",
        "Score de Crédito",
        "Dívidas (bancos e empresas)",
        "Cheques devolvidos (CCF)",
      ],
      isRecommended: false,
      theme: {
        highlightClass: "",
        buttonVariant: "secondary",
        priceColor: corAzul,
      },
    },
    {
      id: "cpf-intermediario ",
      link: "https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=fEssV%2b9o%2fhc%3d",
      title: "Relatório Intermediário",
      price: "25,00",
      features: [
        "Identificação Cadastral",
        "Score de Crédito",
        "Dívidas (bancos e empresas)",
        "Cheques devolvidos (CCF)",
        "Protestos em cartórios",
        "Participação Societária",
        "Passagens Comerciais",
      ],
      isRecommended: true,
      theme: {
        highlightClass: "bg-blue-100/50 border-t-4 border-t-blue-500 shadow-inner",
        buttonVariant: "default",
        priceColor: corRoxa,
      },
    },
    {
      id: "cpf-avancado",
      link: "https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=fEssV%2b9o%2fhc%3d",
      title: "Relatório Avançado",
      price: "42,00",
      features: [
        "Identificação Cadastral",
        "Endereço",
        "Telefones e Contatos",
        "Score de Crédito",
        "Renda Estimada",
        "Dívidas (bancos e empresas)",
        "Cheques devolvidos (CCF)",
        "Protestos em cartórios",
        "Ações Judiciais",
        "Participação Societária",
        "Participação em Falências",
        "Passagens Comerciais",
      ],
      isRecommended: false,
      theme: {
        highlightClass: "",
        buttonVariant: "secondary",
        priceColor: corAzul,
      },
    },
  ],
  features: [
    {
      name: "Identificação Cadastral",
      description:
        "Confirmação de dados como nome completo, data de nascimento e situação do CPF na Receita Federal.",
    },
    {
      name: "Endereço",
      description:
        "Apresenta o endereço de correspondência mais recente vinculado ao CPF consultado.",
    },
    {
      name: "Telefones e Contatos",
      description:
        "Lista os números de telefone (fixo e celular) associados ao documento.",
    },
    {
      name: "Score de Crédito",
      description:
        "Pontuação de crédito que indica a probabilidade de o consumidor pagar suas contas em dia.",
    },
    {
      name: "Renda Estimada",
      description:
        "Cálculo da provável faixa de renda mensal da pessoa, baseado em modelos estatísticos.",
    },
    {
      name: "Dívidas (bancos e empresas)",
      description:
        "Detalha pendências financeiras e dívidas vencidas registradas em bureaus de crédito.",
    },
    {
      name: "Cheques devolvidos (CCF)",
      description:
        "Informa sobre a inclusão do CPF no Cadastro de Emitentes de Cheques sem Fundos.",
    },
    {
      name: "Protestos em cartórios",
      description:
        "Verifica a existência de títulos protestados em cartórios de todo o país.",
    },
    {
      name: "Ações Judiciais",
      description:
        "Consulta a existência de ações cíveis, como de busca e apreensão, execuções e outras.",
    },
    {
      name: "Participação Societária",
      description:
        "Mostra se o CPF consultado faz parte do quadro de sócios ou administradores de alguma empresa.",
    },
    {
      name: "Participação em Falências",
      description:
        "Indica se a pessoa esteve associada a empresas que decretaram falência ou recuperação judicial.",
    },
    {
      name: "Passagens Comerciais",
      description:
        "Informa sobre registros de compras ou movimentações comerciais relevantes associadas ao CPF.",
    },
  ],
};

export const dadosCnpj = {
  titulo: "Escolha um relatório",
  subtitulo:
    "Avalie a saúde financeira de empresas, verifique o quadro societário e minimize riscos em suas negociações B2B.",
  planos: [
    {
      id: "cnpj-basico",
      link: "https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=ccQyrz5WFoQ%3d",
      title: "Relatório básico",
      price: "14,00",
      features: [
        "Identificação Cadastral",
        "Score de Crédito",
        "Dívidas (bancos e empresas)",
        "Cheques devolvidos (CCF)",
      ],
      isRecommended: false,
      theme: {
        highlightClass: "",
        buttonVariant: "secondary",
        priceColor: corAzul,
      },
    },
    {
      id: "cnpj-intermediario",
      link: "https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=ccQyrz5WFoQ%3d",
      title: "Relatório Intermediário ",
      price: "29,00",
      features: [
        "Identificação Cadastral",
        "Score de Crédito",
        "Dívidas (bancos e empresas)",
        "Cheques devolvidos (CCF)",
        "Protestos em cartórios",
        "Quadro Societário e Administradores",
        "Passagens Comerciais",
      ],
      isRecommended: true,
      theme: {
        highlightClass: "bg-blue-100/50 border-t-4 border-t-blue-500 shadow-inner",
        buttonVariant: "default",
        priceColor: corRoxa,
      },
    },
    {
      id: "cnpj-avancado",
      link: "https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=ccQyrz5WFoQ%3d",
      title: "Relatório Avançado",
      price: "58,00",
      features: [
        "Identificação Cadastral",
        "Endereço e Contatos",
        "CNAE e Atividade Econômica",
        "Score de Crédito",
        "Faturamento Estimado",
        "Limite de Crédito Estimado",
        "Dívidas (bancos e empresas)",
        "Cheques devolvidos (CCF)",
        "Protestos em cartórios",
        "Ações Judiciais",
        "Recuperação Judicial e Falência",
        "Quadro Societário e Administradores",
        "Passagens Comerciais",
      ],
      isRecommended: false,
      theme: {
        highlightClass: "bg-[#f5f5f5]",
        buttonVariant: "secondary",
        priceColor: corAzul,
      },
    },
  ],
  features: [
    {
      name: "Identificação Cadastral",
      description:
        "Validação de CNPJ, razão social, nome fantasia e situação na Receita Federal.",
    },
    {
      name: "Endereço e Contatos",
      description:
        "Confirmação do endereço principal e dos telefones associados ao CNPJ.",
    },
    {
      name: "CNAE e Atividade Econômica",
      description:
        "Informa a Classificação Nacional de Atividades Econômicas da empresa.",
    },
    {
      name: "Score de Crédito",
      description:
        "Pontuação que indica a saúde financeira e a probabilidade de a empresa honrar seus compromissos.",
    },
    {
      name: "Faturamento Estimado",
      description:
        "Estimativa do faturamento anual da empresa, baseada em modelos estatísticos.",
    },
    {
      name: "Limite de Crédito Estimado",
      description:
        "Sugestão de limite de crédito para transações comerciais com a empresa consultada.",
    },
    {
      name: "Dívidas (bancos e empresas)",
      description:
        "Detalha pendências financeiras e dívidas vencidas da empresa em bureaus de crédito.",
    },
    {
      name: "Cheques devolvidos (CCF)",
      description:
        "Informa se o CNPJ está no Cadastro de Emitentes de Cheques sem Fundos.",
    },
    {
      name: "Protestos em cartórios",
      description:
        "Verifica a existência de títulos protestados em nome da empresa em todo o país.",
    },
    {
      name: "Ações Judiciais",
      description:
        "Consulta a existência de ações judiciais (cíveis, fiscais, trabalhistas) contra a empresa.",
    },
    {
      name: "Recuperação Judicial e Falência",
      description:
        "Indica se a empresa está ou esteve em processo de recuperação judicial ou falência.",
    },
    {
      name: "Quadro Societário e Administradores",
      description:
        "Apresenta o quadro completo de sócios e administradores, capital social e participações.",
    },
    {
      name: "Passagens Comerciais",
      description:
        "Informa sobre registros de compras ou movimentações comerciais relevantes associadas ao CNPJ.",
    },
  ],
};



