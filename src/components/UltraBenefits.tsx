import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Zap, Users, FileText, Lightbulb, Eye, Sparkles, Shield, Heart } from 'lucide-react';

const UltraBenefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const benefits = [
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Energía verde de verdad",
      description: "100% renovable con garantía de origen certificada. Sin greenwashing, sin mentiras.",
      color: "from-emerald-400 via-green-500 to-teal-600",
      bgColor: "from-emerald-50 to-green-100",
      particles: 15
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Precios indexados",
      description: "Pagas lo que vale la energía en el mercado, ni un euro más. Transparencia total.",
      color: "from-blue-400 via-cyan-500 to-indigo-600",
      bgColor: "from-blue-50 to-cyan-100",
      particles: 12
    },
    {
      icon: <Check className="h-10 w-10" />,
      title: "Sin letra pequeña",
      description: "Contratos claros y transparentes. Lo que ves es exactamente lo que pagas.",
      color: "from-purple-400 via-pink-500 to-rose-600",
      bgColor: "from-purple-50 to-pink-100",
      particles: 18
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Atención humana",
      description: "Personas reales que te entienden y resuelven tus dudas. Nada de robots.",
      color: "from-orange-400 via-red-500 to-pink-600",
      bgColor: "from-orange-50 to-red-100",
      particles: 20
    }
  ];

  return (
    <section 
      id="beneficios" 
      ref={ref}
      className="py-32 lg:py-40 relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]"
    >
      {/* Ultra Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 25% 25%, rgba(168, 255, 0, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 75%, rgba(168, 255, 0, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 25% 75%, rgba(168, 255, 0, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 25%, rgba(168, 255, 0, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 25% 25%, rgba(168, 255, 0, 0.15) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Neural Network Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="neural-benefits" width="8" height="8" patternUnits="userSpaceOnUse">
              <motion.circle 
                cx="4" 
                cy="4" 
                r="0.5" 
                fill="#A8FF00"
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: Math.random() * 2 }}
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#neural-benefits)" />
        </svg>
      </div>

      {/* Floating Energy Orbs */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#A8FF00] to-[#96E600] blur-2xl opacity-20"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1.2, 0.5],
              opacity: [0.1, 0.3, 0.1],
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ultra Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#A8FF00]/20 to-[#96E600]/20 backdrop-blur-xl px-8 py-4 rounded-full mb-8 border border-[#A8FF00]/30"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              boxShadow: [
                "0 0 30px rgba(168, 255, 0, 0.3)",
                "0 0 60px rgba(168, 255, 0, 0.5)",
                "0 0 30px rgba(168, 255, 0, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Eye className="h-6 w-6 text-[#A8FF00]" />
            <span className="text-[#A8FF00] font-bold text-xl">La realidad sobre tu factura</span>
            <Sparkles className="h-6 w-6 text-[#A8FF00]" />
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-12 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            La luz no tiene por qué ser{' '}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="text-red-500 line-through decoration-8 decoration-red-500"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(239, 68, 68, 0.5)",
                    "0 0 40px rgba(239, 68, 68, 0.8)",
                    "0 0 20px rgba(239, 68, 68, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                un lío
              </motion.span>
              <motion.div 
                className="absolute -bottom-4 left-0 right-0 h-2 bg-red-500 opacity-50 rounded-full blur-sm"
                animate={{ scaleX: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
          </motion.h2>
          
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-3xl text-gray-300 leading-relaxed mb-10">
              Llevas años pagando facturas que no entiendes, con subidas que nadie te avisa, 
              hablando con máquinas y sin saber qué estás pagando.
            </p>
            <motion.div 
              className="bg-gradient-to-r from-[#A8FF00]/20 via-[#96E600]/20 to-[#A8FF00]/20 backdrop-blur-xl p-8 rounded-3xl border border-[#A8FF00]/30 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              animate={{ 
                borderColor: [
                  "rgba(168, 255, 0, 0.3)",
                  "rgba(168, 255, 0, 0.6)",
                  "rgba(168, 255, 0, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#A8FF00]/10 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <p className="text-2xl font-bold text-white relative z-10">
                🔥 Es hora de que eso cambie para siempre
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Ultra Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 text-center hover:border-[#A8FF00] transition-all duration-500 hover:shadow-2xl overflow-hidden h-full">
                
                {/* Animated Background Particles */}
                <div className="absolute inset-0">
                  {[...Array(benefit.particles)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#A8FF00] rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 0.6, 0],
                        scale: [0, 1, 0],
                        y: [0, -20, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </div>
                
                {/* Animated Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-20 rounded-3xl`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.2 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Icon Container */}
                <div className="relative mb-8">
                  <motion.div 
                    className={`bg-gradient-to-br ${benefit.color} w-20 h-20 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl relative z-10`}
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {benefit.icon}
                  </motion.div>
                  
                  {/* Orbital Rings */}
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute inset-0 border-2 border-gradient-to-r ${benefit.color} rounded-full opacity-0 group-hover:opacity-30`}
                      style={{
                        width: `${120 + i * 30}%`,
                        height: `${120 + i * 30}%`,
                        left: `${-10 - i * 15}%`,
                        top: `${-10 - i * 15}%`,
                        borderImage: `linear-gradient(45deg, transparent, rgba(168, 255, 0, 0.5), transparent) 1`
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 8 + i * 2, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    />
                  ))}
                  
                  <motion.div 
                    className={`absolute -inset-6 bg-gradient-to-br ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                
                {/* Content */}
                <motion.h3 
                  className="text-2xl font-bold text-white mb-6 group-hover:text-[#A8FF00] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {benefit.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {benefit.description}
                </motion.p>

                {/* Hover Border Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#A8FF00] transition-all duration-500"
                  whileHover={{
                    boxShadow: "0 0 50px rgba(168, 255, 0, 0.3)"
                  }}
                />
                
                {/* Corner Accent */}
                <motion.div 
                  className={`absolute top-4 right-4 w-4 h-4 bg-gradient-to-br ${benefit.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  whileHover={{ scale: 1.5 }}
                />
              </div>

              {/* Floating Energy Icon */}
              <motion.div 
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-[#A8FF00] to-[#96E600] rounded-full flex items-center justify-center text-[#1A1A1A] opacity-0 group-hover:opacity-100 shadow-2xl"
                initial={{ scale: 0, rotate: -180 }}
                whileHover={{ 
                  scale: 1, 
                  rotate: 0,
                  transition: { duration: 0.5, type: "spring" }
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              >
                <Zap className="h-8 w-8" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Ultra Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] rounded-3xl p-16 relative overflow-hidden border border-[#A8FF00]/20">
            {/* Animated Background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#A8FF00]/10 via-transparent to-[#A8FF00]/10"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10 text-center">
              <motion.div
                className="flex items-center justify-center space-x-4 mb-8"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Shield className="h-12 w-12 text-[#A8FF00]" />
                <motion.h3 
                  className="text-4xl font-black text-white"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(168, 255, 0, 0.5)",
                      "0 0 40px rgba(168, 255, 0, 0.8)",
                      "0 0 20px rgba(168, 255, 0, 0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ¿Listo para dejar de ser estafado?
                </motion.h3>
                <Heart className="h-12 w-12 text-[#A8FF00]" />
              </motion.div>
              
              <motion.p 
                className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                Miles de familias ya han dado el paso. Únete a la revolución energética.
              </motion.p>
              
              <motion.button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-[#A8FF00] to-[#96E600] text-[#1A1A1A] px-12 py-6 rounded-full font-black text-2xl relative overflow-hidden group"
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
                <span className="relative z-10">Sí, quiero energía honesta 🚀</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraBenefits;