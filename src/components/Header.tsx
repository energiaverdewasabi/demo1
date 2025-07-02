import React, { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-[#A8FF00] p-2 rounded-lg">
              <Zap className="h-6 w-6 text-[#1A1A1A]" />
            </div>
            <span className={`text-xl font-bold ${
              isScrolled ? 'text-[#1A1A1A]' : 'text-white'
            }`}>
              Energía Verde Wasabi
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('beneficios')}
              className={`font-medium transition-colors hover:text-[#A8FF00] ${
                isScrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
            >
              Beneficios
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className={`font-medium transition-colors hover:text-[#A8FF00] ${
                isScrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
            >
              Cómo funciona
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-[#A8FF00] text-[#1A1A1A] px-6 py-2 rounded-full font-semibold hover:bg-[#96E600] transition-all duration-300 transform hover:scale-105"
            >
              Quiero mi oferta
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${
              isScrolled ? 'text-[#1A1A1A]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="block w-full text-left font-medium text-[#1A1A1A] hover:text-[#A8FF00] transition-colors"
              >
                Beneficios
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="block w-full text-left font-medium text-[#1A1A1A] hover:text-[#A8FF00] transition-colors"
              >
                Cómo funciona
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block w-full bg-[#A8FF00] text-[#1A1A1A] px-6 py-3 rounded-full font-semibold hover:bg-[#96E600] transition-colors text-center"
              >
                Quiero mi oferta
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;