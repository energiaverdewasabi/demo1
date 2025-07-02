import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Leaf, TrendingDown, Award, Zap, Sparkles, Star } from 'lucide-react';

const OptimizedHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]">
      {/* Fondo más claro y dinámico */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A8FF00]/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#A8FF00]/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#A8FF00]/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}} />
        
        {/* Partículas de energía más visibles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#A8FF00] rounded-full animate-ping opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* 🚀 LOGO CON FONDO BLANCO ABSOLUTO Y MÁXIMO CONTRASTE 🚀 */}
          <div className={`mb-12 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative inline-block group">
              
              {/* Container principal con fondo BLANCO ABSOLUTO */}
              <div className="relative bg-white p-16 rounded-3xl shadow-2xl hover:shadow-[#A8FF00]/70 transition-all duration-700 hover:scale-115 overflow-hidden transform-gpu border-4 border-[#A8FF00]">
                
                {/* 🌟 EFECTO DE BRILLO ULTRA ANIMADO */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A8FF00]/40 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[300%] transition-transform duration-1500 ease-out"></div>
                
                {/* 💫 PARTÍCULAS FLOTANTES MEJORADAS */}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-[#A8FF00] rounded-full opacity-0 group-hover:opacity-100 animate-ping"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${0.5 + Math.random()}s`
                    }}
                  />
                ))}
                
                {/* ⚡ RAYOS ELÉCTRICOS ULTRA ANIMADOS */}
                <div className="absolute -top-4 -left-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce">
                  <Zap className="h-8 w-8 text-[#A8FF00] animate-pulse drop-shadow-lg" />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style={{animationDelay: '0.2s'}}>
                  <Sparkles className="h-8 w-8 text-[#A8FF00] animate-pulse drop-shadow-lg" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style={{animationDelay: '0.4s'}}>
                  <Star className="h-8 w-8 text-[#A8FF00] animate-pulse drop-shadow-lg" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style={{animationDelay: '0.6s'}}>
                  <Zap className="h-8 w-8 text-[#A8FF00] animate-pulse drop-shadow-lg" />
                </div>
                
                {/* 🎯 LOGO PRINCIPAL CON CONTRASTE ABSOLUTO */}
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src="/WhatsApp_Image_2025-06-26_at_19.55.53__1_-removebg-preview copy copy.png" 
                    alt="Energía Verde Wasabi" 
                    className="h-32 w-auto relative z-10 transition-all duration-500 group-hover:brightness-110"
                    style={{
                      maxWidth: '400px',
                      objectFit: 'contain',
                      filter: 'contrast(2.0) brightness(1.4) saturate(1.6) drop-shadow(0 8px 20px rgba(0,0,0,0.7))'
                    }}
                  />
                </div>
                
                {/* 🌈 BORDE ULTRA ANIMADO */}
                <div className="absolute inset-0 rounded-3xl border-4 border-[#A8FF00] opacity-100 group-hover:border-[#96E600] transition-all duration-500 animate-pulse"></div>
                
                {/* 💥 EXPLOSIÓN DE ENERGÍA MEJORADA */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#A8FF00]/20 via-[#96E600]/20 to-[#A8FF00]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
              </div>
              
              {/* 🔥 ANILLOS ORBITALES ULTRA MEJORADOS */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 border-3 border-[#A8FF00] rounded-full opacity-0 group-hover:opacity-80 animate-spin"
                  style={{
                    width: `${140 + i * 35}%`,
                    height: `${140 + i * 35}%`,
                    left: `${-20 - i * 17.5}%`,
                    top: `${-20 - i * 17.5}%`,
                    animationDuration: `${2 + i}s`,
                    animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
                    borderWidth: `${3 - i * 0.5}px`
                  }}
                />
              ))}
              
              {/* ✨ RESPLANDOR EXTERIOR ULTRA PULSANTE */}
              <div className="absolute -inset-12 bg-[#A8FF00]/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
              <div className="absolute -inset-16 bg-[#A8FF00]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              
              {/* 🎆 ESTRELLAS FLOTANTES MEJORADAS */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce"
                  style={{
                    left: `${15 + Math.random() * 70}%`,
                    top: `${15 + Math.random() * 70}%`,
                    animationDelay: `${Math.random() * 1}s`
                  }}
                >
                  <Star className="h-4 w-4 text-[#A8FF00] animate-pulse drop-shadow-lg" />
                </div>
              ))}
            </div>
          </div>

          {/* Resto del contenido igual */}
          <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            ¿Pagas la luz sin saber{' '}
            <span className="bg-gradient-to-r from-[#A8FF00] via-[#96E600] to-[#A8FF00] bg-clip-text text-transparent animate-pulse">
              cuánto te clavan
            </span>
            <span className="text-6xl animate-bounce">?</span>
          </h1>

          <div className={`text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-16 leading-relaxed max-w-5xl mx-auto transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="mb-6">
              Bienvenido a{' '}
              <strong className="text-3xl font-black bg-gradient-to-r from-[#A8FF00] to-[#96E600] bg-clip-text text-transparent">
                Energía Verde Wasabi
              </strong>
              :{' '}
            </p>
            <p className="text-xl">
              energía 100% renovable, sin trampas, sin robots y hasta{' '}
              <span className="relative inline-block">
                <strong className="text-[#A8FF00] text-3xl font-black animate-pulse">120 € al año</strong>
                <div className="absolute -inset-2 bg-[#A8FF00]/20 blur-lg rounded animate-ping"></div>
              </span>
              {' '}por cambiarte con nosotros.
            </p>
          </div>

          {/* BENEFICIOS ESTÁTICOS */}
          <div className={`flex flex-wrap justify-center gap-6 mb-16 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { icon: Shield, text: "Sin permanencia", color: "from-green-400 to-emerald-500" },
              { icon: Leaf, text: "100% renovable", color: "from-blue-400 to-cyan-500" },
              { icon: TrendingDown, text: "Precios justos", color: "from-purple-400 to-pink-500" },
              { icon: Award, text: "Certificado", color: "from-orange-400 to-red-500" }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 hover:border-[#A8FF00] transition-all duration-300 hover:scale-110 hover:bg-[#A8FF00]/20"
              >
                <div className={`p-2 rounded-lg bg-gradient-to-r ${benefit.color} group-hover:scale-125 transition-transform duration-300`}>
                  <benefit.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-white font-semibold group-hover:text-[#A8FF00] transition-colors">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA ESTÁTICO */}
          <div className={`transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={scrollToContact}
              className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[#A8FF00] to-[#96E600] text-[#1A1A1A] px-12 py-6 rounded-full text-2xl font-black hover:shadow-2xl hover:shadow-[#A8FF00]/60 transition-all duration-500 transform hover:scale-110 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#96E600] to-[#A8FF00] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="relative z-10 text-2xl">👉 Quiero pagar lo justo</span>
              <ArrowRight className="relative z-10 h-7 w-7 transition-transform group-hover:translate-x-2 group-hover:scale-125" />
            </button>
          </div>

          {/* TRUST INDICATORS ESTÁTICOS */}
          <div className={`mt-12 transform transition-all duration-1000 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-8 text-gray-300 text-lg">
              {["Sin compromiso", "Sin letra pequeña", "Atención humana"].map((text, index) => (
                <span 
                  key={index}
                  className="relative px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#A8FF00]/50 hover:text-[#A8FF00] transition-all duration-300 hover:scale-105"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR ESTÁTICO */}
      <div className={`hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div 
          className="w-8 h-14 border-2 border-[#A8FF00] rounded-full flex justify-center cursor-pointer hover:shadow-lg hover:shadow-[#A8FF00]/30 transition-all duration-300 hover:scale-110"
          onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-2 h-4 bg-[#A8FF00] rounded-full mt-3 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default OptimizedHero;