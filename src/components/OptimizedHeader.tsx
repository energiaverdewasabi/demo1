import React, { useState, useEffect } from 'react';
import { Menu, X, Award } from 'lucide-react';

const OptimizedHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#1A1A1A]/95 backdrop-blur-xl border-b border-[#A8FF00]/30 shadow-xl' 
            : 'bg-[#1A1A1A]/30 backdrop-blur-sm'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo ultra mejorado sin cuadrado blanco */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                {/* Logo directo con efectos sutiles */}
                <div className="relative p-2 rounded-xl transition-all duration-300 group-hover:scale-110">
                  <img 
                    src="/WhatsApp_Image_2025-06-26_at_19.55.53__1_-removebg-preview copy copy.png" 
                    alt="Energía Verde Wasabi" 
                    className="h-10 w-auto sm:h-12 lg:h-14 transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-2xl"
                    style={{
                      maxWidth: '180px',
                      objectFit: 'contain',
                      filter: 'contrast(1.4) brightness(1.3) saturate(1.4) drop-shadow(0 0 15px rgba(168, 255, 0, 0.6))'
                    }}
                  />
                  
                  {/* Resplandor sutil alrededor del logo */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#A8FF00]/20 via-[#96E600]/20 to-[#A8FF00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                  
                  {/* Anillo de energía */}
                  <div className="absolute inset-0 rounded-xl border-2 border-[#A8FF00]/0 group-hover:border-[#A8FF00]/60 transition-all duration-500 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { id: 'beneficios', label: 'Beneficios' },
                { id: 'oferta', label: 'Oferta' },
                { id: 'como-funciona', label: 'Cómo funciona' },
                { id: 'testimonios', label: 'Testimonios' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="font-semibold transition-all duration-300 hover:text-[#A8FF00] hover:scale-105 relative group text-white/95 text-lg"
                >
                  {section.label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A8FF00] transition-all duration-300 group-hover:w-full"></div>
                </button>
              ))}
              
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-to-r from-[#A8FF00] to-[#96E600] text-[#1A1A1A] px-8 py-4 rounded-full font-black text-lg hover:shadow-xl hover:shadow-[#A8FF00]/40 transition-all duration-300 transform hover:scale-110 relative overflow-hidden group border-2 border-[#A8FF00]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#96E600] to-[#A8FF00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Solicitar Oferta</span>
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl transition-all duration-300 hover:bg-[#A8FF00]/20 text-white border border-[#A8FF00]/50"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-[#1A1A1A]/98 backdrop-blur-xl" />
          <div className="relative h-full flex flex-col justify-center items-center space-y-8 text-center px-4">
            {[
              { id: 'beneficios', label: 'Beneficios' },
              { id: 'oferta', label: 'Oferta' },
              { id: 'como-funciona', label: 'Cómo funciona' },
              { id: 'testimonios', label: 'Testimonios' }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-2xl font-bold text-white hover:text-[#A8FF00] transition-all duration-300 hover:scale-110 py-2"
              >
                {section.label}
              </button>
            ))}
            
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-[#A8FF00] to-[#96E600] text-[#1A1A1A] px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[#A8FF00]/30 transition-all duration-300 transform hover:scale-105 mt-4"
            >
              <Award className="h-5 w-5 inline mr-2" />
              Solicitar Oferta
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OptimizedHeader;