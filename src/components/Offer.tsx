import React, { useEffect, useState, useRef } from 'react';
import { Euro, Zap, Building, Award, TrendingUp, Gift } from 'lucide-react';

const Offer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countUp, setCountUp] = useState({ luz: 0, gas: 0, descuento: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const offers = [
    {
      icon: <Zap className="h-10 w-10" />,
      amount: "60",
      symbol: "€",
      title: "por traer tu luz",
      description: "Solo por cambiar tu suministro eléctrico a energía verde",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      target: 60
    },
    {
      icon: <Zap className="h-10 w-10" />,
      amount: "60",
      symbol: "€",
      title: "por traer tu gas",
      description: "Complementa con gas natural y dobla tu ahorro inicial",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      target: 60
    },
    {
      icon: <Building className="h-10 w-10" />,
      amount: "30",
      symbol: "%",
      title: "descuento para pymes",
      description: "Si tienes un negocio, ahorra aún más en tu consumo",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      target: 30
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Animate counters
            const duration = 2000;
            const steps = 60;
            const stepTime = duration / steps;
            
            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              
              setCountUp({
                luz: Math.floor(60 * progress),
                gas: Math.floor(60 * progress),
                descuento: Math.floor(30 * progress)
              });
              
              if (currentStep >= steps) {
                clearInterval(timer);
                setCountUp({ luz: 60, gas: 60, descuento: 30 });
              }
            }, stepTime);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#A8FF00] rounded-full opacity-5 animate-pulse blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#A8FF00] rounded-full opacity-10 animate-pulse blur-2xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#A8FF00] rounded-full opacity-15 animate-pulse blur-xl" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="money-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#A8FF00" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#money-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center space-x-2 bg-[#A8FF00]/20 px-6 py-3 rounded-full mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Gift className="h-6 w-6 text-[#A8FF00]" />
            <span className="text-[#A8FF00] font-bold text-lg">Premio por cambiarte</span>
          </div>

          <h2 className={`text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            💶 <span className="bg-gradient-to-r from-[#A8FF00] to-[#96E600] bg-clip-text text-transparent">Cambiarte tiene premio</span>
          </h2>
          
          <p className={`text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            No solo ahorras en tu factura, también te premiamos por elegir energía limpia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className={`group relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              {/* Card Container */}
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className={`bg-gradient-to-br ${offer.color} w-20 h-20 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                    {offer.icon}
                  </div>
                  <div className={`absolute -inset-4 bg-gradient-to-br ${offer.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}></div>
                </div>

                {/* Amount Display */}
                <div className="relative mb-6">
                  <div className="text-6xl font-black text-[#A8FF00] mb-2 relative">
                    {index === 0 && countUp.luz}
                    {index === 1 && countUp.gas}
                    {index === 2 && countUp.descuento}
                    <span className="text-4xl ml-1">{offer.symbol}</span>
                    
                    {/* Glowing Effect */}
                    <div className="absolute inset-0 text-6xl font-black text-[#A8FF00] blur-sm opacity-50 animate-pulse">
                      {index === 0 && countUp.luz}
                      {index === 1 && countUp.gas}
                      {index === 2 && countUp.descuento}
                      <span className="text-4xl ml-1">{offer.symbol}</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#A8FF00] transition-colors duration-300">
                  {offer.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  {offer.description}
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#A8FF00] transition-all duration-500"></div>
                
                {/* Corner Accent */}
                <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${offer.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              </div>

              {/* Floating Money Icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#A8FF00] rounded-full flex items-center justify-center text-[#1A1A1A] opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-xl">
                <Euro className="h-6 w-6" />
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className={`transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#A8FF00]/20 to-[#96E600]/20 backdrop-blur-sm border border-[#A8FF00]/30 rounded-3xl p-8 text-center max-w-3xl mx-auto relative overflow-hidden">
            
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#A8FF00]/10 to-transparent animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 text-[#A8FF00] mb-4">
                <Award className="h-8 w-8 animate-pulse" />
                <span className="font-bold text-2xl">Garantía Total</span>
                <Award className="h-8 w-8 animate-pulse" />
              </div>
              
              <p className="text-white text-xl leading-relaxed mb-6">
                Energía 100% renovable, con garantía de origen y sin permanencia
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-[#A8FF00] font-semibold">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Sin riesgo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>100% Verde</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Certificado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Savings Calculator */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-12 border border-[#A8FF00]/20">
            <h3 className="text-3xl font-bold text-white mb-6">
              🧮 Calcula tu ahorro total
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-[#A8FF00] mb-2">60€</div>
                <div className="text-gray-300">Premio luz</div>
              </div>
              <div className="text-2xl text-white font-bold flex items-center justify-center">+</div>
              <div>
                <div className="text-4xl font-black text-[#A8FF00] mb-2">60€</div>
                <div className="text-gray-300">Premio gas</div>
              </div>
            </div>
            <div className="border-t border-[#A8FF00]/30 mt-8 pt-8">
              <div className="text-6xl font-black text-[#A8FF00] mb-4">120€</div>
              <div className="text-xl text-white">Total en premios por cambiarte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;