'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Eye, Sparkles, ArrowRight, Zap } from 'lucide-react'

const CardData = [
  {
    title: "About Us",
    text: "At Bolt Abacus, we are more than just an online abacus classes provider. We are educational pioneers dedicated to shaping the future of learning. Based out of vibrant Hyderabad, we are passionate education entrepreneurs with a vision to empower students through innovative teaching methods.",
    icon: User,
    isHighlighted: false
  },
  {
    title: "Our Innovation", 
    text: "Our pride and joy lie in our state-of-the-art abacus learning app. It's not just an app; it's a portal to success. Our intricate technology automates and tracks students' real-time data providing invaluable insights into their progress. With Bolt Abacus, learning becomes an immersive and data-driven experience like never before.",
    icon: Eye,
    isHighlighted: true
  },
  {
    title: "Learn with Fun",
    text: "Bolt Abacus reimagines abacus learning as an exciting adventure. Our innovative approach combines education and fun with captivating visuals, interactive lessons, and engaging activities. Whether your child is a beginner or looking to advance, our platform offers online classes to build strong foundations and nurture a love for learning. Join us at Bolt Abacus, where fun and education unite!",
    icon: Sparkles,
    isHighlighted: false
  }
]

const Card = ({ 
  title, 
  text, 
  icon: Icon, 
  isHighlighted, 
  delay 
}: { 
  title: string
  text: string
  icon: any
  isHighlighted: boolean
  delay: number 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      className={`group relative rounded-3xl p-8 shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden max-w-sm mx-auto backdrop-blur-sm ${
        isHighlighted 
          ? 'bg-gradient-to-br from-[#FFE135] to-[#FFBF00] text-black shadow-[#FFE135]/40 border border-[#FFE135]/50' 
          : 'bg-gradient-to-br from-gray-900/95 to-black/95 text-gray-200 shadow-black/30 border border-[#FFE135]/30 hover:border-[#FFE135]/60'
      }`}
      style={{
        boxShadow: isHighlighted 
          ? "0 25px 50px rgba(255, 225, 53, 0.3), 0 0 0 1px rgba(255, 225, 53, 0.3)"
          : "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 225, 53, 0.2)"
      }}
      initial={{ opacity: 0, y: 100, scale: 0.8, rotateY: 15 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -15,
        rotateY: -5,
        transition: { duration: 0.3, type: "spring", stiffness: 300 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        {!isHighlighted && (
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFE135]/5 via-gray-800/60 to-black/80"></div>
          </div>
        )}
        
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
            isHighlighted 
              ? 'bg-gradient-to-br from-white/10 via-[#FFED4E]/5 to-[#FFBF00]/10' 
              : 'bg-gradient-to-br from-[#FFE135]/8 via-gray-800/20 to-[#FFE135]/5'
          }`}
        />
        
        {/* Enhanced floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isHighlighted ? 'bg-white/20' : 'bg-[#FFE135]/30'
            }`}
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.8, 0.3],
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `linear-gradient(45deg, ${isHighlighted ? 'rgba(255, 225, 53, 0.3)' : 'rgba(255, 225, 53, 0.1)'}, transparent, ${isHighlighted ? 'rgba(255, 191, 0, 0.3)' : 'rgba(255, 191, 0, 0.1)'})`
          }}
          animate={{
            background: [
              `linear-gradient(45deg, ${isHighlighted ? 'rgba(255, 225, 53, 0.3)' : 'rgba(255, 225, 53, 0.1)'}, transparent, ${isHighlighted ? 'rgba(255, 191, 0, 0.3)' : 'rgba(255, 191, 0, 0.1)'})`,
              `linear-gradient(135deg, ${isHighlighted ? 'rgba(255, 191, 0, 0.3)' : 'rgba(255, 191, 0, 0.1)'}, transparent, ${isHighlighted ? 'rgba(255, 225, 53, 0.3)' : 'rgba(255, 225, 53, 0.1)'})`,
              `linear-gradient(45deg, ${isHighlighted ? 'rgba(255, 225, 53, 0.3)' : 'rgba(255, 225, 53, 0.1)'}, transparent, ${isHighlighted ? 'rgba(255, 191, 0, 0.3)' : 'rgba(255, 191, 0, 0.1)'})`
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Enhanced Icon Animation */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0, rotate: -180, y: -30 }}
          animate={inView ? { scale: 1, rotate: 0, y: 0 } : {}}
          transition={{ 
            duration: 0.8, 
            delay: delay + 0.2,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ 
            rotate: [0, -10, 10, -5, 0], 
            scale: [1, 1.2, 1],
            y: [-5, -10, -5],
            transition: { duration: 0.8 }
          }}
        >
          <motion.div
            className={`relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm border ${
              isHighlighted 
                ? 'bg-white/20 shadow-white/20 border-white/30' 
                : 'bg-gradient-to-br from-[#FFE135] to-[#FFBF00] shadow-[#FFE135]/30 border-[#FFE135]/20'
            }`}
            animate={{
              boxShadow: [
                isHighlighted 
                  ? "0 0 20px rgba(255, 255, 255, 0.2)" 
                  : "0 0 20px rgba(255, 225, 53, 0.3)",
                isHighlighted 
                  ? "0 0 30px rgba(255, 255, 255, 0.4)" 
                  : "0 0 30px rgba(255, 225, 53, 0.5)",
                isHighlighted 
                  ? "0 0 20px rgba(255, 255, 255, 0.2)" 
                  : "0 0 20px rgba(255, 225, 53, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon 
              className={`w-8 h-8 ${
                isHighlighted ? 'text-black drop-shadow-sm' : 'text-black drop-shadow-sm'
              }`} 
            />
            
            {/* Icon background glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: isHighlighted 
                  ? 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(255, 225, 53, 0.2) 0%, transparent 70%)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Title Animation */}
        <motion.h3 
          className={`text-2xl md:text-3xl font-bold mb-6 text-center font-['Merriweather',serif] leading-tight ${
            isHighlighted ? 'text-black drop-shadow-sm' : 'text-white'
          }`}
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: delay + 0.4, duration: 0.8, type: "spring", stiffness: 150 }}
        >
          <motion.span
            animate={isHighlighted ? {
              textShadow: [
                "0 0 10px rgba(0, 0, 0, 0.3)",
                "0 0 20px rgba(0, 0, 0, 0.5)",
                "0 0 10px rgba(0, 0, 0, 0.3)"
              ]
            } : {
              textShadow: [
                "0 0 10px rgba(255, 225, 53, 0.3)",
                "0 0 20px rgba(255, 225, 53, 0.5)",
                "0 0 10px rgba(255, 225, 53, 0.3)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {title}
          </motion.span>
        </motion.h3>

        {/* Text with typewriter effect simulation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.6, duration: 0.8 }}
        >
          <motion.p 
            className={`text-base md:text-lg leading-relaxed text-center font-['Inter',sans-serif] ${
              isHighlighted ? 'text-black/85' : 'text-gray-300'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: delay + 0.8, duration: 1 }}
          >
            {text}
          </motion.p>
        </motion.div>

        {/* Enhanced decorative elements */}
        <motion.div
          className="flex items-center justify-center mt-8 space-x-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: delay + 1, duration: 0.6 }}
        >
          <motion.div
            className={`h-0.5 rounded-full ${
              isHighlighted 
                ? 'bg-gradient-to-r from-black/30 to-black/15' 
                : 'bg-gradient-to-r from-[#FFE135] to-[#FFBF00]'
            }`}
            initial={{ width: 0 }}
            animate={inView ? { width: 24 } : {}}
            transition={{ delay: delay + 1.2, duration: 0.8 }}
          />
          
          <motion.div
            className={`w-2 h-2 rounded-full ${
              isHighlighted ? 'bg-black/50 shadow-black/20' : 'bg-[#FFE135] shadow-[#FFE135]/50'
            }`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className={`h-0.5 rounded-full ${
              isHighlighted 
                ? 'bg-gradient-to-l from-black/30 to-black/15' 
                : 'bg-gradient-to-l from-[#FFE135] to-[#FFBF00]'
            }`}
            initial={{ width: 0 }}
            animate={inView ? { width: 24 } : {}}
            transition={{ delay: delay + 1.2, duration: 0.8 }}
          />
        </motion.div>

        {/* Enhanced hover indicator with animation */}
        <motion.div
          className="flex items-center justify-center mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ y: 20, scale: 0.8 }}
          whileHover={{ y: 0, scale: 1 }}
        >
          <motion.div
            className={`flex items-center space-x-2 px-6 py-3 rounded-full backdrop-blur-sm ${
              isHighlighted 
                ? 'bg-black/10 border border-black/20' 
                : 'bg-[#FFE135]/10 border border-[#FFE135]/30'
            }`}
            whileHover={{ 
              scale: 1.1,
              boxShadow: isHighlighted 
                ? "0 10px 25px rgba(0, 0, 0, 0.2)" 
                : "0 10px 25px rgba(255, 225, 53, 0.3)"
            }}
          >
            <span className={`text-sm font-medium ${
              isHighlighted ? 'text-black' : 'text-[#FFE135]'
            }`}>
              Learn More
            </span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className={`w-4 h-4 ${
                isHighlighted ? 'text-black' : 'text-[#FFE135]'
              }`} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function AboutInnovationFunSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

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
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs with improved movement */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 225, 53, 0.15) 0%, rgba(255, 225, 53, 0.05) 70%, transparent 100%)'
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, 50, 0],
            y: [0, -40, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-56 h-56 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 191, 0, 0.12) 0%, rgba(255, 191, 0, 0.04) 50%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -60, 0],
            y: [0, 50, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Enhanced floating golden beads with complex animations */}
        {[...Array(15)].map((_, i) => {
          const colors = [
            'bg-gradient-to-br from-[#FFE135] to-[#FFBF00]',
            'bg-gradient-to-br from-[#FFBF00] to-[#FFA500]',
            'bg-gradient-to-br from-[#FFE135] to-[#FFED4E]',
            'bg-gradient-to-br from-[#FFD700] to-[#FFE135]'
          ]
          return (
            <motion.div
              key={i}
              className={`absolute w-4 h-5 ${colors[i % colors.length]} rounded-full shadow-lg border border-white/40`}
              style={{
                left: `${5 + Math.random() * 90}%`,
                top: `${5 + Math.random() * 90}%`,
                transform: `rotate(${Math.random() * 360}deg) scaleX(0.7)`,
                filter: 'drop-shadow(0 2px 4px rgba(255, 225, 53, 0.2))'
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
                y: [0, -40, 0],
                rotate: [0, 360, 720],
                x: [0, Math.sin(i) * 20, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          )
        })}

        {/* Animated connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
          <motion.path
            d="M100,200 Q300,100 500,200 T900,200"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 0.3 } : {}}
            transition={{ duration: 3, delay: 1 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE135" />
              <stop offset="50%" stopColor="#FFBF00" />
              <stop offset="100%" stopColor="#FFE135" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header with word-by-word animation */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-['Merriweather',serif] leading-tight">
            {["Why", "Choose"].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-4"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  delay: 0.2 + index * 0.1, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span 
              className="bg-gradient-to-r from-[#FFE135] via-[#FFBF00] to-[#FFED4E] bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
              animate={inView ? { 
                opacity: 1, 
                scale: 1, 
                rotateX: 0,
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              } : {}}
              transition={{
                opacity: { delay: 0.4, duration: 0.8 },
                scale: { delay: 0.4, duration: 0.8, type: "spring", stiffness: 150 },
                rotateX: { delay: 0.4, duration: 0.8 },
                backgroundPosition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ backgroundSize: '200% 100%' }}
            >
              BoltAbacus
            </motion.span>
            <motion.span
              className="inline-block ml-4 text-3xl md:text-4xl"
              initial={{ rotate: -30, scale: 0 }}
              animate={inView ? { rotate: 0, scale: 1 } : {}}
              transition={{ 
                delay: 0.6, 
                duration: 0.8, 
                type: "spring", 
                stiffness: 200 
              }}
              whileHover={{ 
                rotate: [0, 15, -15, 0], 
                scale: [1, 1.2, 1],
                transition: { duration: 0.6 }
              }}
            >
              🧮
            </motion.span>
            <span className="text-white">?</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 font-['Inter',sans-serif] leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Discover what makes our abacus learning platform the perfect choice for your child's mathematical journey
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#FFE135] via-[#FFBF00] to-[#FFE135] mx-auto rounded-full shadow-lg shadow-[#FFE135]/30"
            initial={{ width: 0, opacity: 0 }}
            animate={inView ? { width: 96, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 1 }}
          />
        </motion.div>

        {/* Enhanced Cards Grid with stagger animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {CardData.map((card, index) => (
            <Card
              key={card.title}
              title={card.title}
              text={card.text}
              icon={card.icon}
              isHighlighted={card.isHighlighted}
              delay={1.4 + index * 0.2}
            />
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA with complex animation */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <motion.button
            className="relative bg-gradient-to-r from-[#FFE135] to-[#FFBF00] text-black px-12 py-5 rounded-2xl font-bold shadow-2xl text-xl overflow-hidden font-['Inter',sans-serif] border border-[#FFE135]/20 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              y: -4,
              boxShadow: "0 25px 50px rgba(255, 225, 53, 0.4)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 15px 30px rgba(255, 225, 53, 0.2)",
                "0 20px 40px rgba(255, 225, 53, 0.4)",
                "0 15px 30px rgba(255, 225, 53, 0.2)"
              ]
            }}
            transition={{
              boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent"
              initial={{ x: '-100%', scale: 0.5 }}
              whileHover={{ x: '100%', scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <span className="relative z-10 flex items-center justify-center gap-3">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                🚀
              </motion.span>
              Start Your Journey Today
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
