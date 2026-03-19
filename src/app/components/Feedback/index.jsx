import { Card, CardContent } from "./card";
import { Star, Quote } from "lucide-react";
import depoimentos from "./props";
import { inter, sourceSans3 } from "../fonts/fonts.jsx";

const Feedback = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className={`${sourceSans3.className} text-center mb-16`}>
          <h2 className="titulo font text-[#26478D] mb-4">
            O que  
            <span className="font-bold text-[#83227D]"> nossos clientes </span>
            dizem
          </h2>
          
           
          <p className="body-text text-xl text-[#26478D] max-w-3xl mx-auto">
            Confira os depoimentos de quem já transformou suas finanças conosco
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#F5F5F5] hover:bg-blue-100 rounded-lg"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="text-blue-500 mr-2" size={24} />
                  <div className="flex space-x-1">
                    {[...Array(depoimento.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-current"
                        size={16}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {depoimento.name}
                  </h4>
                  <p className="text-sm text-gray-500 py-2">
                    {depoimento.role}
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{depoimento.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
                <div className="mt-12 flex justify-center">
                      <img
                        src="/images/parceiros.png"
                        alt="Parceiros bsx"
                        className="max-w-full h-auto"
                      />
                    </div>

      </div>
    </section>
  );
};

export default Feedback;
