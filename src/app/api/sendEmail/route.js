import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { service, fullName, corporateEmail, cellPhone, companyName, companySize } =
    await request.json();

  // Configuração SMTP (defina em .env.local)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: +process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true", // true p/ 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Monta o e-mail
  const bossEmail = process.env.BOSS_EMAIL;
  const subject = `Nova solicitação de contato — ${service}`;
  const html = `
    <h2>Formulário de Contato – Grupo BSX</h2>
    <p><strong>Serviço:</strong> ${service}</p>
    <p><strong>Nome completo:</strong> ${fullName}</p>
    <p><strong>E-mail corporativo:</strong> ${corporateEmail}</p>
    <p><strong>Celular:</strong> ${cellPhone}</p>
    <p><strong>Empresa:</strong> ${companyName}</p>
    <p><strong>Tamanho da empresa:</strong> ${companySize}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Site BSX" <${process.env.SMTP_USER}>`,
      to: bossEmail,
      subject,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ error: "Falha ao enviar e-mail" }, { status: 500 });
  }
}
