'use client'

import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, BookOpen, Phone, Star, Timer, Trophy, Target, Sparkles } from 'lucide-react'

const ClassCard = ({
  title, progress, status, avgTime, delay, rating, level, className = ""
}: {
  title: string, progress: number, status: string, avgTime: string, delay: number, rating: string, level: string, className?: string
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      className={`w-72 h-80 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm shadow-2xl rounded-2xl border-t-4 border-[#FFE135] p-6 ring-1 ring-[#FFE135]/30 ${className}`}
      style={{
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 225, 53, 0.2), inset 0 1px 0 rgba(255, 225, 53, 0.1)"
      }}
      initial={{ opacity: 0, y: 60, rotateY: 15, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0, scale: 1 } : {}}
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
        rotateY: -5,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <motion.h3 
          className="text-lg font-bold text-[#FFE135] font-['Merriweather',serif] leading-tight flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: delay + 0.2 }}
        >
          <BookOpen size={18} className="text-[#FFBF00]" />
          {title}
        </motion.h3>
        <motion.span 
          className="text-black text-xs font-semibold bg-[#FFE135]/90 px-2 py-1 rounded-full border border-[#FFE135]/50 shadow-sm"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: delay + 0.4, type: "spring" }}
        >
          {progress}% Complete
        </motion.span>
      </div>

      <motion.p 
        className="text-sm text-gray-300 mb-4 font-medium font-['Inter',sans-serif]"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: delay + 0.3 }}
      >
        {level}
      </motion.p>
      
      <div className="bg-gray-800/60 rounded-full h-3 mb-4 overflow-hidden shadow-inner border border-gray-700/50">
        <motion.div 
          className="bg-gradient-to-r from-[#FFE135] via-[#FFBF00] to-[#FFE135] rounded-full h-full shadow-sm"
          initial={{ width: 0 }}
          animate={inView ? { width: `${progress}%` } : {}}
          transition={{ delay: delay + 0.5, duration: 1.2, ease: "easeOut" }}
        />
      </div>

      <motion.div 
        className="flex items-center justify-between mb-3"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: delay + 0.6 }}
      >
        <span className="text-sm text-gray-300 font-medium font-['Inter',sans-serif]">
          Status: <span className="font-semibold text-[#FFE135]">{status}</span>
        </span>
        <motion.div 
          className="text-[#FFE135] text-lg drop-shadow-sm"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ✅
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="flex items-center justify-between mb-5 text-sm text-gray-300 font-['Inter',sans-serif]"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: delay + 0.7 }}
      >
        <span className="flex items-center gap-1 font-medium">
          <Timer size={16} className="text-[#FFE135]" />
          Avg: {avgTime}
        </span>
        <span className="flex items-center gap-1 text-[#FFE135] font-medium">
          <Star size={16} className="fill-current" />
          {rating}
        </span>
      </motion.div>

      <motion.div 
        className="flex gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: delay + 0.8 }}
      >
        <motion.div 
          className="bg-gradient-to-r from-[#FFE135] to-[#FFBF00] text-black px-4 py-2 rounded-lg font-semibold text-sm flex-1 text-center font-['Inter',sans-serif] cursor-pointer shadow-md border border-[#FFE135]/20"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 225, 53, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          Continue
        </motion.div>
        <motion.div 
          className="border-2 border-[#FFE135] text-[#FFE135] px-4 py-2 rounded-lg font-semibold text-sm flex-1 text-center font-['Inter',sans-serif] cursor-pointer shadow-sm hover:bg-[#FFE135] hover:text-black transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Report
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  })

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

  return (
    <section 
      ref={ref}
      className="relative w-full h-screen flex items-center overflow-hidden"
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
        {/* Dynamic gradient orbs */}
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

        {/* Enhanced floating beads with better animations */}
        {[...Array(12)].map((_, i) => {
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
              className={`absolute w-4 h-6 ${beadColor} shadow-xl border border-white/60 rounded-full`}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                transform: `rotate(${Math.random() * 360}deg) scaleX(0.7)`,
                filter: 'drop-shadow(0 4px 6px rgba(255, 225, 53, 0.2))'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                x: [0, Math.sin(i) * 10, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 6,
                ease: "easeInOut"
              }}
            />
          )
        })}

        {/* Floating sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
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
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            <Sparkles size={12} className="text-[#FFE135]" />
          </motion.div>
        ))}
      </div>

      {/* Left Content with enhanced animations - text moved down slightly */}
      <div className="relative z-20 flex-1 px-6 sm:px-12 pt-16">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-['Merriweather',serif] filter drop-shadow-sm"
          initial={{ opacity: 0, x: -100, rotateY: -15 }}
          animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Animated text lines */}
          <motion.div 
            className="text-white font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The perfect app to
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-r from-[#FFE135] via-[#FFBF00] via-[#FFED4E] to-[#FFE135] bg-clip-text text-transparent font-bold filter drop-shadow-sm relative"
            style={{ backgroundSize: '200% 100%' }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={inView ? { 
              opacity: 1, 
              scale: 1, 
              y: 0,
              backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
            } : {}}
            transition={{ 
              delay: 0.4, 
              duration: 0.8,
              backgroundPosition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            learn and master
          </motion.div>
          
          <div className="text-white font-bold flex items-center justify-center lg:justify-start">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              abacus
            </motion.span>
            <motion.span 
              className="inline-block text-3xl sm:text-4xl ml-2"
              initial={{ rotate: -30, scale: 0, y: 20 }}
              animate={inView ? { rotate: 0, scale: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.8, 
                duration: 0.8, 
                type: "spring", 
                stiffness: 200,
                damping: 15
              }}
              whileHover={{ 
                rotate: [0, -10, 10, -5, 0], 
                scale: [1, 1.1, 1],
                transition: { duration: 0.6 }
              }}
            >
              🧮
            </motion.span>
          </div>
        </motion.h1>

        {/* Enhanced Buttons */}
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button 
            className="relative bg-gradient-to-r from-[#FFE135] via-[#FFBF00] to-[#FFE135] text-black px-6 sm:px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center font-['Inter',sans-serif] border border-black/10 filter drop-shadow-sm overflow-hidden"
            style={{ backgroundSize: '200% 100%' }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(255, 225, 53, 0.4)",
              y: -3,
              backgroundPosition: '100% 0%'
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
            }}
            transition={{
              backgroundPosition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <BookOpen className="w-5 h-5 mr-2 relative z-10" />
            <span className="relative z-10">Explore Curriculum</span>
          </motion.button>
          
          <motion.button 
            className="relative bg-gray-900/90 backdrop-blur-sm border-2 border-[#FFE135] text-[#FFE135] px-6 sm:px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-[#FFE135] hover:text-black transition-all duration-300 font-['Inter',sans-serif] shadow-sm overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: "0 15px 30px rgba(255, 225, 53, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#FFE135]"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ borderRadius: '12px' }}
            />
            <Phone className="w-5 h-5 mr-2 relative z-10" />
            <span className="relative z-10">Contact Us</span>
          </motion.button>
        </motion.div>

        {/* Enhanced Trust Badges */}
        <motion.div
          className="mt-16 flex flex-wrap gap-4 sm:gap-6 items-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          {[
            { icon: Star, text: "4.9/5 Rating" },
            { icon: Trophy, text: "Award-Winning" },
            { icon: Target, text: "Proven Results" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center hover:text-[#FFE135] transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
            >
              <item.icon className="w-5 h-5 mr-2 text-[#FFE135] filter drop-shadow-sm" />
              <span className="font-bold text-sm filter drop-shadow-sm">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Right Side with enhanced semicircle */}
      <div className="relative flex-1 h-full flex items-center justify-center">
        <motion.div 
          className="absolute right-0 top-0 w-[100vh] h-[100vh] rounded-l-full shadow-2xl overflow-hidden"
          style={{
            backgroundImage: `url('/background.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#FFE135]/10 via-transparent via-transparent to-[#FFBF00]/10"
            animate={{
              background: [
                'linear-gradient(135deg, rgba(255, 225, 53, 0.1) 0%, transparent 50%, rgba(255, 191, 0, 0.1) 100%)',
                'linear-gradient(135deg, rgba(255, 191, 0, 0.1) 0%, transparent 50%, rgba(255, 225, 53, 0.1) 100%)',
                'linear-gradient(135deg, rgba(255, 225, 53, 0.1) 0%, transparent 50%, rgba(255, 191, 0, 0.1) 100%)'
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Static Cards - Back to original positions */}
        <div className="relative z-30 w-full h-full">
          <ClassCard
            title="Beginner Course"
            progress={85}
            status="Active"
            avgTime="15m"
            delay={0.2}
            rating="4.8"
            level="Level 1 - Basics of Abacus"
            className="absolute right-[12%] top-[18%]"
          />

          <ClassCard
            title="Advanced Course"
            progress={67}
            status="In Progress"
            avgTime="22m"
            delay={0.4}
            rating="4.6"
            level="Level 3 - Speed & Accuracy"
            className="absolute left-[18%] bottom-[15%] rotate-[-3deg]"
          />
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => {
            const nextSection = document.getElementById('next-section') || 
                               document.querySelector('section:nth-child(2)') ||
                               document.body
            nextSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span 
            className="text-sm mb-3 font-bold text-gray-300 group-hover:text-[#FFE135] transition-colors duration-300 font-['Inter',sans-serif] tracking-wider filter drop-shadow-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            EXPLORE MORE
          </motion.span>
          <motion.div
            className="w-10 h-10 border-2 border-[#FFE135] rounded-full flex items-center justify-center group-hover:border-[#FFBF00] transition-colors duration-300 shadow-lg relative overflow-hidden"
            whileHover={{ 
              scale: 1.2, 
              y: -4,
              boxShadow: "0 12px 25px rgba(255, 225, 53, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#FFE135]/20 to-[#FFBF00]/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ borderRadius: '50%' }}
            />
            <ChevronDown
              size={20}
              className="text-[#FFE135] group-hover:text-[#FFBF00] transition-colors duration-300 filter drop-shadow-sm relative z-10"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
