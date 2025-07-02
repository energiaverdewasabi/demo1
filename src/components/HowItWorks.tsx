import React from 'react';
import { FileText, MessageCircle, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <FileText className="h-8 w-8" />,
      title: "Rellena el formulario",
      description: "Te llamamos sin compromiso y sin prisa para conocer tu situación actual"
    },
    {
      number: "2",
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Te explicamos sin rodeos",
      description: "Sin letras pequeñas ni ofertas raras. Todo claro y transparente"
    },
    {
      number: "3",
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Firmas digitalmente",
      description: "Y listo. Energía verde desde la próxima factura, sin más trámites"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            Cambiarte a Wasabi es más fácil que decir{' '}
            <span className="text-red-500 line-through">Iberdrola</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En solo 3 pasos sencillos estarás disfrutando de energía limpia y precios justos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#A8FF00] via-[#A8FF00] to-[#A8FF00] opacity-30"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <div key={index} className="text-center relative">
                  {/* Step Number */}
                  <div className="bg-[#A8FF00] text-[#1A1A1A] w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow mb-6">
                    <div className="text-[#A8FF00] flex justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;