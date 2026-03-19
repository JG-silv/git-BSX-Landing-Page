import { sourceSans3 } from "../fonts/fonts.jsx";

export function ProductCard({ product }) {
  const { icon: Icon, title, description, price, link } = product;

  return (
    <div
      className="
        bg-white rounded-2xl
        p-4 md:p-6
        flex flex-col justify-between
        h-[300px]  /* altura fixa para todos os cards */
      "
    >
      {/* Cabeçalho */}
      <div>
        <div className="flex items-center mb-4">
          <Icon className="text-[#26478D] mr-2 flex-shrink-0" size={24} />
          <h3
            className={`${sourceSans3.className} text-lg font-semibold text-blue-800`}
          >
            {title}
          </h3>
        </div>

        {/* Descrição */}
        <p className="text-gray-600 mb-4">{description}</p>
      </div>

      {/* Rodapé com preço e botão */}
      <div>
        <div className="text-center mb-4">
          <span className="text-xl font-bold text-[#83227D] block">
            {price}
          </span>
          <span className="text-xs text-gray-500 italic">* por consulta</span>
        </div>
<div className="px-6">

        <a
          href={link}
          className="
          block w-full text-center
          bg-[#83227D] text-white font-semibold 
          mb-2 py-2 rounded-lg shadow-md 
          transition-all duration-300 ease-in-out 
          hover:-translate-y-1 hover:scale-105 
          text-base
          "
          >
          Consultar
        </a>
          </div>
      </div>
    </div>
  );
}
