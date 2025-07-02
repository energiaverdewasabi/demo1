import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, Sparkles, Heart, TrendingUp } from 'lucide-react';

const UltraTestimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      name: "María R.",
      location: "Toledo",
      text: "Me cansé de que me engañaran con la luz. En Wasabi me atienden personas, pago menos y no me lían.",
      rating: 5,
      savings: "87€/año",
      avatar: "M",
      color: "from-pink-400 to-rose-500"
    },
    {
      name: "Daniel V.",
      location: "Cuenca",
      text: "Con mi pyme, el 30% de descuento es un ahorro real. En 5 minutos estaba todo hecho.",
      rating: 5,
      savings: "340€/año",
      avatar: "D",
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Carmen L.",
      location: "Madrid",
      text: "Por fin una compañía que habla claro. Sin sorpresas en la factura, energía limpia y trato humano.",
      rating: 5,
      savings: "156€/año",
      avatar: "C",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section 
      id="testimonios"
      ref={ref}
      className="py-32 lg:py-40 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white"
    >
      {/* Ultra Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 25% 25%, rgba(168, 255, 0, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 75%, rgba(168, 255, 0, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 25% 75%, rgba(168, 255, 0, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 25%, rgba(168, 255, 0, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 25% 25%, rgba(168, 255, 0, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating Hearts */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#A8FF00] opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                scale: [0.5, 1, 0.5],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 10 + 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            >
              <Heart className="h-4 w-4" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ultra Header */}
        <motion.div 
          className="text-center mb-20"
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
            <Sparkles className="h-6 w-6 text-[#A8FF00]" />
            <span className="text-[#A8FF00] font-bold text-xl">Testimonios reales</span>
            <Heart className="h-6 w-6 text-[#A8FF00]" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#1A1A1A] mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          
          <motion.p 
            className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Miles de familias y empresas ya disfrutan de energía limpia y precios justos
          </motion.p>
        </motion.div>

        {/* Ultra Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 1, 
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
              <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:border-[#A8FF00] relative overflow-hidden h-full">
                
                {/* Animated Background Particles */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
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
                
                {/* Quote Icon */}
                <motion.div 
                  className="text-[#A8FF00] mb-6 relative z-10"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Quote className="h-10 w-10" />
                </motion.div>

                {/* Rating Stars */}
                <motion.div 
                  className="flex items-center space-x-1 mb-6 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 0.7 + index * 0.1 + i * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <motion.p 
                  className="text-gray-700 leading-relaxed mb-8 italic text-lg relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  "{testimonial.text}"
                </motion.p>

                {/* Customer Info */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(168, 255, 0, 0.3)",
                          "0 0 40px rgba(168, 255, 0, 0.6)",
                          "0 0 20px rgba(168, 255, 0, 0.3)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div>
                      <p className="font-bold text-[#1A1A1A] text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <motion.p 
                      className="text-[#A8FF00] font-bold text-xl"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      -{testimonial.savings}
                    </motion.p>
                    <p className="text-gray-500 text-sm">
                      ahorro anual
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#A8FF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  whileHover={{ scale: 1.02 }}
                />
              </div>

              {/* Floating Savings Badge */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-gradient-to-r from-[#A8FF00] to-[#96E600] text-[#1A1A1A] px-4 py-2 rounded-full font-bold text-sm opacity-0 group-hover:opacity-100 shadow-xl"
                initial={{ scale: 0, rotate: -45 }}
                whileHover={{ 
                  scale: 1, 
                  rotate: 0,
                  transition: { duration: 0.3 }
                }}
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                <TrendingUp className="h-4 w-4 inline mr-1" />
                Ahorro real
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Ultra Trust Indicators */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] rounded-3xl p-12 relative overflow-hidden border border-[#A8FF00]/20">
            {/* Animated Background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#A8FF00]/10 via-transparent to-[#A8FF00]/10"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl font-black text-white mb-6"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(168, 255, 0, 0.5)",
                    "0 0 40px rgba(168, 255, 0, 0.8)",
                    "0 0 20px rgba(168, 255, 0, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎯 Únete a miles de clientes satisfechos
              </motion.h3>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                La revolución energética ya comenzó. ¿Te apuntas?
              </motion.p>
              
              <motion.button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-[#A8FF00] to-[#96E600] text-[#1A1A1A] px-12 py-4 rounded-full font-black text-xl relative overflow-hidden group"
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
                <span className="relative z-10">Quiero ser el siguiente 🚀</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraTestimonials;