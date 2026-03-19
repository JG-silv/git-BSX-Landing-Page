'use client';

import React from 'react';
import TabelaEspeciais from './index.jsx';

export const menuItems = [
  {
    id: 'relatorio-juridico–PF',
    title: 'Relatório Jurídico – PF',
    description:
      'Evite surpresas desagradáveis ao fechar contratos ou realizar transações. Obtenha um panorama completo sobre processos judiciais vinculados a um CPF.',
    link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=4ahp5z2OHMU%3d',
    details: [
      {
        label: 'Alerta de quantidade de ações judiciais localizadas',
        value:
          'Um resumo quantitativo que informa o número total de processos judiciais encontrados para o documento consultado.',
      },
      {
        label: 'Natureza da ação',
        value:
          'Classifica o processo quanto à sua área de origem, como cível, penal, trabalhista, execução fiscal, entre outras.',
      },
      {
        label: 'Detalhamento da ocorrência',
        value:
          'Descreve o motivo ou o assunto principal da ação judicial, como cobrança, danos morais, falsidade ideológica, etc.',
      },
      {
        label: 'Tipo da ação',
        value:
          'Identifica a categoria processual, como Inquérito Policial, Processo Judicial, Procedimento Comum, etc.',
      },
      {
        label: 'Número completo do processo (CNJ)',
        value:
          'Apresenta o número único do processo no formato padronizado pelo Conselho Nacional de Justiça (CNJ).',
      },
      {
        label: 'Foro, comarca e vara de tramitação',
        value:
          'Informa a localização exata onde o processo está sendo julgado, incluindo o tribunal, a cidade e a vara específica.',
      },
      {
        label: 'Data de distribuição da ação',
        value:
          'Mostra a data exata em que o processo foi iniciado e registrado oficialmente no sistema judiciário.',
      },
      {
        label: 'Valor atribuído à causa',
        value:
          'O valor monetário que a parte autora da ação estima para a sua reivindicação. Disponível quando informado no processo.',
      },
      { label: 'Preço', value: 'R$ 18,00' },
    ],
  },
  {
    id: 'radar-endividamento-PF',
    title: 'Radar de Endividamento-PF',
    description:
      'Visão completa das dívidas e operações de crédito vinculadas ao CPF.',
    link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=4ahp5z2OHMU%3d',
    details: [
      {
        label: 'Todas as operações de crédito registradas em nome do CPF',
        value:
          'Todas as operações de crédito registradas em nome do documento consultado.',
      },
      {
        label: 'Histórico de financiamentos, empréstimos, carnês e outras modalidades ativas',
        value:
          'Histórico de financiamentos, empréstimos, carnês e outras modalidades ativas.',
      },
      {
        label: 'Volume total de endividamento declarado pelas instituições financeiras',
        value:
          'Volume total de endividamento declarado pelas instituições financeiras.',
      },
      {
        label: 'Dados atualizados em tempo real via base do Cadastro Positivo',
        value:
          'Dados atualizados em tempo real via base do Cadastro Positivo.',
      },
      { label: 'Preço', value: 'R$ 20,00' },
    ],
  },
  {
    id: 'cnd-express-PF',
    title: 'CND Express-PF',
    description:
      'Verifique em segundos se o CPF possui Certidão Negativa de Débitos (CND) nas bases públicas.',
    link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=4ahp5z2OHMU%3d',
    details: [
      
      {
       label: "Verifique em segundos se o CPF possui Certidão Negativa de Débitos (CND) nas bases públicas."
      },
      
      {

        label: 'Confirma pendências fiscais, previdenciárias ou tributárias',
        value:
          'Confirma se há pendências fiscais, previdenciárias ou tributárias.',
      },
      { label: 'Preço', value: 'R$ 8,00' },
    ],
  },
  {
    id: 'relatorio-juridico-pj',
    title: 'Relatório Jurídico – PJ',
    description:
      'Evite surpresas desagradáveis ao fechar contratos ou realizar transações. Obtenha um panorama completo sobre processos judiciais vinculados a um CNPJ.',
    link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=4ahp5z2OHMU%3d',
    details: [
      {
        label: 'Alerta de quantidade de ações judiciais',
        value:
          'Um resumo quantitativo que informa o número total de processos judiciais encontrados para o documento consultado.',
      },
      {
        label: 'Natureza da ação',
        value:
          'Classifica o processo quanto à sua área de origem, como cível, penal, trabalhista, execução fiscal, entre outras.',
      },
      {
        label: 'Tipo da ação (rito)',
        value:
          'Para PJ, especifica o rito processual seguido, como ordinário, sumaríssimo ou especial, que define a complexidade e velocidade do processo.',
      },
      {
        label: 'Número completo do processo (CNJ)',
        value:
          'Apresenta o número único do processo no formato padronizado pelo Conselho Nacional de Justiça (CNJ).',
      },
      {
        label: 'Foro, comarca e vara de tramitação',
        value:
          'Informa a localização exata onde o processo está sendo julgado, incluindo o tribunal, a cidade e a vara específica.',
      },
      {
        label: 'Data de distribuição do processo',
        value:
          'Mostra a data exata em que o processo foi iniciado e registrado oficialmente no sistema judiciário.',
      },
      {
        label: 'Valor da causa',
        value:
          'O valor monetário que a parte autora da ação estima para a sua reivindicação. Disponível quando informado no processo.',
      },
      {
        label: 'Nome da empresa como parte requerida',
        value:
          'Confirma que o CNPJ consultado está sendo processado (parte requerida ou ré) na ação.',
      },
      { label: 'Preço', value: 'R$ 18,00' },
    ],
  },
  {
    id: 'radar-endividamento-PJ',
    title: 'Radar de Endividamento-PJ',
    description:
      'Visão completa das dívidas e operações de crédito vinculadas ao CNPJ.',
    link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=4ahp5z2OHMU%3d',
    details: [
      {
        label: 'Todas as operações de crédito registradas em nome do CNPJ',
        value:
          'Todas as operações de crédito registradas em nome do documento consultado.',
      },
      {
        label: 'Histórico de financiamentos, empréstimos, carnês e outras modalidades ativas',
        value:
          'Histórico de financiamentos, empréstimos, carnês e outras modalidades ativas.',
      },
      {
        label: 'Volume total de endividamento declarado pelas instituições financeiras',
        value:
          'Volume total de endividamento declarado pelas instituições financeiras.',
      },
      {
        label: 'Dados atualizados em tempo real via base do Cadastro Positivo',
        value:
          'Dados atualizados em tempo real via base do Cadastro Positivo.',
      },
      { label: 'Preço', value: 'R$ 20,00' },
    ],
  },
  {
    id: 'cnd-express-PJ',
    title: 'CND Express-PJ',
    description:
      'Verifique em segundos se o CNPJ possui Certidão Negativa de Débitos (CND) nas bases públicas.',
    link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=4ahp5z2OHMU%3d',
    details: [
      
      {
       label: "Verifique em segundos se o CPF ou CNPJ possui Certidão Negativa de Débitos (CND) nas bases públicas."
      },
      
      {

        label: 'Confirma pendências fiscais, previdenciárias ou tributárias',
        value:
          'Confirma se há pendências fiscais, previdenciárias ou tributárias.',
      },
      { label: 'Preço', value: 'R$ 8,00' },
    ],
  },
];

export default function ConsultasEspeciaisPage() {
  return <TabelaEspeciais menuItems={menuItems} />;
}
