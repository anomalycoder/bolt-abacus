'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    text: "I can't praise BoltAbacus enough. Their program is a game-changer for young minds. My child now approaches math with enthusiasm, thanks to their innovative teaching methods.",
    author: "Alex K.",
    role: "Proud Parent",
    avatar: "👨‍👩‍👧",
    rating: 5
  },
  {
    text: "The interactive lessons and gamified approach have made learning fun and effective. My students show remarkable improvement in their calculation speed and accuracy.",
    author: "Priya Sharma",
    role: "Math Educator",
    avatar: "👩‍🏫",
    rating: 5
  },
  {
    text: "BoltAbacus provides a nurturing platform that truly supports every learner's journey. The progressive curriculum design is outstanding.",
    author: "Rahul Mehta",
    role: "Education Specialist",
    avatar: "👨‍💼",
    rating: 5
  },
  {
    text: "The personalized approach and detailed progress tracking helped my daughter build confidence in mathematics. She's now performing exceptionally well in school.",
    author: "Meera Patel",
    role: "Mother of 8-year-old",
    avatar: "👩‍👧",
    rating: 5
  }
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 6000)
    
    return () => clearInterval(interval)
  }, [currentIndex])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 20 : -20
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 400 : -400,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 20 : -20
    })
  }

  return (
    <section 
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(255, 225, 53, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 191, 0, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(0, 0, 0, 0.6) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #0f0f0f 50%, #1f1f1f 75%, #000000 100%)
        `
      }}
      id="testimonials"
    >
      {/* ANIMATED BEADS BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating abacus beads with bright golden colors */}
        {[...Array(18)].map((_, i) => {
          const colors = [
            'bg-gradient-to-br from-[#FFE135] to-[#FFBF00]', 
            'bg-gradient-to-br from-[#FFBF00] to-[#FFA500]', 
            'bg-gradient-to-br from-[#FFE135] to-[#FFED4E]', 
            'bg-gradient-to-br from-[#FFD700] to-[#FFE135]',
            'bg-gradient-to-br from-[#FFED4E] to-[#FFE135]'
          ]
          const beadColor = colors[i % colors.length]
          const size = 3 + Math.random() * 3 // 3-6px (smaller for testimonials)
          const startX = Math.random() * 100
          const startY = Math.random() * 100
          
          return (
            <motion.div
              key={i}
              className={`absolute ${beadColor} rounded-full shadow-lg border border-white/40 z-10`}
              style={{
                width: `${size}px`,
                height: `${size * 1.4}px`, // Oval shape like real abacus beads
                left: `${startX}%`,
                top: `${startY}%`,
                transform: 'scaleX(0.8)', // Make it oval
                filter: 'drop-shadow(0 2px 4px rgba(255, 225, 53, 0.2))',
                opacity: 0.6
              }}
              animate={{
                // Floating up and down
                y: [0, -30, -15, -35, 0],
                // Side to side movement
                x: [0, Math.sin(i) * 15, Math.cos(i) * 12, 0],
                // Rotation
                rotate: [0, 180, 360, 540, 720],
                // Scale pulsing
                scale: [1, 1.2, 0.9, 1.1, 1],
                // Opacity breathing
                opacity: [0.5, 0.8, 0.4, 0.7, 0.5],
              }}
              transition={{
                duration: 8 + Math.random() * 4, // 8-12 seconds
                repeat: 1000,
                delay: Math.random() * 6, // Random start delay
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1] // Control timing of keyframes
              }}
            >
              {/* Bead highlight for 3D effect */}
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white/70 rounded-full blur-xs" />
            </motion.div>
          )
        })}

        {/* Corner decorative beads with bright golden colors */}
        {[
          { top: '8%', left: '4%', color: 'from-[#FFE135] to-[#FFBF00]' },
          { top: '12%', right: '6%', color: 'from-[#FFBF00] to-[#FFA500]' },
          { bottom: '8%', left: '5%', color: 'from-[#FFE135] to-[#FFED4E]' },
          { bottom: '15%', right: '4%', color: 'from-[#FFD700] to-[#FFE135]' },
          { top: '45%', left: '2%', color: 'from-[#FFED4E] to-[#FFE135]' },
          { top: '55%', right: '3%', color: 'from-[#FFE135] to-[#FFBF00]' },
        ].map((bead, i) => (
          <motion.div
            key={i}
            className={`absolute w-4 h-6 bg-gradient-to-br ${bead.color} rounded-full shadow-xl border border-white/50 z-20`}
            style={{
              ...bead,
              transform: 'scaleX(0.75)',
              filter: 'drop-shadow(0 3px 6px rgba(255, 225, 53, 0.3))',
              opacity: 0.7
            }}
            animate={{
              rotate: [0, 360, 720, 1080],
              scale: [0.75, 0.9, 0.7, 1, 0.75],
              opacity: [0.6, 0.9, 0.5, 0.8, 0.6],
              y: [0, -8, 4, -6, 0],
            }}
            transition={{
              duration: 10,
              repeat: 1000,
              delay: i * 0.7,
              ease: "easeInOut"
            }}
          >
            <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white/70 rounded-full blur-xs" />
          </motion.div>
        ))}

        {/* Floating testimonial stars */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#FFE135]/40 z-5"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i * 10)}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: 1000,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <Star className="w-3 h-3" fill="currentColor" />
          </motion.div>
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255, 225, 53, 0.06) 0%, rgba(255, 225, 53, 0.02) 50%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: 1000,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-30 px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-['Merriweather',serif]"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">What Our </span>
            <motion.span 
              className="bg-gradient-to-r from-[#FFE135] via-[#FFBF00] to-[#FFED4E] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 4,
                repeat: 1000,
                ease: "easeInOut"
              }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Community
            </motion.span>
            <span className="text-white"> Says</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 font-['Inter',sans-serif]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Real stories from families who've experienced the BoltAbacus difference
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#FFE135] via-[#FFBF00] to-[#FFE135] mx-auto rounded-full shadow-lg shadow-[#FFE135]/30"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-sm border-2 border-[#FFE135]/30 text-[#FFE135] p-4 rounded-full hover:bg-gradient-to-br hover:from-[#FFE135] hover:to-[#FFBF00] hover:text-black hover:border-[#FFE135] transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(255, 225, 53, 0.4)" }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1 }}
          >
            <ChevronLeft size={24} strokeWidth={3} />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-sm border-2 border-[#FFE135]/30 text-[#FFE135] p-4 rounded-full hover:bg-gradient-to-br hover:from-[#FFE135] hover:to-[#FFBF00] hover:text-black hover:border-[#FFE135] transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(255, 225, 53, 0.4)" }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1 }}
          >
            <ChevronRight size={24} strokeWidth={3} />
          </motion.button>

          {/* Testimonial Card */}
          <div className="relative h-[500px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.4 }
                }}
                className="absolute inset-0 flex items-center justify-center px-16"
              >
                <div className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto relative border-2 border-[#FFE135]/30">
                  {/* Golden Quote Icon */}
                  <div className="absolute -top-6 left-8">
                    <div className="bg-gradient-to-br from-[#FFE135] to-[#FFBF00] p-4 rounded-full shadow-xl">
                      <Quote className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex justify-center mb-6 mt-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                      >
                        <Star className="w-6 h-6 text-[#FFE135] fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <div className="mb-8 text-center">
                    <motion.p 
                      className="text-gray-200 text-lg md:text-xl leading-relaxed italic font-medium font-['Inter',sans-serif]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      &quot;{testimonials[currentIndex].text}&quot;
                    </motion.p>
                  </div>

                  {/* Author Info */}
                  <motion.div 
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="text-5xl mr-6 p-3 bg-gradient-to-br from-[#FFE135]/20 to-[#FFBF00]/20 rounded-full border border-[#FFE135]/30">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div className="text-center">
                      <div className="font-black text-white text-xl mb-1 font-['Merriweather',serif]">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-[#FFE135] font-bold text-base font-['Inter',sans-serif]">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#FFE135]/10 to-[#FFBF00]/10 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-[#FFED4E]/10 to-[#FFE135]/10 rounded-full"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-4 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`relative transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-12 h-3' 
                    : 'w-3 h-3'
                } rounded-full ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-[#FFE135] to-[#FFBF00]'
                    : 'bg-gray-600/60 hover:bg-gray-500/80 border border-[#FFE135]/30'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFE135] to-[#FFBF00] blur-sm opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: 1000,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-gradient-to-r from-gray-800/40 via-gray-700/30 to-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-[#FFE135]/20 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white">
              <div className="flex items-center gap-3">
                <div className="flex text-[#FFE135]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-lg font-['Inter',sans-serif]">5.0 Average Rating</span>
              </div>
              <div className="text-lg font-['Inter',sans-serif]">
                <span className="font-bold text-[#FFE135] text-2xl">500+</span>
                <span className="ml-2">Happy Families</span>
              </div>
              <div className="text-lg font-['Inter',sans-serif]">
                <span className="font-bold text-[#FFE135] text-2xl">98%</span>
                <span className="ml-2">Success Rate</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
