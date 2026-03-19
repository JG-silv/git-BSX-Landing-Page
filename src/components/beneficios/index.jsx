import { poppins, sourceSans3 } from "../../app/components/fonts/fonts.jsx";
import { benefits } from "../../components/comprar_creditos/props.jsx";
import { CheckCircle } from "lucide-react";

export default function Beneficios() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          {/* Título com Poppins */}
          <h2
            className={`titulo ${sourceSans3.className} text-2xl md:text-5xl font text-center text-[#26478D] mb-12`}
          >
            Vantagens de comprar
            <span className="font-extrabold text-[#83227D]"> conosco</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-blue-200 to-[#f5f5f5] rounded-lg"
            >
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              {/* Título com Poppins */}
              <h3
                className={`${poppins.className} text-lg font-medium text-center text-blue-600`}
              >
                {benefit.title}
              </h3>
              {/* Texto com Source Sans 3 */}
              <p className={`text-gray-600 text-sm ${sourceSans3.className}`}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
