import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, MessageCircle, CheckCircle, ArrowRight, Sparkles, Zap } from 'lucide-react';

const UltraHowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      number: "1",
      icon: <FileText className="h-12 w-12" />,
      title: "Rellena el formulario",
      description: "Te llamamos sin compromiso y sin prisa para conocer tu situación actual y necesidades específicas",
      color: "from-blue-400 via-cyan-500 to-teal-500",
      delay: 0
    },
    {
      number: "2",
      icon: <MessageCircle className="h-12 w-12" />,
      title: "Te explicamos sin rodeos",
      description: "Sin letras pequeñas ni ofertas raras. Todo claro, transparente y adaptado a tu consumo",
      color: "from-purple-400 via-pink-500 to-rose-500",
      delay: 0.3
    },
    {
      number: "3",
      icon: <CheckCircle className="h-12 w-12" />,
      title: "Firmas digitalmente",
      description: "Y listo. Energía verde desde la próxima factura, sin más trámites ni complicaciones",
      color: "from-green-400 via-emerald-500 to-teal-500",
      delay: 0.6
    }
  ];

  return (
    <section 
      id="como-funciona" 
      ref={ref}
      className="py-32 lg:py-40 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Ultra Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(168, 255, 0, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(168, 255, 0, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(168, 255, 0, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 80%, rgba(168, 255, 0, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(168, 255, 0, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Geometric Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="steps-pattern" width="12" height="12" patternUnits="userSpaceOnUse">
              <motion.path 
                d="M 12 0 L 0 0 0 12" 
                fill="none" 
                stroke="#A8FF00" 
                strokeWidth="0.5"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#steps-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#A8FF00] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ultra Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#1A1A1A] mb-8 leading-tight"
            whileInView={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Cambiarte a Wasabi es más fácil que decir{' '}
            <motion.span 
              className="text-red-500 line-through decoration-4 decoration-red-500 relative"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(239, 68, 68, 0.3)",
                  "0 0 40px rgba(239, 68, 68, 0.6)",
                  "0 0 20px rgba(239, 68, 68, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Iberdrola
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-red-500 opacity-50 rounded-full"
                animate={{ scaleX: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            En solo 3 pasos sencillos estarás disfrutando de energía limpia y precios justos
          </motion.p>
        </motion.div>

        {/* Ultra Steps */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="relative">
            {/* Ultra Connection Line */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-[#A8FF00] via-[#96E600] to-[#A8FF00] opacity-30 rounded-full">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#A8FF00] to-[#96E600] rounded-full"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 2, delay: 1 }}
                style={{ transformOrigin: "left" }}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="text-center relative group"
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 1, 
                    delay: step.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Ultra Step Number */}
                  <motion.div 
                    className="bg-gradient-to-r from-[#A8FF00] to-[#96E600] text-[#1A1A1A] w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 relative z-10 shadow-2xl"
                    animate={{ 
                      boxShadow: [
                        "0 0 30px rgba(168, 255, 0, 0.5)",
                        "0 0 60px rgba(168, 255, 0, 0.8)",
                        "0 0 30px rgba(168, 255, 0, 0.5)"
                      ],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {step.number}
                    
                    {/* Orbital Ring */}
                    <motion.div
                      className="absolute inset-0 border-2 border-[#A8FF00] rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        width: "150%",
                        height: "150%",
                        left: "-25%",
                        top: "-25%"
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  
                  {/* Ultra Card */}
                  <motion.div 
                    className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:border-[#A8FF00] relative overflow-hidden group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50"
                    whileHover={{ 
                      boxShadow: "0 25px 50px rgba(168, 255, 0, 0.2)" 
                    }}
                  >
                    {/* Animated Background Particles */}
                    <div className="absolute inset-0">
                      {[...Array(15)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-[#A8FF00] rounded-full opacity-0 group-hover:opacity-40"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            opacity: [0, 0.4, 0],
                            scale: [0, 1, 0],
                            y: [0, -20, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: Math.random() * 3
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Icon */}
                    <motion.div 
                      className={`text-white bg-gradient-to-br ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10`}
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity,
                        delay: index * 0.7
                      }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      {step.icon}
                      
                      {/* Icon Glow */}
                      <motion.div 
                        className={`absolute -inset-4 bg-gradient-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl`}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                    
                    {/* Title */}
                    <motion.h3 
                      className="text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#A8FF00] transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {step.title}
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p 
                      className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {step.description}
                    </motion.p>

                    {/* Hover Glow Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-[#A8FF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                      whileHover={{ scale: 1.02 }}
                    />
                  </motion.div>

                  {/* Connection Arrow (Desktop) */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute top-32 -right-8 text-[#A8FF00]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 1, delay: step.delay + 0.5 }}
                    >
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="h-8 w-8" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Ultra CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] rounded-3xl p-16 relative overflow-hidden border border-[#A8FF00]/20">
            {/* Animated Background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#A8FF00]/10 via-transparent to-[#A8FF00]/10"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Sparkle Effects */}
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#A8FF00] rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 3
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center space-x-4 mb-8"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-12 w-12 text-[#A8FF00]" />
                <motion.h3 
                  className="text-4xl font-black text-white"
                  animate={{ 
                    textShadow: [
                      "0 0 30px rgba(168, 255, 0, 0.5)",
                      "0 0 60px rgba(168, 255, 0, 0.8)",
                      "0 0 30px rgba(168, 255, 0, 0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ¿Preparado para el cambio?
                </motion.h3>
                <Zap className="h-12 w-12 text-[#A8FF00]" />
              </motion.div>
              
              <motion.p 
                className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                Miles de familias ya disfrutan de energía limpia y precios justos. Tu turno.
              </motion.p>
              
              <motion.button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-[#A8FF00] to-[#96E600] text-[#1A1A1A] px-16 py-6 rounded-full font-black text-2xl relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 0 50px rgba(168, 255, 0, 0.5)",
                    "0 0 100px rgba(168, 255, 0, 0.8)",
                    "0 0 50px rgba(168, 255, 0, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#96E600] to-[#A8FF00]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Empezar ahora 🚀</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraHowItWorks;