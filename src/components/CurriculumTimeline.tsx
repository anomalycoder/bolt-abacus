'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const curriculumData = [
  {
    level: 1,
    topics: [
      "Introduction to Abacus",
      "Addition & Subtraction of 2 Digit Numbers"
    ]
  },
  {
    level: 2,
    topics: [
      "Addition & Subtraction of 3 Digit Numbers"
    ]
  },
  {
    level: 3,
    topics: [
      "Addition & Subtraction of 3 Digit Numbers"
    ]
  },
  {
    level: 4,
    topics: [
      "Addition & Subtraction (Level 1, 2 & 3 Mixed)",
      "Multiplication (2 digits × 1 Digit)"
    ]
  },
  {
    level: 5,
    topics: [
      "Addition & Subtraction (Increased Difficulty)",
      "Multiplication (2 digits × 1 Digit) & Division (2 digits ÷ 1 Digit)"
    ]
  },
  {
    level: 6,
    topics: [
      "Addition & Subtraction (Decimals)",
      "Multiplication (3 Digits × 2 Digits) & Division (3 Digits ÷ 2 Digits)",
      "Square Roots & Cube Roots",
      "Squares & Cubes"
    ]
  },
  {
    level: 7,
    topics: [
      "Addition & Subtraction (Mixed Repeat)",
      "Multiplication (4 Digits × 2 Digits) & Division (4 Digits ÷ 2 Digits)"
    ]
  },
  {
    level: 8,
    topics: [
      "Similar to Level 7 with Increased Difficulty"
    ]
  },
  {
    level: 9,
    topics: [
      "Similar to Level 8 with Increased Difficulty"
    ]
  },
  {
    level: 10,
    topics: [
      "Similar to Level 9 with Increased Difficulty",
      "Complicated Additions & Subtractions",
      "Multiplications (5 Digits × 4 Digits) & Divisions (5 Digits ÷ 3 Digits)"
    ]
  }
]

