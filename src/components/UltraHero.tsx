import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Shield, Heart, TrendingDown, Sparkles, Star, Atom } from 'lucide-react';

const UltraHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const impactWords = ["cuánto te clavan", "qué te cobran", "por qué pagas tanto", "cuánto te roban"];

  useEffect(() => {
    setIsLoaded(true);
    
    // Word rotation
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % impactWords.length);
    }, 3000);
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateXValue = (e.clientY - centerY) / rect.height * -5;
        const rotateYValue = (e.clientX - centerX) / rect.width * 5;
        
        rotateX.set(rotateXValue);
        rotateY.set(rotateYValue);
        
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(wordInterval);
    };
  }, [rotateX, rotateY]);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const floatingElements = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <motion.section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity, scale }}
    >
      {/* Ultra Dynamic Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(168, 255, 0, 0.25) 0%, 
                rgba(10, 10, 10, 0.9) 30%, 
                rgba(10, 10, 10, 1) 70%),
              linear-gradient(135deg, 
                rgba(168, 255, 0, 0.1) 0%, 
                rgba(10, 10, 10, 1) 50%, 
                rgba(168, 255, 0, 0.05) 100%)
            `
          }}
        />
        
        {/* Animated Mesh Gradient */}
        <motion.div 
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(168, 255, 0, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(168, 255, 0, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(168, 255, 0, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(168, 255, 0, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Ultra Floating Particles */}
      <div className="absolute inset-0">
        {floatingElements.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#A8FF00]"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Geometric Neural Network */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="neural-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <motion.path 
              d="M 10 0 L 0 0 0 10" 
              fill="none" 
              stroke="#A8FF00" 
              strokeWidth="0.5"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#neural-grid)" />
      </svg>

      {/* Ultra Energy Orbs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#A8FF00] to-[#96E600] blur-2xl"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.1, 0.3, 0.1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          {/* Ultra Animated Logo */}
          <motion.div 
            className="mb-12"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative inline-block">
              <motion.div 
                className="bg-gradient-to-r from-[#A8FF00] to-[#96E600] p-6 rounded-3xl shadow-2xl"
                animate={{ 
                  boxShadow: [
                    "0 0 50px rgba(168, 255, 0, 0.5)",
                    "0 0 100px rgba(168, 255, 0, 0.8)",
                    "0 0 50px rgba(168, 255, 0, 0.5)"
                  ],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Atom className="h-16 w-16 text-[#1A1A1A]" />
              </motion.div>
              
              {/* Orbital Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-[#A8FF00] rounded-full opacity-30"
                  style={{
                    width: `${120 + i * 40}%`,
                    height: `${120 + i * 40}%`,
                    left: `${-10 - i * 20}%`,
                    top: `${-10 - i * 20}%`
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 10 + i * 5, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Ultra Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-8xl font-black text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              ¿Pagas la luz sin saber{' '}
            </motion.span>
            <br />
            <div className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  className="bg-gradient-to-r from-[#A8FF00] via-[#96E600] to-[#A8FF00] bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -50, rotateX: 90 }}
                  transition={{ duration: 0.5 }}
                >
                  {impactWords[currentWord]}
                </motion.span>
              </AnimatePresence>
              <motion.div 
                className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-[#A8FF00] to-[#96E600] rounded-full"
                animate={{ 
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <motion.span 
              className="text-8xl ml-4"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ?
            </motion.span>
          </motion.h1>

          {/* Ultra Subtitle */}
          <motion.div 
            className="text-xl sm:text-3xl text-gray-300 mb-16 leading-relaxed max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.p 
              className="mb-6"
              whileInView={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Bienvenido a{' '}
              <motion.strong 
                className="text-5xl font-black bg-gradient-to-r from-[#A8FF00] via-[#96E600] to-[#A8FF00] bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0%", "100%", "0%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Energía Verde Wasabi
              </motion.strong>
            </motion.p>
            <motion.p 
              className="text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              energía 100% renovable, sin trampas, sin robots y hasta{' '}
              <motion.span 
                className="relative inline-block"
                whileHover={{ scale: 1.1 }}
              >
                <motion.strong 
                  className="text-[#A8FF00] text-5xl font-black"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(168, 255, 0, 0.5)",
                      "0 0 40px rgba(168, 255, 0, 0.8)",
                      "0 0 20px rgba(168, 255, 0, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  120 € al año
                </motion.strong>
                <motion.div 
                  className="absolute -inset-2 bg-[#A8FF00] opacity-20 blur-xl rounded-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.span>
              {' '}por cambiarte con nosotros.
            </motion.p>
          </motion.div>

          {/* Ultra Animated Benefits */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {[
              { icon: Shield, text: "Sin permanencia", color: "from-green-400 to-emerald-500" },
              { icon: Heart, text: "100% renovable", color: "from-red-400 to-pink-500" },
              { icon: TrendingDown, text: "Precios justos", color: "from-blue-400 to-cyan-500" }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 + index * 0.2 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl border border-white/20 hover:border-[#A8FF00] transition-all duration-500 hover:bg-[#A8FF00]/20 overflow-hidden">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-r ${benefit.color}`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <benefit.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <span className="text-white font-bold text-lg group-hover:text-[#A8FF00] transition-colors">
                    {benefit.text}
                  </span>
                </div>
                
                {/* Hover Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#A8FF00]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Ultra Epic CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.button
              onClick={scrollToContact}
              className="group relative inline-flex items-center space-x-4 bg-gradient-to-r from-[#A8FF00] to-[#96E600] text-[#1A1A1A] px-16 py-8 rounded-full text-3xl font-black overflow-hidden"
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
              {/* Animated Background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#96E600] to-[#A8FF00]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Button Content */}
              <motion.span 
                className="relative z-10 text-3xl"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(26, 26, 26, 0.5)",
                    "0 0 20px rgba(26, 26, 26, 0.8)",
                    "0 0 10px rgba(26, 26, 26, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👉 Quiero pagar lo justo
              </motion.span>
              
              <motion.div
                animate={{ x: [0, 10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="relative z-10 h-10 w-10" />
              </motion.div>
              
              {/* Ripple Effects */}
              <motion.div 
                className="absolute inset-0 bg-white/30 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>

          {/* Ultra Trust Indicators */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-lg">
              {["Sin compromiso", "Sin letra pequeña", "Atención humana"].map((text, index) => (
                <motion.span 
                  key={index}
                  className="relative px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#A8FF00]/50 hover:text-[#A8FF00] transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.7 + index * 0.1 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-[#A8FF00] opacity-0 hover:opacity-10 rounded-full transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                  <span className="relative z-10">{text}</span>
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-[#A8FF00] rounded-full"
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.5 
                    }}
                  />
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Ultra Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.div 
          className="relative cursor-pointer"
          onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="w-10 h-16 border-2 border-[#A8FF00] rounded-full flex justify-center"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(168, 255, 0, 0.3)",
                "0 0 40px rgba(168, 255, 0, 0.6)",
                "0 0 20px rgba(168, 255, 0, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-2 h-6 bg-[#A8FF00] rounded-full mt-3"
              animate={{ 
                y: [0, 10, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          {/* Orbital Rings */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border border-[#A8FF00] rounded-full opacity-20"
              style={{
                width: `${120 + i * 30}%`,
                height: `${120 + i * 30}%`,
                left: `${-10 - i * 15}%`,
                top: `${-10 - i * 15}%`
              }}
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 8 + i * 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, delay: i * 0.5 }
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default UltraHero;