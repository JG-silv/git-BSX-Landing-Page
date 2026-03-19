// src/components/cadastro/steps.js

export const props = [
  {
    title: 'Nome/Razão Social',
    description:
      null, // será decidido em tempo de execução com base em typePessoa
  },
  {
    titleKey: 'documento', // 'CNPJ' ou 'CPF' dinamicamente
    descriptionKey: 'documentoDesc',
  },
  {
    title: 'insira o e-mail',
    description:
      'Insira um endereço de e-mail válido que será utilizado para a criação e depois o repita no campo seguinte. O e-mail será usado para enviar notificações e para o acesso ao sistema.',
  },

  {
    title: 'Telefone/Whatsapp',
    description:
      'Insira o número de telefone ou WhatsApp com o código de área (DDD). Exemplo: (11) 91234-5678.',
  },
  {
    title: 'Continuar',
    description:
      'Após preencher o telefone/WhatsApp, clique em “Continuar” para ser direcionado à página de finalização e criação das credenciais de acesso.',
  },
  {
    title: 'Acesso e Recarga por PIX',
    description:
      'Uma vez criadas suas credenciais, você pode acessar o sistema e realizar a recarga por PIX. Escolha o valor, gere o QR Code, efetue o pagamento e o crédito estará disponível em segundos.',
  },
];
