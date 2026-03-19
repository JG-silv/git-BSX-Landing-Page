// src/components/tabela_veicular/props.jsx
'use client';

import React from 'react';
import TabelaVeicular from './index.jsx';

export default function VeicularPage() {
  const menuItems = [
    {
      id: 'dados-basico',
      title: 'Consulta Dados do Veículo - Básico',
      description:
        'Consulta básica de dados do veículo: Chassi, Cidade e Estado, Renavam, Ano de fabricação, CF, Combustível e Proprietário.',
      link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=LrwdvKbx06g%3d',
      details: [
        { label: 'Chassi', value: 'Número do chassi do veículo' },
        { label: 'Cidade e Estado', value: 'Local de registro do veículo' },
        { label: 'Renavam', value: 'Código RENAVAM' },
        { label: 'Ano de fabricação', value: 'Ano em que o veículo foi fabricado' },
        { label: 'CF', value: 'Categoria de fabricação' },
        { label: 'Combustível', value: 'Tipo de combustível' },
        { label: 'Proprietário', value: 'Nome do proprietário registrado' },
        { label: 'Preço', value: 'R$ 10,00' },
      ],
    },
    {
      id: 'dados-intermediario',
      title: 'Consulta Dados do Veículo - Intermediário',
      description:
        'Inclui dados básicos mais Modelo, Cor, Capacidade, Cilindradas, Renajud, RFB, Alienação, Roubo e Último licenciamento.',
      link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=LrwdvKbx06g%3d',
      details: [
        { label: 'Modelo', value: 'Modelo do veículo' },
        { label: 'Capacidade', value: 'Capacidade de carga/passageiros' },
        { label: 'Cilindradas', value: 'Cilindradas do motor' },
        { label: 'Renajud', value: 'Registro de ações judiciais' },
        { label: 'RFB', value: 'Restrições da Receita Federal' },
        { label: 'Alienação', value: 'Informações de alienação fiduciária' },
        { label: 'Roubo', value: 'Registro de roubo/furto' },
        { label: 'Último licenciamento', value: 'Data do último licenciamento' },
        { label: 'Preço', value: 'R$ 12,00' },
      ],
    },
    {
      id: 'dados-completo',
      title: 'Consulta Dados do Veículo - Completo',
      description:
        'Todos os dados intermediários mais IPVA, Licenciamento, Débitos detalhados e Gravames.',
      link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=LrwdvKbx06g%3d',
      details: [
        { label: 'IPVA', value: 'Informações de IPVA' },
        { label: 'Licenciamento', value: 'Status de licenciamento' },
        { label: 'Débitos detalhados', value: 'Descrição de todos os débitos' },
        { label: 'Gravames', value: 'Restrição de gravame' },
        { label: 'Preço', value: 'R$ 18,00' },
      ],
    },
     {
      id: 'endereco-telefone',
      title: 'Endereço e Telefone por Placa',
      description:
        'Nome, endereço completo e telefone do proprietário (restrito, exige base legal).',
      link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=LrwdvKbx06g%3d',
      details: [
        { label: 'Nome', value: 'Nome do proprietário' },
        { label: 'Endereço', value: 'Logradouro, número, bairro, CEP' },
        { label: 'Telefone', value: 'Telefone com DDD' },
        { label: 'Preço', value: 'R$ 12,00' },
      ],
    },
     
    {
      id: 'perda-total',
      title: 'Perda Total / Sinistro',
      description:
        'Verifica se o veículo foi declarado como perda total ou envolvido em sinistro grave.',
      link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=LrwdvKbx06g%3d',
      details: [
        { label: 'Status', value: 'Perda Total / Sinistro' },
        { label: 'Detalhes', value: 'Descrição do evento' },
        { label: 'Preço', value: 'R$ 13,00' },
      ],
    },
    {
      id: 'laudo-cautelar',
      title: 'Laudo Cautelar',
      description:
        'Um check-up completo de um veículo usado ou seminovo, para garantir sua procedência, segurança e evitar fraudes e problemas legais.',
      link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=LrwdvKbx06g%3d',
      details: [
        { label: 'Tipo', value: 'Relatorio' },
        { label: 'Abrangência', value: 'Check-up completo' },
        { label: 'Preço', value: 'R$ 42,90' },
      ],
    },
   
    {
      id: 'proprietario-atual',
      title: 'Proprietário Atual',
      description:
        'Dados do atual proprietário do veículo: Nome e CPF/CNPJ.',
      link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=LrwdvKbx06g%3d',
      details: [
        { label: 'Nome', value: 'Nome do atual proprietário' },
        { label: 'CPF/CNPJ', value: 'Documento do proprietário' },
        { label: 'Preço', value: 'R$ 15,00' },
      ],
    },
    {
      id: 'consulta-cnh',
      title: 'Consulta CNH',
      description:
        'Informações sobre CNH: Categoria, Data de Expiração, RENACH, Nome, Bloqueios, Cursos e Observações.',
      link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=LrwdvKbx06g%3d',
      details: [
        { label: 'Categoria', value: 'Categoria da CNH' },
        { label: 'Expiração', value: 'Data de validade' },
        { label: 'RENACH', value: 'Registro Nacional de Habilitação' },
        { label: 'Bloqueios', value: 'Bloqueios administrativos' },
        { label: 'Cursos', value: 'Cursos obrigatórios' },
        { label: 'Observações', value: 'Observações adicionais' },
        { label: 'Preço', value: 'R$ 20,00' },
      ],
    },
    
   
    {
      id: 'leilao-score',
      title: 'LEILÃO SCORE + INDÍCIO + PT',
      description:
        'Probabilidade de leilão, indício de sinistro e score de risco do veículo.',
      link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=LrwdvKbx06g%3d',
      details: [
        { label: 'Probabilidade de Leilão', value: 'Percentual estimado' },
        { label: 'Indício de Sinistro', value: 'Sim ou Não' },
        { label: 'Score de Risco', value: '0–100' },
        { label: 'Preço', value: 'R$ 16,00' },
      ],
    },
    {
      id: 'emissao-crlve',
      title:
        'Emissão do CRLV-e',
      description:
        'Geração do PDF do CRLV-e para o estado selecionado.',
      link: 'https://app.grupobsx.com.br/restrito/painel-controle/consultas/default.aspx?info=LrwdvKbx06g%3d',
      details: [
        { label: 'Formato', value: 'PDF digital' },
        { label: 'Estados', value: 'MG, SP, AP, MA, PA, TO, RN, RR, GO, PR' },
        { label: 'Preço', value: 'R$ 20,00' },
      ],
    },
  ];

  return <TabelaVeicular menuItems={menuItems} />;
}
