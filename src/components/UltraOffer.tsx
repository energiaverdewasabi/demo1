import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Euro, Zap, Building, Award, TrendingUp, Gift, Sparkles, Star, Crown } from 'lucide-react';

const UltraOffer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const offers = [
    {
      icon: <Zap className="h-12 w-12" />,
      amount: "60",
      symbol: "€",
      title: "por traer tu luz",
      description: "Solo por cambiar tu suministro eléctrico a energía verde certificada",
      color: "from-yellow-400 via-orange-500 to-red-500",
      bgColor: "from-yellow-50 to-orange-100",
      particles: 25,
      delay: 0
    },
    {
      icon: <Zap className="h-12 w-12" />,
      amount: "60",
      symbol: "€",
      title: "por traer tu gas",
      description: "Complementa con gas natural y dobla tu ahorro inicial sin complicaciones",
      color: "from-blue-400 via-cyan-500 to-teal-500",
      bgColor: "from-blue-50 to-cyan-100",
      particles: 30,
      delay: 0.2
    },
    {
      icon: <Building className="h-12 w-12" />,
      amount: "30",
      symbol: "%",
      title: "descuento para pymes",
      description: "Si tienes un negocio, ahorra aún más en tu consumo energético mensual",
      color: "from-purple-400 via-pink-500 to-rose-500",
      bgColor: "from-purple-50 to-pink-100",
      particles: 35,
      delay: 0.4
    }
  ];

  return (
    <section 
      id="oferta"
      ref={ref}
      className="py-32 lg:py-40 relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]"
    >
      {/* Ultra Dynamic Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(168, 255, 0, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, rgba(168, 255, 0, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 20%, rgba(168, 255, 0, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 60% 80%, rgba(168, 255, 0, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 40%, rgba(168, 255, 0, 0.2) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Money Rain Effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#A8FF00] opacity-20 text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
              }}
              animate={{
                y: ["0vh", "110vh"],
                rotate: [0, 360],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear"
              }}
            >
              €
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ultra Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#A8FF00] to-[#96E600] blur-3xl opacity-20"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.1, 0.4, 0.1],
              x: [0, Math.random() * 300 - 150, 0],
              y: [0, Math.random() * 300 - 150, 0]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: i * 1.2,
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
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-[#A8FF00]/20 to-[#96E600]/20 backdrop-blur-2xl px-10 py-5 rounded-full mb-10 border border-[#A8FF00]/30 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              boxShadow: [
                "0 0 40px rgba(168, 255, 0, 0.3)",
                "0 0 80px rgba(168, 255, 0, 0.6)",
                "0 0 40px rgba(168, 255, 0, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Gift className="h-8 w-8 text-[#A8FF00]" />
            </motion.div>
            <span className="text-[#A8FF00] font-black text-2xl">Premio por cambiarte</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Crown className="h-8 w-8 text-[#A8FF00]" />
            </motion.div>
            
            {/* Sparkle Effects */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#A8FF00] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.25
                }}
              />
            ))}
          </motion.div>

          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-12 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            💶{' '}
            <motion.span 
              className="bg-gradient-to-r from-[#A8FF00] via-[#96E600] to-[#A8FF00] bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Cambiarte tiene premio
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            No solo ahorras en tu factura, también te premiamos por elegir energía limpia y sostenible
          </motion.p>
        </motion.div>

        {/* Ultra Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {offers.map((offer, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 1, 
                delay: offer.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -15,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 text-center hover:border-[#A8FF00] transition-all duration-500 hover:shadow-2xl overflow-hidden h-full">
                
                {/* Ultra Particle System */}
                <div className="absolute inset-0">
                  {[...Array(offer.particles)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#A8FF00] rounded-full opacity-0 group-hover:opacity-80"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.5, 0],
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: Math.random() * 3
                      }}
                    />
                  ))}
                </div>
                
                {/* Animated Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-25 rounded-3xl`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.25 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Icon Container with Ultra Effects */}
                <div className="relative mb-10">
                  <motion.div 
                    className={`bg-gradient-to-br ${offer.color} w-24 h-24 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl relative z-10`}
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      delay: index * 0.7
                    }}
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: 15,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {offer.icon}
                  </motion.div>
                  
                  {/* Multiple Orbital Rings */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 border-2 border-[#A8FF00] rounded-full opacity-0 group-hover:opacity-40"
                      style={{
                        width: `${130 + i * 25}%`,
                        height: `${130 + i * 25}%`,
                        left: `${-15 - i * 12.5}%`,
                        top: `${-15 - i * 12.5}%`,
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 6 + i * 2, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    />
                  ))}
                  
                  <motion.div 
                    className={`absolute -inset-8 bg-gradient-to-br ${offer.color} rounded-3xl opacity-0 group-hover:opacity-40 blur-3xl`}
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Ultra Amount Display */}
                <div className="relative mb-8">
                  <motion.div 
                    className="text-7xl font-black text-[#A8FF00] mb-4 relative"
                    animate={{ 
                      textShadow: [
                        "0 0 30px rgba(168, 255, 0, 0.5)",
                        "0 0 60px rgba(168, 255, 0, 0.8)",
                        "0 0 30px rgba(168, 255, 0, 0.5)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {offer.amount}
                    <motion.span 
                      className="text-5xl ml-2"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {offer.symbol}
                    </motion.span>
                    
                    {/* Glowing Effect */}
                    <motion.div 
                      className="absolute inset-0 text-7xl font-black text-[#A8FF00] blur-lg opacity-50"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {offer.amount}
                      <span className="text-5xl ml-2">{offer.symbol}</span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Title */}
                <motion.h3 
                  className="text-3xl font-bold text-white mb-6 group-hover:text-[#A8FF00] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {offer.title}
                </motion.h3>
                
                {/* Description */}
                <motion.p 
                  className="text-gray-300 text-xl leading-relaxed group-hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {offer.description}
                </motion.p>

                {/* Ultra Hover Border Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#A8FF00] transition-all duration-500"
                  whileHover={{
                    boxShadow: "0 0 80px rgba(168, 255, 0, 0.4)"
                  }}
                />
                
                {/* Corner Accents */}
                {[...Array(4)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className={`absolute w-6 h-6 bg-gradient-to-br ${offer.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500`}
                    style={{
                      top: i < 2 ? '1rem' : 'auto',
                      bottom: i >= 2 ? '1rem' : 'auto',
                      left: i % 2 === 0 ? '1rem' : 'auto',
                      right: i % 2 === 1 ? '1rem' : 'auto'
                    }}
                    whileHover={{ scale: 1.5 }}
                  />
                ))}
              </div>

              {/* Ultra Floating Money Icon */}
              <motion.div 
                className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-[#A8FF00] to-[#96E600] rounded-full flex items-center justify-center text-[#1A1A1A] opacity-0 group-hover:opacity-100 shadow-2xl"
                initial={{ scale: 0, rotate: -180 }}
                whileHover={{ 
                  scale: 1, 
                  rotate: 0,
                  transition: { duration: 0.5, type: "spring" }
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                <Euro className="h-10 w-10" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Ultra Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-[#A8FF00]/20 via-[#96E600]/20 to-[#A8FF00]/20 backdrop-blur-2xl border border-[#A8FF00]/30 rounded-3xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            
            {/* Ultra Background Animation */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#A8FF00]/10 via-transparent to-[#A8FF00]/10"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="flex items-center justify-center space-x-6 text-[#A8FF00] mb-8"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Award className="h-12 w-12" />
                </motion.div>
                <span className="font-black text-3xl">Garantía Total</span>
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Award className="h-12 w-12" />
                </motion.div>
              </motion.div>
              
              <motion.p 
                className="text-white text-2xl leading-relaxed mb-10"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.3)",
                    "0 0 40px rgba(255, 255, 255, 0.5)",
                    "0 0 20px rgba(255, 255, 255, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Energía 100% renovable, con garantía de origen y sin permanencia
              </motion.p>
              
              <div className="flex flex-wrap justify-center gap-8 text-[#A8FF00] font-bold text-xl">
                {[
                  { icon: TrendingUp, text: "Sin riesgo" },
                  { icon: Zap, text: "100% Verde" },
                  { icon: Award, text: "Certificado" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.3 
                    }}
                  >
                    <item.icon className="h-8 w-8" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ultra Total Savings Calculator */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] rounded-3xl p-16 border border-[#A8FF00]/20 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-[#A8FF00] opacity-10 text-4xl font-black"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [0.5, 1, 0.5],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: Math.random() * 10 + 5,
                    repeat: Infinity,
                    delay: Math.random() * 5
                  }}
                >
                  €
                </motion.div>
              ))}
            </div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-4xl font-black text-white mb-10"
                animate={{ 
                  textShadow: [
                    "0 0 30px rgba(168, 255, 0, 0.5)",
                    "0 0 60px rgba(168, 255, 0, 0.8)",
                    "0 0 30px rgba(168, 255, 0, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🧮 Calcula tu ahorro total
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center text-center mb-12">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-6xl font-black text-[#A8FF00] mb-4">60€</div>
                  <div className="text-gray-300 text-xl">Premio luz</div>
                </motion.div>
                
                <motion.div 
                  className="text-4xl text-white font-black flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  +
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="text-6xl font-black text-[#A8FF00] mb-4">60€</div>
                  <div className="text-gray-300 text-xl">Premio gas</div>
                </motion.div>
                
                <motion.div 
                  className="text-4xl text-white font-black flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  =
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <div className="text-6xl font-black text-[#A8FF00] mb-4">120€</div>
                  <div className="text-gray-300 text-xl">Total premios</div>
                </motion.div>
              </div>
              
              <motion.div 
                className="border-t border-[#A8FF00]/30 pt-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 2 }}
              >
                <motion.div 
                  className="text-8xl font-black text-[#A8FF00] mb-6"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    textShadow: [
                      "0 0 50px rgba(168, 255, 0, 0.5)",
                      "0 0 100px rgba(168, 255, 0, 0.8)",
                      "0 0 50px rgba(168, 255, 0, 0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  120€
                </motion.div>
                <div className="text-2xl text-white">Total en premios por cambiarte</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraOffer;