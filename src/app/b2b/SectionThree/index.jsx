"use client"
import React from 'react';
import Button from "../../components/b2b_components/button";
import {
    Zap,
    Users,
    FileText,
    Layers,
    ShieldCheck,
    ChevronRight
} from 'lucide-react';

const features = [
    {
        title: "API Rápida e Segura",
        desc: "Integre nossa API RESTful em poucos dias. Documentação clara, exemplos práticos e time técnico à disposição.",
        icon: <Zap className="h-6 w-6 text-white" />
    },
    {
        title: "Painel com Gestão de Equipes",
        desc: "Adicione usuários, controle permissões e acesse o histórico de uso em tempo real para auditoria completa.",
        icon: <Users className="h-6 w-6 text-white" />
    },
    {
        title: "Dados Completos",
        desc: "Score, dívidas, protestos, restrições e cheques sem fundo. Tudo que você precisa para aprovar com segurança.",
        icon: <FileText className="h-6 w-6 text-white" />
    },
    {
        title: "Relatórios em Lote",
        desc: "Otimize o tempo do seu time. Consulte centenas de documentos de uma só vez e exporte tudo com facilidade.",
        icon: <Layers className="h-6 w-6 text-white" />
    },
    {
        title: "Uptime de 99,9%",
        desc: "Infraestrutura robusta com segurança empresarial. Seus dados e operações nunca param.",
        icon: <ShieldCheck className="h-6 w-6 text-white" />
    }
];

function SectionThree() {

    const phoneNumber = "5521994590797";
    const defaultMessage = "Olá! Gostaria de saber mais sobre a BSX";

    // Link para WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

    const handleOpenWhatsApp = () => {
        window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                        Criado para empresas que mantem um fluxo constante de consultas
                    </h2>
                    <p className="text-xl text-gray-500">
                        Você precisa de mais do que uma simples consulta. Precisa de performance, visibilidade e controle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-gray-150 shadow-md shadow-[#4a36b2] rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 group">
                            <div className="w-12 h-12 bg-[#4a36b2] rounded-lg flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}

                    {/* Card CTA dentro do Grid */}
                    <div className="bg-[#4a36b2] rounded-xl p-8 flex flex-col justify-center items-center text-center text-white">
                        <h3 className="text-xl font-bold mb-3">Pronto para escalar?</h3>
                        <p className="text-blue-100 mb-6">Fale com nossos especialistas e comece hoje.</p>
                        <Button
                            onClick={handleOpenWhatsApp}
                            id="BtnConsultor" variant="white" className="cursor-pointer w-full">
                            Falar com Consultor <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionThree