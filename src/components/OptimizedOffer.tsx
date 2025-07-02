import React, { useEffect, useState, useRef } from 'react';
import { Euro, Zap, Building, Award, TrendingUp, Gift } from 'lucide-react';

const OptimizedOffer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const offers = [
    {
      icon: <Zap className="h-12 w-12" />,
      amount: "60",
      symbol: "€",
      title: "por traer tu luz",
      description: "Incentivo por cambiar tu suministro eléctrico a energía 100% renovable certificada",
      color: "from-yellow-400 to-orange-500",
      target: 60
    },
    {
      icon: <Zap className="h-12 w-12" />,
      amount: "60",
      symbol: "€",
      title: "por traer tu gas",
      description: "Incentivo adicional por contratar también nuestro suministro de gas natural",
      color: "from-blue-400 to-cyan-500",
      target: 60
    },
    {
      icon: <Building className="h-12 w-12" />,
      amount: "30",
      symbol: "%",
      title: "de descuento en consumo si tienes un negocio",
      description: "Tarifa especial para pequeñas y medianas empresas con consumo optimizado",
      color: "from-purple-400 to-pink-500",
      target: 30
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="oferta"
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]"
    >
      {/* Professional Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A8FF00]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#A8FF00]/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header exacto solicitado */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-4 bg-[#A8FF00]/20 backdrop-blur-sm px-10 py-5 rounded-full mb-10 border border-[#A8FF00]/30">
            <Gift className="h-8 w-8 text-[#A8FF00]" />
            <span className="text-[#A8FF00] font-black text-2xl">Nuestra oferta</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-12 leading-tight">
            💶{' '}
            <span className="bg-gradient-to-r from-[#A8FF00] to-[#96E600] bg-clip-text text-transparent">
              Cambiarte tiene premio
            </span>
          </h2>
        </div>

        {/* Offers Grid con textos exactos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className={`group relative transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 text-center hover:border-[#A8FF00] transition-all duration-500 hover:shadow-2xl hover:shadow-[#A8FF00]/20 hover:-translate-y-4 overflow-hidden h-full">
                
                {/* Icon Container */}
                <div className="relative mb-10">
                  <div className={`bg-gradient-to-br ${offer.color} w-24 h-24 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {offer.icon}
                  </div>
                </div>

                {/* Amount Display */}
                <div className="relative mb-8">
                  <div className="text-7xl font-black text-[#A8FF00] mb-4">
                    {offer.amount}
                    <span className="text-5xl ml-2">{offer.symbol}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-[#A8FF00] transition-colors duration-300">
                  {offer.title}
                </h3>
                
                <p className="text-gray-300 text-xl leading-relaxed group-hover:text-white transition-colors duration-300">
                  {offer.description}
                </p>

                {/* Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A8FF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>

              {/* Floating Money Icon */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-[#A8FF00] to-[#96E600] rounded-full flex items-center justify-center text-[#1A1A1A] opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                <Euro className="h-10 w-10" />
              </div>
            </div>
          ))}
        </div>

        {/* Nota exacta solicitada */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-[#A8FF00]/20 via-[#96E600]/20 to-[#A8FF00]/20 backdrop-blur-sm border border-[#A8FF00]/30 rounded-3xl p-8 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-white text-lg leading-relaxed">
                (Energía 100% renovable, con garantía de origen y sin permanencia)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedOffer;