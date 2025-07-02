import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María R.",
      location: "Toledo",
      text: "Me cansé de que me engañaran con la luz. En Wasabi me atienden personas, pago menos y no me lían.",
      rating: 5,
      savings: "87€/año"
    },
    {
      name: "Daniel V.",
      location: "Cuenca",
      text: "Con mi pyme, el 30% de descuento es un ahorro real. En 5 minutos estaba todo hecho.",
      rating: 5,
      savings: "340€/año"
    },
    {
      name: "Carmen L.",
      location: "Madrid",
      text: "Por fin una compañía que habla claro. Sin sorpresas en la factura, energía limpia y trato humano.",
      rating: 5,
      savings: "156€/año"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de familias y empresas ya disfrutan de energía limpia y precios justos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="text-[#A8FF00] mb-4">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#1A1A1A]">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[#A8FF00] font-bold text-lg">
                    -{testimonial.savings}
                  </p>
                  <p className="text-gray-500 text-xs">
                    ahorro anual
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;