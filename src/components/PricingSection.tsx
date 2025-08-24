'use client'
import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Users, Clock, Calendar, HeadphonesIcon, Trophy, Sparkles, Star } from 'lucide-react'

export default function PricingSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Mouse tracking for parallax effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set((clientX - innerWidth / 2) * 0.1)
      mouseY.set((clientY - innerHeight / 2) * 0.1)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const pricingPlans = [
    {
      name: "Super 30 Edition",
      levels: "1-5 Levels",
      levelDescription: "Foundation to Intermediate",
      students: "30 students per batch",
      sessions: "4 sessions (2 hours/month)",
      duration: "15 months",
      support: "Homework support (Weekdays 5–8 pm)",
      popular: false,
      features: [
        "30 students per batch",
        "4 sessions (2 hours/month)",
        "Duration: 15 months",
        "Homework support (Weekdays 5–8 pm)",
      ]
    },
    {
      name: "15 Rangers Squad",
      levels: "6-10 Levels",
      levelDescription: "Advanced to Expert",
      students: "15 students per batch",
      sessions: "4 sessions (2 hours/month)",
      duration: "15 months",
      support: "Homework support (Weekdays 5–8 pm)",
      popular: true,
      features: [
        "15 students per batch",
        "4 sessions (2 hours/month)",
        "Duration: 15 months",
        "Homework support (Weekdays 5–8 pm)",
      ]
    },
    {
      name: "Perfect X",
      levels: "1-10 Levels",
      levelDescription: "Complete Mastery Path",
      students: "10 students per batch",
      sessions: "4 sessions (2 hours/month)",
      duration: "15 months",
      support: "Homework support (Weekdays 5–8 pm)",
      popular: false,
      features: [
        "10 students per batch",
        "4 sessions (2 hours/month)",
        "Duration: 15 months",
        "Homework support (Weekdays 5–8 pm)",
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section 
      id="pricing" 
      className="relative py-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(255, 225, 53, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 191, 0, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(0, 0, 0, 0.8) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #0f0f0f 50%, #1f1f1f 75%, #000000 100%)
        `
      }}
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic gradient orbs with mouse interaction */}
        <motion.div 
          className="absolute top-24 left-12 w-40 h-40 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 225, 53, 0.3) 0%, rgba(255, 225, 53, 0.1) 70%, transparent 100%)',
            x: springX,
            y: springY
          }}
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-24 right-24 w-56 h-56 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 191, 0, 0.25) 0%, rgba(255, 191, 0, 0.08) 70%, transparent 100%)',
            x: springX,
            y: springY,
            scale: 0.8
          }}
          animate={{ 
            scale: [0.8, 1, 0.8], 
            opacity: [0.15, 0.3, 0.15],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.div 
          className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.05) 70%, transparent 100%)',
            x: springX,
            y: springY,
            scale: 1.2
          }}
          animate={{ 
            scale: [1.2, 1.5, 1.2], 
            opacity: [0.1, 0.25, 0.1],
            rotate: [0, 270, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Enhanced floating beads with better animations */}
        {[...Array(15)].map((_, i) => {
          const colors = [
            'bg-gradient-to-br from-[#FFE135] to-[#FFBF00]', 
            'bg-gradient-to-br from-[#FFBF00] to-[#FFA500]', 
            'bg-gradient-to-br from-[#FFE135] to-[#FFED4E]', 
            'bg-gradient-to-br from-[#FFD700] to-[#FFE135]',
            'bg-gradient-to-br from-[#FFED4E] to-[#FFE135]'
          ]
          const beadColor = colors[i % colors.length]
          
          return (
            <motion.div
              key={i}
              className={`absolute w-3 h-5 ${beadColor} shadow-xl border border-white/60 rounded-full`}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                transform: `rotate(${Math.random() * 360}deg) scaleX(0.7)`,
                filter: 'drop-shadow(0 4px 6px rgba(255, 225, 53, 0.2))'
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
                y: [0, -25, 0],
                rotate: [0, 180, 360],
                x: [0, Math.sin(i) * 15, 0]
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeInOut"
              }}
            />
          )
        })}

        {/* Floating sparkles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          >
            <Sparkles size={10 + Math.random() * 6} className="text-[#FFE135]" />
          </motion.div>
        ))}

        {/* Additional floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.8, 1.4, 0.8],
              opacity: [0.4, 1, 0.4],
              rotate: [0, 360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          >
            <Star size={8 + Math.random() * 4} className="text-[#FFD700] fill-current" />
          </motion.div>
        ))}

        {/* Animated gradient lines */}
        <motion.div 
          className="absolute top-1/4 left-20 right-20 h-0.5 bg-gradient-to-r from-transparent via-[#FFE135]/20 to-transparent rounded-full"
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scaleX: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-32 right-32 h-0.5 bg-gradient-to-r from-transparent via-[#FFBF00]/15 to-transparent rounded-full"
          animate={{
            opacity: [0.08, 0.3, 0.08],
            scaleX: [1, 1.15, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Merriweather',serif] filter drop-shadow-lg"
            style={{ backgroundSize: '200% 100%' }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={inView ? { 
              opacity: 1, 
              scale: 1, 
              y: 0,
              backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
            } : {}}
            transition={{ 
              delay: 0.2, 
              duration: 0.8,
              backgroundPosition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <span className="bg-gradient-to-r from-[#FFE135] via-[#FFBF00] via-[#FFED4E] to-[#FFE135] bg-clip-text text-transparent">
              Choose Your Path
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-['Inter',sans-serif] filter drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Select the perfect learning experience tailored to your goals and skill level
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 backdrop-blur-sm ${
                plan.popular 
                  ? 'bg-gradient-to-b from-gray-900/95 to-black/95 border-2 border-[#FFE135]/40 shadow-2xl shadow-[#FFE135]/20 scale-105' 
                  : 'bg-gradient-to-b from-gray-900/80 to-black/90 border border-gray-700/50 hover:border-[#FFE135]/30 hover:shadow-xl hover:shadow-[#FFE135]/10'
              }`}
              style={{
                boxShadow: plan.popular 
                  ? "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 225, 53, 0.3), inset 0 1px 0 rgba(255, 225, 53, 0.1)"
                  : "0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 225, 53, 0.1), inset 0 1px 0 rgba(255, 225, 53, 0.05)"
              }}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: plan.popular ? 1.05 : 1.03,
                rotateY: -2,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg border border-green-400/30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 500 }}
                  style={{
                    filter: 'drop-shadow(0 4px 6px rgba(34, 197, 94, 0.3))'
                  }}
                >
                  Most Popular
                </motion.div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2 font-['Merriweather',serif] filter drop-shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {plan.name}
                </motion.h3>
                <div className="mb-2">
                  <motion.div 
                    className="flex items-center justify-center space-x-2 mb-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                  >
                    <Trophy className="w-6 h-6 text-[#FFE135] filter drop-shadow-sm" />
                    <span className="text-3xl font-bold text-[#FFE135] filter drop-shadow-sm">{plan.levels}</span>
                  </motion.div>
                  <motion.span 
                    className="text-sm text-gray-400 font-['Inter',sans-serif]"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {plan.levelDescription}
                  </motion.span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + featureIndex * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-[#FFE135] to-[#FFBF00] rounded-full flex items-center justify-center shadow-sm">
                      <Check size={12} className="text-black font-bold" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed font-['Inter',sans-serif]">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gradient-to-r from-[#FFE135]/8 to-[#FFBF00]/8 rounded-2xl border border-[#FFE135]/15 backdrop-blur-sm">
                <div className="text-center">
                  <Users className="w-6 h-6 text-[#FFE135] mx-auto mb-2 filter drop-shadow-sm" />
                  <div className="text-xs text-gray-400 font-['Inter',sans-serif]">Batch Size</div>
                  <div className="text-sm font-semibold text-white font-['Inter',sans-serif]">{plan.students.split(' ')[0]} Students</div>
                </div>
                <div className="text-center">
                  <Clock className="w-6 h-6 text-[#FFE135] mx-auto mb-2 filter drop-shadow-sm" />
                  <div className="text-xs text-gray-400 font-['Inter',sans-serif]">Duration</div>
                  <div className="text-sm font-semibold text-white font-['Inter',sans-serif]">{plan.duration}</div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                className={`relative w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 font-['Inter',sans-serif] overflow-hidden ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#FFE135] to-[#FFBF00] text-black shadow-lg shadow-[#FFE135]/30 border border-[#FFE135]/20'
                    : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white border border-[#FFE135]/20 hover:border-[#FFE135]/40'
                }`}
                style={{ backgroundSize: '200% 100%' }}
                whileHover={{ 
                  scale: 1.02,
                  y: -2,
                  boxShadow: plan.popular 
                    ? "0 15px 35px rgba(255, 225, 53, 0.4)" 
                    : "0 10px 25px rgba(255, 225, 53, 0.2)",
                  backgroundPosition: plan.popular ? '100% 0%' : '0% 0%'
                }}
                whileTap={{ scale: 0.98 }}
                animate={plan.popular ? {
                  backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
                } : {}}
                transition={plan.popular ? {
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                } : {}}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">Get Started</span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.p 
            className="text-gray-400 mb-6 font-['Inter',sans-serif] filter drop-shadow-sm"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.0 }}
          >
            Need help choosing the right level? Our experts are here to guide you.
          </motion.p>
          <motion.button
            className="px-8 py-3 rounded-full border-2 border-[#FFE135]/40 text-[#FFE135] hover:bg-[#FFE135]/10 transition-all duration-300 backdrop-blur-sm font-['Inter',sans-serif] font-bold shadow-sm hover:shadow-[#FFE135]/20"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 10px 20px rgba(255, 225, 53, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2 }}
          >
            Compare Levels
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
