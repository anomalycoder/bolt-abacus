'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section 
      ref={ref}
      id="about"
      className="py-20 bg-dark-bg relative"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About <span className="text-primary-yellow text-glow-yellow">BoltAbacus</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-yellow to-accent-yellow mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p
            className="text-xl text-gray-300 leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            BoltAbacus revolutionizes traditional abacus learning with cutting-edge technology. 
            Our interactive platform combines ancient mathematical wisdom with modern gamification, 
            making mental math mastery engaging and accessible for students of all ages.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: "1000+", label: "Active Students" },
              { number: "95%", label: "Success Rate" },
              { number: "24/7", label: "Learning Support" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-dark-card border border-dark-border rounded-2xl card-glow"
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-black text-primary-yellow mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
