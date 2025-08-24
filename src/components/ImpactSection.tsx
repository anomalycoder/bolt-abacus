'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { Users, Clock, School } from 'lucide-react'

// Simple Animated Counter
function AnimatedCounter({ 
  value, 
  suffix = "", 
  duration = 2 
}: { 
  value: number
  suffix?: string 
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        // Simple easing
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
        
        setCount(Math.floor(easeOut(progress) * value))
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }
      
      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [inView, value, duration])

  return (
    <span ref={inViewRef}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const impactStats = [
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Mathematicians Created",
    description: "Students mastered abacus skills"
  },
  {
    icon: Clock,
    value: 2000, 
    suffix: "+",
    label: "Hours Taught",
    description: "Quality learning time delivered"
  },
  {
    icon: School,
    value: 5,
    suffix: "+",
    label: "Communities & Schools", 
    description: "Educational partnerships formed"
  }
]

const StatCard = ({ 
  stat, 
  delay 
}: { 
  stat: typeof impactStats[0]
  delay: number 
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-3xl p-8 backdrop-blur-sm shadow-2xl border border-[#FFE135]/30 hover:border-[#FFE135]/60 transition-all duration-500 group relative overflow-hidden"
      style={{
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 225, 53, 0.2)"
      }}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      {/* Simple background effects */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#FFE135]/5 via-gray-800/60 to-black/80" />
        
        <motion.div
          className="absolute inset-0 bg-[#FFE135]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        />

        {/* Static particles */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FFE135]/50 rounded-full"
            style={{
              left: `${30 + Math.random() * 40}%`,
              top: `${30 + Math.random() * 40}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ 
            delay: delay + 0.2,
            duration: 0.8,
            type: "spring",
            stiffness: 150
          }}
        >
          <motion.div
            className="w-18 h-18 bg-gradient-to-br from-[#FFE135] to-[#FFBF00] rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-[#FFE135]/30"
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          >
            <stat.icon className="w-9 h-9 text-black" />
          </motion.div>
        </motion.div>

        {/* Number */}
        <motion.div 
          className="text-5xl md:text-6xl font-black text-[#FFE135] mb-4 font-['Merriweather',serif]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { 
            opacity: 1, 
            scale: 1
          } : {}}
          transition={{ 
            delay: delay + 0.4, 
            duration: 0.8, 
            type: "spring", 
            stiffness: 120
          }}
        >
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
        </motion.div>

        {/* Label */}
        <motion.h3 
          className="text-xl font-bold text-white mb-3 group-hover:text-[#FFE135] transition-colors duration-300 font-['Merriweather',serif]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: delay + 0.6, duration: 0.6 }}
        >
          {stat.label}
        </motion.h3>

        {/* Description */}
        <motion.p 
          className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 font-['Inter',sans-serif]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: delay + 0.8, duration: 0.6 }}
        >
          {stat.description}
        </motion.p>

        {/* Simple decorative element */}
        <motion.div
          className="flex items-center justify-center mt-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: delay + 1, duration: 0.6 }}
        >
          <div className="w-2 h-2 bg-[#FFE135] rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function CleanImpactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section 
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(255, 225, 53, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 191, 0, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(0, 0, 0, 0.6) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #0f0f0f 50%, #1f1f1f 75%, #000000 100%)
        `
      }}
      id="impact"
    >
      {/* Simple background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(255, 225, 53, 0.15) 0%, rgba(255, 225, 53, 0.05) 70%, transparent 100%)'
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-56 h-56 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255, 191, 0, 0.12) 0%, rgba(255, 191, 0, 0.04) 50%, transparent 70%)'
          }}
        />

        {/* Static floating beads */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-4 bg-gradient-to-br from-[#FFE135] to-[#FFBF00] rounded-full shadow-lg border border-white/30 opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg) scaleX(0.7)`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-['Merriweather',serif]"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-[#FFE135] via-[#FFBF00] to-[#FFED4E] bg-clip-text text-transparent">
              Impact
            </span>
            <span className="inline-block ml-3 text-3xl">📊</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#FFE135] via-[#FFBF00] to-[#FFE135] mx-auto mb-8 rounded-full shadow-lg shadow-[#FFE135]/30"
            initial={{ width: 0, opacity: 0 }}
            animate={inView ? { width: 96, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
          />

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-['Inter',sans-serif]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Numbers that showcase the real difference we're making in mathematics education 
            and student success stories across communities.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {impactStats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              delay={index * 0.3}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
