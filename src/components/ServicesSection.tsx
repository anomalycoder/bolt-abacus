'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: string
  title: string
  description: string
  delay: number 
}) => (
  <motion.div
    className="bg-dark-card border border-dark-border rounded-2xl p-8 card-glow transition-all group"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    whileHover={{ scale: 1.05, y: -10 }}
  >
    <motion.div 
      className="text-5xl mb-6 group-hover:scale-110 transition-transform"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>
    
    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-yellow transition-colors">
      {title}
    </h3>
    
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>

    <motion.div
      className="w-full h-1 bg-gradient-to-r from-primary-yellow to-accent-yellow mt-6 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
    />
  </motion.div>
)

export default function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const services = [
    {
      icon: "🎮",
      title: "Interactive Classes",
      description: "Engage with dynamic lessons featuring gamified learning experiences, real-time feedback, and adaptive difficulty levels."
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics, performance metrics, and personalized improvement recommendations."
    },
    {
      icon: "📈",
      title: "Detailed Reports",
      description: "Access comprehensive reports showing strengths, areas for improvement, and milestone achievements with visual insights."
    }
  ]

  return (
    <section 
      ref={ref}
      id="services"
      className="py-20 bg-gradient-to-b from-dark-bg to-gray-900 relative"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
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
            Our <span className="text-primary-yellow text-glow-yellow">Services</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-yellow to-accent-yellow mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover how BoltAbacus transforms mathematical learning through innovative features 
            designed to accelerate your abacus mastery journey.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
