function SectionFive() {

  const faq = [
    {
      q: 'Há contrato de fidelidade mínima?',
      a: 'Não. Trabalhamos com contratos flexíveis, adaptados ao seu volume e necessidades. Sem multas escondidas ou cláusulas abusivas.'
    },
    {
      q: 'Como funciona a integração via API?',
      a: 'Você recebe nossa documentação completa, com exemplos práticos. A média de integração entre nossos clientes é de 3 a 5 dias.'
    },
    {
      q: 'Nós somos confiáveis?',
      a: 'Estamos no mercado há 10 anos, com infraestrutura estável, compliance rígido e milhões de consultas processadas. Nossa base cresce mês a mês.'
    },
    {
      q: 'Posso fazer um teste técnico antes de contratar?',
      a: 'Sim, dependendo da demanda e avaliações prévias podemos disponibilizar login de teste com uma quantidade especifica de consultas.'
    },
    {
      q: 'Terei suporte humano ou só robô?',
      a: 'Você terá um gerente de conta exclusivo para sua empresa, com atendimento via e-mail, telefone e WhatsApp (em horário comercial).'
    }
  ];

  return (
    <section className="py-8 bg-gray-50 reveal" id="faq">
      <div className="max-w-3xl mx-auto px-6">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
          Perguntas Frequentes
        </h2>

        {/* Lista de FAQ */}
        <div className="space-y-4">
          {faq.map((item, i) => (
            <details
              key={i}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100"
            >
              {/* PERGUNTA */}
              <summary className="flex justify-between items-center font-bold text-gray-800 list-none outline-none">
                <span className="text-lg">{item.q}</span>

                {/* Ícone */}
                <span className="flex items-center justify-center w-8 h-8 bg-blue-50 text-[#6b4eff] rounded-full transition-transform duration-300 group-open:rotate-45 group-open:bg-purple-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>
              </summary>

              {/* RESPOSTA */}
              <div className="mt-4 text-gray-600 leading-relaxed text-base border-t border-gray-100 pt-4 animate-fade-in">
                {item.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SectionFive;