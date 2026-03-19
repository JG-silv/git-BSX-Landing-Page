"use client";
import React from "react";

import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { SiInstagram, SiLinkedin, SiFacebook, SiYoutube } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0 bg-gray-900 text-white p-4">
      {/* BANNER DE AJUDA */}
      <div className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="font text-4xl font-bold mb-4">
              Não sabe qual consulta é ideal?
            </h3>
            <p className="text-blue-100">
              Fale com um consultor agora pelo WhatsApp e receba orientação
              personalizada.
            </p>
          </div>
          <a
            href="https://api.whatsapp.com/send?l=pt_BR&phone=5521994590797"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#B131AC] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-200 transition-colors mr-50 mt-10 mx-auto whitespace-nowrap"
          >
            <MessageCircle size={20} /> Falar com consultor
          </a>
        </div>
      </div>

      {/* SEÇÃO DE INFORMAÇÕES */}
      <div className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1° coluna */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              BSX - Soluções Financeiras
            </h4>
            <p className="text-gray-300 mb-2">
              Segunda a sexta das 8:00 às 18:00
              <br />
              Sábado das 8:00 às 12:00
            </p>
            <p className="text-gray-300">
              A BSX – Soluções Financeiras apresenta dados atualizados de todo o
              território nacional.
            </p>
          </div>

          {/* 2° coluna */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contatos e localizações
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} /> (21) 99459-0797
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} /> WhatsApp: (21) 99459-0797
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> contato@grupobsx.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Av. Rio Branco nº 26 – Sobreloja, Centro –
                RJ
              </li>
            </ul>
          </div>

          {/* 3° coluna */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Principal</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="../comprar_creditos" className="hover:text-white transition-colors">
                  Comprar Créditos
                </a>
              </li>
              <li>
                <a href="../relatorios_inteligentes" className="hover:text-white transition-colors">
                  Pacotes Inteligentes
                </a>
              </li>
              <li>
                <a href="https://app.grupobsx.com.br/Default.aspx?ReturnUrl=%2frestrito%2fpainel-controle%2fconsultas%2fdefault.aspx%3finfo%3dfEssV%252b9o%252fhc%253d&info=fEssV%2b9o%2fhc%3d" className="hover:text-white transition-colors">
                  Consultas
                </a>
              </li>
              <li>
                <a href="../sobre_nos" className="hover:text-white transition-colors">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="../faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SEÇÃO DE DIREITOS AUTORAIS E ÍCONES */}
      <div className="bg-gray-800 py-6">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Texto de Direitos Autorais */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Grupo BSX. Todos os direitos
            reservados.
          </p>

          {/* Ícones de Redes Sociais */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/grupobsx_oficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SiInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/grupobsx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SiLinkedin size={20} />
            </a>
            {/* ICONE FACEBOOK
            <a
              href="https://facebook.com/sua-pagina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SiFacebook size={20} />
            </a>
*/}
            <a
              href="https://www.youtube.com/@GrupoBSX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SiYoutube size={20} />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;