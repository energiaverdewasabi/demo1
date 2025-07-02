import React, { useEffect, useState } from 'react';
import { ArrowRight, TrendingDown, Shield, Heart, Zap } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [energyParticles, setEnergyParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate energy particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setEnergyParticles(particles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContacto = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(168, 255, 0, 0.15) 0%, 
            rgba(26, 26, 26, 0.95) 40%, 
            rgba(26, 26, 26, 1) 100%)`
        }}
      />

      {/* Animated Energy Particles */}
      <div className="absolute inset-0">
        {energyParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-[#A8FF00] rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              boxShadow: '0 0 10px #A8FF00'
            }}
          />
        ))}
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#A8FF00" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Energy Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#A8FF00] rounded-full opacity-10 animate-pulse blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-[#A8FF00] rounded-full opacity-15 animate-pulse blur-lg" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#A8FF00] rounded-full opacity-20 animate-pulse blur-md" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Animated Logo/Icon */}
          <div className={`mb-8 transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative inline-block">
              <div className="bg-[#A8FF00] p-4 rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-500">
                <Zap className="h-12 w-12 text-[#1A1A1A] animate-pulse" />
              </div>
              <div className="absolute -inset-2 bg-[#A8FF00] rounded-2xl opacity-20 animate-ping"></div>
            </div>
          </div>

          {/* Main Headline with Typewriter Effect */}
          <h1 className={`text-4xl sm:text-6xl lg:text-8xl font-black text-white mb-8 leading-tight transform transition-all duration-2000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            ¿Pagas la luz sin saber{' '}
            <span className="relative inline-block">
              <span className="text-[#A8FF00] bg-gradient-to-r from-[#A8FF00] to-[#96E600] bg-clip-text text-transparent animate-pulse">
                cuánto te clavan
              </span>
              <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-[#A8FF00] to-[#96E600] rounded-full animate-pulse"></div>
              <div className="absolute -inset-2 bg-[#A8FF00] opacity-20 blur-xl animate-pulse"></div>
            </span>
            <span className="text-6xl">?</span>
          </h1>

          {/* Subtitle with Stagger Animation */}
          <div className={`text-xl sm:text-3xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto transform transition-all duration-2000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="mb-4">
              Bienvenido a <strong className="text-[#A8FF00] font-black text-4xl bg-gradient-to-r from-[#A8FF00] to-[#96E600] bg-clip-text text-transparent">Energía Verde Wasabi</strong>
            </p>
            <p className="text-2xl">
              ¿Pagas la luz sin saber cuánto te clavan?{' '}
              <span className="relative inline-block">
                <strong className="text-[#A8FF00] text-4xl font-black">120 € al año</strong>
                <div className="absolute -inset-1 bg-[#A8FF00] opacity-20 blur-sm animate-pulse rounded"></div>
              </span>
              {' '}por cambiarte con nosotros.
            </p>
          </div>

          {/* Animated Key Benefits */}
          <div className={`flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 transform transition-all duration-2000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { icon: Shield, text: "Sin permanencia", color: "text-green-400" },
              { icon: Heart, text: "100% renovable", color: "text-red-400" },
              { icon: TrendingDown, text: "Precios justos", color: "text-blue-400" }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:border-[#A8FF00] transition-all duration-500 hover:scale-110 hover:bg-[#A8FF00]/20"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <benefit.icon className={`h-6 w-6 ${benefit.color} group-hover:text-[#A8FF00] transition-colors`} />
                <span className="text-white font-semibold group-hover:text-[#A8FF00] transition-colors">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Epic CTA Button */}
          <div className={`transform transition-all duration-2000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={scrollToContacto}
              className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[#A8FF00] to-[#96E600] text-[#1A1A1A] px-12 py-6 rounded-full text-2xl font-black hover:from-[#96E600] hover:to-[#A8FF00] transition-all duration-500 transform hover:scale-110 hover:shadow-2xl overflow-hidden"
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#A8FF00] to-[#96E600] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Button Content */}
              <span className="relative z-10 text-2xl">👉 Quiero pagar lo justo</span>
              <ArrowRight className="relative z-10 h-8 w-8 transition-transform group-hover:translate-x-2 group-hover:scale-125" />
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping rounded-full"></div>
            </button>
          </div>

          {/* Trust Indicators with Pulse Animation */}
          <div className={`mt-8 transform transition-all duration-2000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-lg">
              {["Sin compromiso", "Sin letra pequeña", "Atención humana"].map((text, index) => (
                <span 
                  key={index}
                  className="relative px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#A8FF00]/50 hover:text-[#A8FF00] transition-all duration-300"
                >
                  {text}
                  <div className="absolute inset-0 bg-[#A8FF00] opacity-0 hover:opacity-10 rounded-full transition-opacity duration-300"></div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-2000 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="relative">
          <div className="w-8 h-14 border-2 border-[#A8FF00] rounded-full flex justify-center animate-bounce">
            <div className="w-2 h-4 bg-[#A8FF00] rounded-full mt-3 animate-pulse"></div>
          </div>
          <div className="absolute -inset-2 border-2 border-[#A8FF00] rounded-full opacity-30 animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;