const TimelineItem = ({ 
  level, 
  topics, 
  delay,
  isLast 
}: { 
  level: number
  topics: string[]
  delay: number
  isLast: boolean
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <motion.div
      ref={ref}
      className="flex items-start mb-10 relative last:mb-0"
      initial={{ opacity: 0, x: -100, rotateY: -20 }}
      animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
    >
      {/* Enhanced Timeline Dot with Golden Abacus Bead */}
      <motion.div
        className="absolute -left-8 mt-2 z-20 group"
        initial={{ scale: 0, rotate: -360 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 1, delay: delay + 0.3, type: "spring", stiffness: 150 }}
      >
        <motion.div
          className="relative w-6 h-8 bg-gradient-to-br from-[#FFE135] to-[#FFBF00] rounded-full shadow-lg border-2 border-white/30 cursor-pointer"
          style={{
            transform: 'scaleX(0.8)',
            filter: 'drop-shadow(0 4px 8px rgba(255, 225, 53, 0.3))'
          }}
          whileHover={{ 
            scale: 1.4,
            rotate: [0, -15, 15, 0],
            transition: { duration: 0.8 }
          }}
          animate={{
            boxShadow: [
              '0 0 0 0px rgba(255, 225, 53, 0.4)',
              '0 0 0 10px rgba(255, 225, 53, 0.2)',
              '0 0 0 0px rgba(255, 225, 53, 0.4)'
            ]
          }}
          transition={{
            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {/* Enhanced bead highlight */}
          <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white/80 rounded-full blur-sm" />
          
          {/* Animated level number */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: delay + 0.5, duration: 0.5 }}
          >
            <motion.span 
              className="text-black font-bold text-xs drop-shadow-sm"
              animate={{ 
                textShadow: [
                  "0 0 5px rgba(0, 0, 0, 0.3)",
                  "0 0 10px rgba(0, 0, 0, 0.5)",
                  "0 0 5px rgba(0, 0, 0, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {level}
            </motion.span>
          </motion.div>

          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#FFE135]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Enhanced Content Card */}
      <motion.div 
        className="ml-6 bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl p-6 border border-[#FFE135]/30 hover:border-[#FFE135]/60 transition-all duration-500 w-full max-w-md group shadow-lg backdrop-blur-sm"
        style={{
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 225, 53, 0.2)"
        }}
        whileHover={{ 
          scale: 1.03,
          y: -8,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 225, 53, 0.3)",
          transition: { duration: 0.3 }
        }}
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ delay: delay + 0.6, duration: 0.8 }}
      >
        {/* Enhanced golden top border */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFE135]/60 via-[#FFBF00]/80 to-[#FFE135]/60 rounded-t-2xl"
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : {}}
          transition={{ delay: delay + 0.8, duration: 1 }}
        />
        
        {/* Subtle background pattern with animation */}
        <div className="absolute inset-0 rounded-2xl opacity-20">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#FFE135]/5 via-gray-800/60 to-black/80"
            animate={{
              background: [
                'linear-gradient(135deg, rgba(255, 225, 53, 0.05) 0%, rgba(107, 114, 128, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%)',
                'linear-gradient(135deg, rgba(255, 191, 0, 0.08) 0%, rgba(107, 114, 128, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%)',
                'linear-gradient(135deg, rgba(255, 225, 53, 0.05) 0%, rgba(107, 114, 128, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        {/* Level Title with enhanced animation */}
        <motion.div
          className="flex items-center mb-4 relative z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: delay + 1, duration: 0.6 }}
        >
          <motion.h3 
            className="text-xl font-bold text-white group-hover:text-[#FFE135] transition-colors duration-300 font-['Merriweather',serif]"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(255, 225, 53, 0.5)"
            }}
          >
            Level {level}
          </motion.h3>
          
          {/* Enhanced progress indicator */}
          <motion.div 
            className="ml-3 px-3 py-1 bg-[#FFE135]/30 rounded-full border border-[#FFE135]/50 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ delay: delay + 1.2, duration: 0.6, type: "spring" }}
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "rgba(255, 225, 53, 0.4)",
              transition: { duration: 0.2 }
            }}
          >
            <motion.span 
              className="text-xs font-semibold text-black"
              animate={{
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {Math.round((level / 10) * 100)}%
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Enhanced Topics List */}
        <motion.ul 
          className="space-y-3 relative z-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 1.4, duration: 0.6 }}
        >
          {topics.map((topic, index) => (
            <motion.li
              key={index}
              className="text-gray-300 flex items-start leading-relaxed group-hover:text-gray-200 transition-colors duration-300 font-['Inter',sans-serif] text-sm"
              initial={{ opacity: 0, x: -40, scale: 0.9 }}
              animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ 
                delay: delay + 1.6 + index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ 
                x: 8, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.span 
                className="text-[#FFE135] mr-3 mt-0.5 text-sm"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ 
                  scale: 1.3,
                  rotate: [0, 180, 360],
                  transition: { duration: 0.6 }
                }}
              >
                🧮
              </motion.span>
              <span className="flex-1">{topic}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Enhanced decorative bottom elements */}
        <motion.div
          className="flex items-center justify-center mt-6 space-x-3 relative z-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: delay + 2, duration: 0.6 }}
        >
          <motion.div
            className="w-8 h-0.5 bg-gradient-to-r from-[#FFE135] to-[#FFBF00] rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 32 } : {}}
            transition={{ delay: delay + 2.2, duration: 1 }}
          />
          <motion.div
            className="w-1.5 h-1.5 bg-[#FFE135] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
              boxShadow: [
                "0 0 5px rgba(255, 225, 53, 0.3)",
                "0 0 15px rgba(255, 225, 53, 0.6)",
                "0 0 5px rgba(255, 225, 53, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="w-8 h-0.5 bg-gradient-to-l from-[#FFE135] to-[#FFBF00] rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 32 } : {}}
            transition={{ delay: delay + 2.2, duration: 1 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function CurriculumTimeline() {
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
      {/* Enhanced Background Elements with Timeline Theme */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs with timeline connection effect */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 225, 53, 0.15) 0%, rgba(255, 225, 53, 0.05) 70%, transparent 100%)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Timeline-themed floating beads */}
        {[...Array(12)].map((_, i) => {
          const colors = [
            'bg-gradient-to-br from-[#FFE135] to-[#FFBF00]',
            'bg-gradient-to-br from-[#FFBF00] to-[#FFA500]',
            'bg-gradient-to-br from-[#FFE135] to-[#FFED4E]',
            'bg-gradient-to-br from-[#FFD700] to-[#FFE135]'
          ]
          return (
            <motion.div
              key={i}
              className={`absolute w-4 h-5 ${colors[i % colors.length]} rounded-full shadow-lg border border-[#FFE135]/40`}
              style={{
                left: `${5 + Math.random() * 90}%`,
                top: `${5 + Math.random() * 90}%`,
                transform: `rotate(${Math.random() * 360}deg) scaleX(0.7)`,
                filter: 'drop-shadow(0 2px 4px rgba(255, 225, 53, 0.2))'
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
                y: [0, -25, 0],
                rotate: [0, 180, 360],
                x: [0, Math.sin(i) * 10, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            />
          )
        })}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Merriweather',serif] leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Unlocking{' '}
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-[#FFE135] via-[#FFBF00] to-[#FFED4E] bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { 
                opacity: 1, 
                scale: 1,
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              } : {}}
              transition={{
                opacity: { duration: 0.8, delay: 0.4 },
                scale: { duration: 0.8, delay: 0.4, type: "spring" },
                backgroundPosition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Abacus Mastery
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Our Comprehensive{' '}
            </motion.span>
            <motion.span 
              className="text-[#FFE135]"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0,
                textShadow: [
                  "0 0 10px rgba(255, 225, 53, 0.3)",
                  "0 0 20px rgba(255, 225, 53, 0.6)",
                  "0 0 10px rgba(255, 225, 53, 0.3)"
                ]
              } : {}}
              transition={{
                opacity: { duration: 0.8, delay: 0.8 },
                y: { duration: 0.8, delay: 0.8 },
                textShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              Curriculum
            </motion.span>
            <motion.span
              className="inline-block ml-2 text-2xl"
              initial={{ rotate: -180, scale: 0 }}
              animate={inView ? { rotate: 0, scale: 1 } : {}}
              transition={{ 
                duration: 1, 
                delay: 1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
                transition: { duration: 0.6 }
              }}
            >
              🧮
            </motion.span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#FFE135] via-[#FFBF00] to-[#FFE135] mx-auto mb-6 rounded-full shadow-lg shadow-[#FFE135]/30"
            initial={{ width: 0, opacity: 0 }}
            animate={inView ? { width: 96, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 1.2 }}
          />

          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-['Inter',sans-serif]"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Journey through our structured 10-level program designed to transform 
            beginners into abacus masters with progressive skill building.
          </motion.p>
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Animated Golden Vertical Timeline Rod */}
          <motion.div
            className="absolute left-1.5 top-0 bottom-0 w-1.5 rounded-full shadow-md opacity-60"
            style={{
              background: 'linear-gradient(to bottom, #FFE135 0%, #FFBF00 20%, #FFD700 50%, #FFBF00 80%, #FFE135 100%)',
              boxShadow: 'inset 0 0 6px rgba(255, 225, 53, 0.4), 0 0 10px rgba(255, 225, 53, 0.2)'
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={inView ? { height: "100%", opacity: 0.6 } : {}}
            transition={{ duration: 3, delay: 0.5 }}
          >
            {/* Animated golden rod highlight */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: '200% 200%' }}
            />

            {/* Traveling light effect */}
            <motion.div
              className="absolute w-3 h-3 bg-[#FFE135] rounded-full shadow-lg"
              style={{ left: '-3px' }}
              animate={{
                y: ['0%', '100%', '0%'],
                opacity: [0.8, 1, 0.8],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Timeline Items */}
          <div className="ml-8">
            {curriculumData.map((item, index) => (
              <TimelineItem
                key={item.level}
                level={item.level}
                topics={item.topics}
                delay={0.5 + index * 0.2}
                isLast={index === curriculumData.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <motion.button
            className="relative bg-gradient-to-r from-[#FFE135] to-[#FFBF00] text-black px-12 py-4 rounded-xl font-bold shadow-xl text-lg overflow-hidden font-['Inter',sans-serif] border border-[#FFE135]/20"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 225, 53, 0.4), 0 0 15px rgba(255, 225, 53, 0.3)",
              y: -4
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 10px 20px rgba(255, 225, 53, 0.2)",
                "0 15px 30px rgba(255, 225, 53, 0.3)",
                "0 10px 20px rgba(255, 225, 53, 0.2)"
              ]
            }}
            transition={{
              boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: '-100%', skewX: -20 }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.8 }}
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
              🎯 Start Level 1 Today
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
