import React, { useEffect, useState, useRef } from 'react';
import { Check, Zap, Users, FileText, Lightbulb, Eye } from 'lucide-react';

const Benefits = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Energía verde de verdad",
      description: "100% renovable con garantía de origen certificada",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Precios indexados",
      description: "Pagas lo que vale, ni un euro más. Sin sorpresas ocultas",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: "Sin letra pequeña",
      description: "Contratos claros y transparentes. Lo que ves es lo que pagas",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Atención humana",
      description: "Personas reales que te entienden, no robots programados",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation of cards
            benefits.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="beneficios" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23A8FF00%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#A8FF00] rounded-full opacity-10 animate-pulse blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#A8FF00] rounded-full opacity-5 animate-pulse blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#A8FF00]/10 px-6 py-3 rounded-full mb-6">
            <Eye className="h-5 w-5 text-[#A8FF00]" />
            <span className="text-[#A8FF00] font-semibold">La realidad sobre tu factura</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#1A1A1A] mb-8 leading-tight">
            La luz no tiene por qué ser{' '}
            <span className="relative inline-block">
              <span className="text-red-500 line-through decoration-4 decoration-red-500">un lío</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-red-500 opacity-30 rounded-full"></div>
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-gray-600 leading-relaxed mb-8">
              Llevas años pagando facturas que no entiendes, con subidas que nadie te avisa, 
              hablando con máquinas y sin saber qué estás pagando.
            </p>
            <div className="bg-gradient-to-r from-[#A8FF00]/20 to-[#96E600]/20 p-6 rounded-2xl border border-[#A8FF00]/30">
              <p className="text-xl font-semibold text-[#1A1A1A]">
                🔥 Es hora de que eso cambie para siempre
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`group relative transform transition-all duration-1000 ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-20 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Background with Gradient */}
              <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${benefit.bgColor} to-white border border-gray-100 hover:border-[#A8FF00] transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 overflow-hidden`}>
                
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon with Animated Background */}
                <div className="relative mb-6">
                  <div className={`bg-gradient-to-br ${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-br ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#1A1A1A] group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A8FF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#A8FF00] transition-all duration-500"></div>
              </div>

              {/* Floating Icon Animation */}
              <div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-lg`}>
                <Zap className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#A8FF00]/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                ¿Listo para dejar de ser estafado?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Miles de familias ya han dado el paso. Únete a la revolución energética.
              </p>
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#A8FF00] text-[#1A1A1A] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#96E600] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Sí, quiero energía honesta 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;