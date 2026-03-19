import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    volume,
    cpfCnpj,
    razaoSocial,
    email,
    telefone,
    tipoConsulta,
    porteEmpresa,
    nomeContato,
    detalhes,
  } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: +process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const bossEmail = process.env.BOSS_EMAIL;
  const internalSubject = `Nova solicitação de Relatório Inteligente — ${tipoConsulta}`;
  const internalHtml = `
    <h2>Solicitação de Relatório Inteligente – Grupo BSX</h2>
    <p><strong>Volume de consulta:</strong> ${volume}</p>
    <p><strong>CPF/CNPJ:</strong> ${cpfCnpj}</p>
    <p><strong>Razão social:</strong> ${razaoSocial}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>Tipo de consulta:</strong> ${tipoConsulta}</p>
    <p><strong>Porte da empresa:</strong> ${porteEmpresa}</p>
    <p><strong>Nome do contato:</strong> ${nomeContato}</p>
    <p><strong>Detalhes:</strong> ${detalhes || "—"}</p>
  `;

  // Mensagem formal para o cliente
  const userSubject = "Confirmação de sua solicitação de Relatório Inteligente";
  const userHtml = `
    <h2>Olá ${nomeContato},</h2>
    <p>
      Agradecemos o seu interesse em nossos serviços de <strong>Relatório Inteligente</strong>.
      Recebemos sua solicitação (${tipoConsulta}) e, em breve, um de nossos especialistas entrará em
      contato para entender melhor as necessidades da sua empresa e apresentar a solução ideal.
    </p>
    <p>Enquanto isso, fique à vontade para nos contatar por qualquer um dos canais abaixo:</p>
    <ul>
      <li>📞 Telefone: (21) 98459‑0797</li>
      <li>💬 WhatsApp: (21) 98459‑0797</li>
      <li>📧 E‑mail: <a href="mailto:contato@grupobsx.com.br">contato@grupobsx.com.br</a></li>
    </ul>
    <p>Atenciosamente,<br/>Equipe Grupo BSX</p>
  `;

  try {
    // 1) E‑mail interno para o responsável
    await transporter.sendMail({
      from: `"Site BSX" <${process.env.SMTP_USER}>`,
      to: bossEmail,
      subject: internalSubject,
      html: internalHtml,
    });

    // 2) E‑mail de confirmação para o próprio usuário
    await transporter.sendMail({
      from: `"Grupo BSX" <${process.env.SMTP_USER}>`,
      to: email,
      subject: userSubject,
      html: userHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { error: "Falha ao enviar e‑mail" },
      { status: 500 }
    );
  }
}
