'use client'

import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/navigation'
import { LogIn, Mail, Lock, Eye, EyeOff, ArrowLeft, Sparkles, Star } from 'lucide-react'

export default function LoginPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  })

  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add authentication logic here
    console.log('Login attempt:', { email, password })
    // On successful login:
    // router.push('/dashboard')
  }

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

        {/* Enhanced floating beads */}
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

      {/* Back Button */}
      <motion.button
        className="absolute top-6 left-6 z-50 flex items-center space-x-2 text-gray-300 hover:text-[#FFE135] transition-colors duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push('/')}
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Back to Home</span>
      </motion.button>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Branding */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Logo */}
          <motion.div 
            className="flex items-center justify-center lg:justify-start mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="text-4xl mr-3">🧮</div>
            <span className="text-3xl font-black bg-gradient-to-r from-[#FFE135] via-[#FFBF00] to-[#FFED4E] bg-clip-text text-transparent">
              BoltAbacus
            </span>
          </motion.div>

          {/* Welcome Text */}
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-['Merriweather',serif] filter drop-shadow-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="text-white font-bold mb-2">Welcome back to</div>
            <motion.div 
              className="bg-gradient-to-r from-[#FFE135] via-[#FFBF00] via-[#FFED4E] to-[#FFE135] bg-clip-text text-transparent font-bold filter drop-shadow-sm"
              style={{ backgroundSize: '200% 100%' }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
              }}
              transition={{
                backgroundPosition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
              }}
            >
              your learning journey
            </motion.div>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-lg text-gray-300 leading-relaxed font-['Inter',sans-serif] max-w-lg mx-auto lg:mx-0 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Continue your mathematical excellence with BoltAbacus. Sign in to access your personalized dashboard.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-6 items-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Star className="w-5 h-5 mr-2 text-[#FFE135] filter drop-shadow-sm" />
              <span className="font-bold text-sm filter drop-shadow-sm">Trusted by 10k+ Students</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0, x: 100, rotateY: 15, scale: 0.9 }}
          animate={inView ? { opacity: 1, x: 0, rotateY: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.div 
            className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm shadow-2xl rounded-3xl border-t-4 border-[#FFE135] p-8 ring-1 ring-[#FFE135]/30"
            style={{
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 225, 53, 0.2), inset 0 1px 0 rgba(255, 225, 53, 0.1)"
            }}
            whileHover={{ 
              y: -5,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            {/* Form Header */}
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-[#FFE135] to-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <LogIn className="w-8 h-8 text-black" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white font-['Merriweather',serif] mb-2">Sign In</h2>
              <p className="text-gray-400 text-sm font-['Inter',sans-serif]">Access your BoltAbacus account</p>
            </motion.div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2 font-['Inter',sans-serif]">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#FFE135]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-black/80 border border-[#FFE135]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFE135] focus:ring-2 focus:ring-[#FFE135]/20 transition-all duration-300 font-['Inter',sans-serif]"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2 font-['Inter',sans-serif]">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#FFE135]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 bg-black/80 border border-[#FFE135]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFE135] focus:ring-2 focus:ring-[#FFE135]/20 transition-all duration-300 font-['Inter',sans-serif]"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-[#FFE135] transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </motion.div>

              {/* Remember Me & Forgot Password */}
              <motion.div 
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#FFE135] bg-black border-[#FFE135]/30 rounded focus:ring-[#FFE135]/20 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-400 font-['Inter',sans-serif]">Remember me</span>
                </label>
                <a href="#" className="text-sm text-[#FFE135] hover:text-[#FFBF00] transition-colors font-['Inter',sans-serif]">
                  Forgot password?
                </a>
              </motion.div>

              {/* Sign In Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FFE135] to-[#FFBF00] text-black py-3 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-[#FFE135]/30 transition-all duration-300 font-['Inter',sans-serif] border border-[#FFE135]/20"
                style={{ backgroundSize: '200% 100%' }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -2,
                  boxShadow: "0 15px 35px rgba(255, 225, 53, 0.4)",
                  backgroundPosition: '100% 0%'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Sign In to BoltAbacus
              </motion.button>

              {/* Sign Up Link */}
              <motion.div 
                className="text-center pt-4"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <p className="text-gray-400 text-sm font-['Inter',sans-serif]">
                  Don't have an account?{' '}
                  <a href="/signup" className="text-[#FFE135] hover:text-[#FFBF00] transition-colors font-medium">
                    Sign up here
                  </a>
                </p>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
