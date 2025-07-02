import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, Zap, CheckCircle, Send, AlertCircle, Award, Shield, Star, ArrowRight } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  supplyType: string[];
  clientType: string;
}

const OptimizedContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [supplyTypes, setSupplyTypes] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<FormData>({
    defaultValues: {
      clientType: 'residencial'
    }
  });

  const clientType = watch('clientType');

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

  const handleSupplyTypeChange = (type: string) => {
    const newSupplyTypes = supplyTypes.includes(type)
      ? supplyTypes.filter(t => t !== type)
      : [...supplyTypes, type];
    
    setSupplyTypes(newSupplyTypes);
    setValue('supplyType', newSupplyTypes);
  };

  // 🚀 FUNCIÓN PARA ENVIAR POR WHATSAPP CON NÚMERO ACTUALIZADO 🚀
  const sendToWhatsApp = (data: FormData) => {
    const phoneNumber = '+34621508300'; // Número exacto proporcionado
    
    // Crear mensaje estructurado para WhatsApp
    const message = `🌱 *NUEVA CONSULTA - ENERGÍA VERDE WASABI* ⚡

👤 *Datos del Cliente:*
• Nombre: ${data.name}
• Teléfono: ${data.phone}
• Email: ${data.email || 'No proporcionado'}

⚡ *Tipo de Suministro:*
${supplyTypes.length > 0 ? supplyTypes.map(type => `• ${type}`).join('\n') : '• No especificado'}

🏢 *Tipo de Cliente:*
• ${data.clientType === 'residencial' ? 'Residencial 🏠' : 'Pyme 🏢'}

💬 *Mensaje:*
${data.message || 'Sin mensaje adicional'}

---
📅 Enviado desde energiaverdewasabi.com
🕐 ${new Date().toLocaleString('es-ES')}`;

    // Crear enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    return true;
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Enviar por WhatsApp
      const whatsappSent = sendToWhatsApp(data);
      
      if (whatsappSent) {
        // También crear enlace mailto como backup
        const emailBody = `
Nueva consulta desde la web de Energía Verde Wasabi:

Nombre: ${data.name}
Teléfono: ${data.phone}
Email: ${data.email || 'No proporcionado'}
Mensaje: ${data.message || 'No proporcionado'}
Tipo de suministro: ${supplyTypes.join(', ') || 'No especificado'}
Tipo de cliente: ${data.clientType === 'residencial' ? 'Residencial' : 'Pyme'}

---
Enviado desde energiaverdewasabi.com
        `.trim();

        const mailtoLink = `mailto:energiaverdewasabi@gmail.com?subject=Nueva consulta desde la web - ${data.name}&body=${encodeURIComponent(emailBody)}`;
        
        // Abrir email como backup (en una nueva pestaña para no interferir con WhatsApp)
        setTimeout(() => {
          window.open(mailtoLink, '_blank');
        }, 1000);
        
        // Mostrar mensaje de éxito
        setIsSubmitted(true);
        reset();
        setSupplyTypes([]);
        
        // Reset después de 10 segundos
        setTimeout(() => {
          setIsSubmitted(false);
        }, 10000);
      }
      
    } catch (error) {
      console.error('Error enviando consulta:', error);
      setSubmitError('Hubo un error al procesar el formulario. Por favor, inténtalo de nuevo o contacta directamente por WhatsApp al +34 621 50 83 00');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section 
        id="contacto" 
        className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#2A2A2A] via-[#3A3A3A] to-[#2A2A2A]"
      >
        {/* Success Background más claro */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/25 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#A8FF00]/35 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
          
          {/* Partículas de éxito más visibles */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-2xl relative overflow-hidden border-4 border-green-300">
              {/* Success animation background */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-green-500 opacity-30 animate-bounce"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      fontSize: `${Math.random() * 20 + 15}px`
                    }}
                  >
                    ⚡
                  </div>
                ))}
              </div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-bounce border-4 border-green-300">
                  <CheckCircle className="h-16 w-16 lg:h-20 lg:w-20 text-green-600" />
                </div>
                
                <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">
                  ¡Consulta Enviada por WhatsApp! 📱⚡
                </h2>
                
                <p className="text-gray-700 text-xl lg:text-2xl mb-10 leading-relaxed">
                  Tu consulta ha sido enviada automáticamente por <strong>WhatsApp</strong> y también por <strong>email</strong>. 
                  Nuestro equipo de expertos se pondrá en contacto contigo en las próximas horas.
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-300 mb-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-emerald-400"></div>
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="bg-green-500 p-3 rounded-full animate-pulse">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-green-800 font-black text-2xl">WhatsApp Enviado ✅</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-green-700 text-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <span>📱 Mensaje enviado por WhatsApp</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <span>📧 Email de respaldo enviado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <span>⚡ Análisis gratuito incluido</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <span>🎯 Respuesta en 2-4 horas</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="text-center p-6 bg-gray-50 rounded-xl shadow-lg border-2 border-gray-200 hover:scale-105 transition-transform">
                    <Shield className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <p className="font-bold text-gray-800 text-lg">Sin compromiso</p>
                    <p className="text-gray-600 text-sm">Consulta 100% gratuita</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl shadow-lg border-2 border-gray-200 hover:scale-105 transition-transform">
                    <Award className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                    <p className="font-bold text-gray-800 text-lg">Atención experta</p>
                    <p className="text-gray-600 text-sm">Equipo especializado</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl shadow-lg border-2 border-gray-200 hover:scale-105 transition-transform">
                    <Star className="h-10 w-10 text-yellow-600 mx-auto mb-3" />
                    <p className="font-bold text-gray-800 text-lg">Ahorro garantizado</p>
                    <p className="text-gray-600 text-sm">Hasta 120€ al año</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#A8FF00]/20 to-[#96E600]/20 p-8 rounded-2xl border-2 border-[#A8FF00] mb-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    📱 ¿Prefieres contacto directo por WhatsApp?
                  </h3>
                  <a 
                    href="https://wa.me/+34621508300?text=Hola,%20me%20interesa%20información%20sobre%20Energía%20Verde%20Wasabi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Phone className="h-6 w-6" />
                    <span>Escribir por WhatsApp: +34 621 50 83 00</span>
                  </a>
                </div>

                <div className="text-sm text-gray-600 bg-gray-100 p-6 rounded-xl border border-gray-300">
                  <p className="font-semibold mb-3 text-gray-800">📞 Otros métodos de contacto:</p>
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8">
                    <a href="mailto:energiaverdewasabi@gmail.com" className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors">
                      <Mail className="h-5 w-5" />
                      <span>energiaverdewasabi@gmail.com</span>
                    </a>
                    <a href="tel:+34621508300" className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors">
                      <Phone className="h-5 w-5" />
                      <span>+34 621 50 83 00</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="contacto" 
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#2A2A2A] via-[#3A3A3A] to-[#2A2A2A]"
    >
      {/* Fondo más claro y profesional */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A8FF00]/15 via-transparent to-[#96E600]/15" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A8FF00]/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#96E600]/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}} />
        
        {/* Partículas más visibles */}
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#A8FF00] rounded-full opacity-50 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header con espaciado corregido */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-[#A8FF00]/25 via-[#96E600]/25 to-[#A8FF00]/25 backdrop-blur-xl px-8 py-4 rounded-full mb-10 border-2 border-[#A8FF00] relative overflow-hidden">
            <ArrowRight className="h-6 w-6 text-[#A8FF00] animate-bounce" />
            <span className="text-[#A8FF00] font-black text-xl">Formulario de contacto</span>
            <ArrowRight className="h-6 w-6 text-[#A8FF00] animate-bounce" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-10 leading-tight">
            <span className="bg-gradient-to-r from-[#A8FF00] via-[#96E600] to-[#A8FF00] bg-clip-text text-transparent">
              Empieza a pagar lo justo
            </span>
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl">por tu energía</span>
          </h2>
          
          <p className="text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-10">
            Déjanos tus datos y te explicamos todo en 2 minutos, sin compromiso
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-[#A8FF00] text-lg font-semibold">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span>Sin Compromiso</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5" />
              <span>Respuesta Inmediata</span>
            </div>
          </div>
        </div>

        {/* 🎯 FORMULARIO ULTRA OPTIMIZADO PARA MÓVIL - TEXTO SIEMPRE VISIBLE 🎯 */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-[#A8FF00] relative overflow-hidden">
            {/* Form header decoration */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#A8FF00] via-[#96E600] to-[#A8FF00]"></div>
            
            <div className="p-8 lg:p-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Error Message */}
                {submitError && (
                  <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-xl flex items-start space-x-4 border border-red-300 mb-12">
                    <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-red-800 mb-1">Error al enviar</h4>
                      <p className="text-red-700">{submitError}</p>
                    </div>
                  </div>
                )}

                {/* 🔥 CAMPOS ULTRA OPTIMIZADOS PARA MÓVIL - MÁXIMA VISIBILIDAD 🔥 */}
                <div className="space-y-12">
                  {/* Form Grid con espaciado máximo */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* 📝 NOMBRE - ULTRA OPTIMIZADO PARA MÓVIL */}
                    <div className="space-y-4">
                      <label htmlFor="name" className="block text-xl font-black text-gray-900">
                        Nombre completo *
                      </label>
                      <input
                        {...register('name', { required: 'El nombre es obligatorio' })}
                        type="text"
                        id="name"
                        className="w-full px-6 py-5 border-3 border-gray-400 rounded-2xl focus:ring-4 focus:ring-[#A8FF00]/30 focus:border-[#A8FF00] transition-all text-xl bg-white text-black placeholder-gray-500 hover:border-gray-500 shadow-lg font-semibold"
                        placeholder="Tu nombre y apellidos"
                        style={{
                          color: '#000000 !important',
                          backgroundColor: '#ffffff !important',
                          WebkitTextFillColor: '#000000 !important'
                        }}
                      />
                      {errors.name && (
                        <p className="text-red-600 text-base flex items-center space-x-2 font-semibold">
                          <AlertCircle className="h-5 w-5" />
                          <span>{errors.name.message}</span>
                        </p>
                      )}
                    </div>

                    {/* 📞 TELÉFONO - ULTRA OPTIMIZADO PARA MÓVIL */}
                    <div className="space-y-4">
                      <label htmlFor="phone" className="block text-xl font-black text-gray-900">
                        Teléfono *
                      </label>
                      <input
                        {...register('phone', { 
                          required: 'El teléfono es obligatorio',
                          pattern: {
                            value: /^[0-9+\-\s()]+$/,
                            message: 'Formato de teléfono inválido'
                          }
                        })}
                        type="tel"
                        id="phone"
                        className="w-full px-6 py-5 border-3 border-gray-400 rounded-2xl focus:ring-4 focus:ring-[#A8FF00]/30 focus:border-[#A8FF00] transition-all text-xl bg-white text-black placeholder-gray-500 hover:border-gray-500 shadow-lg font-semibold"
                        placeholder="Tu número de teléfono"
                        style={{
                          color: '#000000 !important',
                          backgroundColor: '#ffffff !important',
                          WebkitTextFillColor: '#000000 !important'
                        }}
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-base flex items-center space-x-2 font-semibold">
                          <AlertCircle className="h-5 w-5" />
                          <span>{errors.phone.message}</span>
                        </p>
                      )}
                    </div>

                    {/* 📧 EMAIL - ULTRA OPTIMIZADO PARA MÓVIL */}
                    <div className="space-y-4">
                      <label htmlFor="email" className="block text-xl font-black text-gray-900">
                        Email <span className="text-gray-600 font-normal">(opcional)</span>
                      </label>
                      <input
                        {...register('email', {
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email inválido'
                          }
                        })}
                        type="email"
                        id="email"
                        className="w-full px-6 py-5 border-3 border-gray-400 rounded-2xl focus:ring-4 focus:ring-[#A8FF00]/30 focus:border-[#A8FF00] transition-all text-xl bg-white text-black placeholder-gray-500 hover:border-gray-500 shadow-lg font-semibold"
                        placeholder="tu@email.com"
                        style={{
                          color: '#000000 !important',
                          backgroundColor: '#ffffff !important',
                          WebkitTextFillColor: '#000000 !important'
                        }}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-base flex items-center space-x-2 font-semibold">
                          <AlertCircle className="h-5 w-5" />
                          <span>{errors.email.message}</span>
                        </p>
                      )}
                    </div>

                    {/* 💬 MENSAJE - ULTRA OPTIMIZADO PARA MÓVIL */}
                    <div className="space-y-4">
                      <label htmlFor="message" className="block text-xl font-black text-gray-900">
                        Mensaje <span className="text-gray-600 font-normal">(opcional)</span>
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={5}
                        className="w-full px-6 py-5 border-3 border-gray-400 rounded-2xl focus:ring-4 focus:ring-[#A8FF00]/30 focus:border-[#A8FF00] transition-all text-xl resize-none bg-white text-black placeholder-gray-500 hover:border-gray-500 shadow-lg font-semibold"
                        placeholder="Cuéntanos sobre tu situación actual o cualquier duda que tengas..."
                        style={{
                          color: '#000000 !important',
                          backgroundColor: '#ffffff !important',
                          WebkitTextFillColor: '#000000 !important'
                        }}
                      />
                    </div>
                  </div>

                  {/* Tipo de suministro con espaciado ultra mejorado */}
                  <div className="space-y-6">
                    <label className="block text-xl font-black text-gray-900">
                      ¿Qué suministro quieres cambiar?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {['Luz', 'Gas', 'Ambos'].map((type) => (
                        <label 
                          key={type} 
                          className={`relative flex items-center justify-center space-x-3 cursor-pointer p-6 rounded-2xl border-3 transition-all duration-300 hover:scale-105 group ${
                            supplyTypes.includes(type)
                              ? 'border-[#A8FF00] bg-gradient-to-br from-[#A8FF00]/20 via-[#96E600]/10 to-[#A8FF00]/20 text-gray-900 shadow-lg shadow-[#A8FF00]/30'
                              : 'border-gray-400 hover:border-[#A8FF00]/50 bg-gray-50 hover:bg-gray-100 text-gray-700'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={supplyTypes.includes(type)}
                            onChange={() => handleSupplyTypeChange(type)}
                            className="sr-only"
                          />
                          <Zap className="h-6 w-6" />
                          <span className="font-bold text-lg">{type}</span>
                          {supplyTypes.includes(type) && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#A8FF00] rounded-full flex items-center justify-center shadow-lg">
                              <CheckCircle className="h-4 w-4 text-gray-900" />
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Tipo de cliente con espaciado ultra mejorado */}
                  <div className="space-y-6">
                    <label className="block text-xl font-black text-gray-900">
                      Tipo de cliente:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        { value: 'residencial', label: 'Residencial', icon: '🏠', desc: 'Para tu hogar' },
                        { value: 'pyme', label: 'Pyme', icon: '🏢', desc: 'Para tu negocio' }
                      ].map((option) => (
                        <label 
                          key={option.value} 
                          className={`relative flex items-center space-x-4 cursor-pointer p-6 rounded-2xl border-3 transition-all duration-300 hover:scale-105 group ${
                            clientType === option.value
                              ? 'border-[#A8FF00] bg-gradient-to-br from-[#A8FF00]/20 via-[#96E600]/10 to-[#A8FF00]/20 text-gray-900 shadow-lg shadow-[#A8FF00]/30'
                              : 'border-gray-400 hover:border-[#A8FF00]/50 bg-gray-50 hover:bg-gray-100 text-gray-700'
                          }`}
                        >
                          <input
                            {...register('clientType')}
                            type="radio"
                            value={option.value}
                            className="sr-only"
                          />
                          <span className="text-3xl">{option.icon}</span>
                          <div>
                            <div className="font-bold text-lg">{option.label}</div>
                            <div className="text-sm opacity-70">{option.desc}</div>
                          </div>
                          {clientType === option.value && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#A8FF00] rounded-full flex items-center justify-center shadow-lg">
                              <CheckCircle className="h-4 w-4 text-gray-900" />
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 🚀 BOTÓN WHATSAPP ULTRA MEJORADO con espaciado máximo corregido */}
                  <div className="space-y-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white py-8 px-8 rounded-2xl font-black text-2xl hover:from-green-700 hover:via-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-4 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group shadow-2xl border-3 border-green-400"
                    >
                      {/* Button background animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#A8FF00]/20 via-[#96E600]/20 to-[#A8FF00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {isSubmitting ? (
                        <>
                          <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin" />
                          <span className="relative z-10">Enviando por WhatsApp...</span>
                        </>
                      ) : (
                        <>
                          <span className="relative z-10 text-2xl">📱 Enviar por WhatsApp</span>
                          <Send className="h-8 w-8 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    {/* Security notice con espaciado ultra mejorado */}
                    <div className="p-6 bg-gray-100 rounded-xl border-3 border-gray-300">
                      <div className="flex items-start space-x-4">
                        <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <div className="text-base text-gray-700 leading-relaxed">
                          <p className="font-semibold text-gray-900 mb-2 text-lg">🔒 Tu información está protegida</p>
                          <p>Al enviar tus datos, aceptas que te contactemos para ofrecerte nuestros servicios. Tu consulta se enviará por <strong>WhatsApp</strong> y también por <strong>email</strong> como respaldo.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Additional trust elements con espaciado ultra mejorado */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/40">
              <Phone className="h-10 w-10 text-[#A8FF00] mx-auto mb-4" />
              <h4 className="font-bold text-white mb-3 text-lg">WhatsApp Directo</h4>
              <p className="text-gray-200">Respuesta inmediata por WhatsApp</p>
            </div>
            <div className="text-center p-8 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/40">
              <Shield className="h-10 w-10 text-[#A8FF00] mx-auto mb-4" />
              <h4 className="font-bold text-white mb-3 text-lg">100% Seguro</h4>
              <p className="text-gray-200">Tus datos están completamente protegidos</p>
            </div>
            <div className="text-center p-8 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/40">
              <Award className="h-10 w-10 text-[#A8FF00] mx-auto mb-4" />
              <h4 className="font-bold text-white mb-3 text-lg">Sin Compromiso</h4>
              <p className="text-gray-200">Consulta gratuita y sin obligaciones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedContactForm;