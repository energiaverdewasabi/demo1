import React, { useEffect, useState, useRef } from 'react';
import { Star, Quote, TrendingUp } from 'lucide-react';

const OptimizedTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "María R.",
      location: "Toledo",
      text: "Me cansé de que me engañaran con la luz. En Wasabi me atienden personas, pago menos y no me lían.",
      rating: 5,
      savings: "87€/año",
      avatar: "M",
      color: "from-pink-400 to-rose-500"
    },
    {
      name: "Daniel V.",
      location: "Cuenca",
      text: "Con mi pyme, el 30% de descuento es un ahorro real. En 5 minutos estaba todo hecho.",
      rating: 5,
      savings: "340€/año",
      avatar: "D",
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Carmen L.",
      location: "Madrid",
      text: "Por fin una compañía que habla claro. Sin sorpresas en la factura, energía limpia y trato humano.",
      rating: 5,
      savings: "156€/año",
      avatar: "C",
      color: "from-purple-400 to-pink-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="testimonios"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] min-h-screen flex items-center"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-48 h-48 sm:w-64 sm:h-64 bg-[#A8FF00]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#A8FF00]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header exacto solicitado */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-3 bg-[#A8FF00]/20 backdrop-blur-sm px-8 py-4 rounded-full mb-8 border border-[#A8FF00]/30">
            <Quote className="h-6 w-6 text-[#A8FF00]" />
            <span className="text-[#A8FF00] font-bold text-xl">Testimonios</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight px-2">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Testimonials Grid con textos exactos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                minHeight: '350px'
              }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20 hover:border-[#A8FF00] relative overflow-hidden h-full group-hover:-translate-y-2 flex flex-col justify-between">
                
                {/* Quote Icon */}
                <div className="text-[#A8FF00] mb-4 sm:mb-6">
                  <Quote className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4 sm:mb-6">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <div className="flex-grow">
                  <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 italic text-base sm:text-lg">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-white text-base sm:text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-sm sm:text-base">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#A8FF00] font-bold text-lg sm:text-xl">
                      -{testimonial.savings}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      ahorro anual
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A8FF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl" />
              </div>

              {/* Floating Badge - Only on larger screens */}
              <div className="hidden lg:block absolute -top-4 -right-4 bg-gradient-to-r from-[#A8FF00] to-[#96E600] text-[#1A1A1A] px-3 py-2 rounded-full font-bold text-sm opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-xl">
                <TrendingUp className="h-4 w-4 inline mr-1" />
                Ahorro real
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptimizedTestimonials;