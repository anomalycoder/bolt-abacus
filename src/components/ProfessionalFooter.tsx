'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Instagram, ExternalLink, Mail, Phone, MapPin } from 'lucide-react'

const navigationLinks = [
  { name: "About Us", href: "#about" },
  { name: "Curriculum", href: "#curriculum" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" }
]

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-400" },
  { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-400" }
]

const legalLinks = [
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" }
]

const contactInfo = [
  { icon: Mail, text: "hello@boltabacus.com", href: "mailto:hello@boltabacus.com" },
  { icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, text: "Hyderabad, India", href: "#" }
]

// TARS Logo Component with inline elements (no div)
const TarsLogo = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-center font-bold tracking-wider ${className}`}>
    <span>T</span>
    {/* Custom ^ (caret/upward arrow) with vertical line symbol */}
    <svg 
      width="14" 
      height="16" 
      viewBox="0 0 14 16" 
      className="mx-[1px]"
      fill="currentColor"
    >
      {/* ^ shape (upward pointing arrow/caret) */}
      <path d="M7 0 L12 10 L9.5 10 L7 4 L4.5 10 L2 10 L7 0 Z" />
      {/* Vertical line in the middle */}
      <rect x="6" y="6" width="2" height="10" />
    </svg>
    <span>RS</span>
  </span>
)


export default function ProfessionalFooter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer 
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(255, 225, 53, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 191, 0, 0.04) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(0, 0, 0, 0.9) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #050505 50%, #0f0f0f 75%, #000000 100%)
        `
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating bright golden abacus beads */}
        {[...Array(10)].map((_, i) => {
          const colors = [
            'bg-gradient-to-br from-[#FFE135]/20 to-[#FFBF00]/15',
            'bg-gradient-to-br from-[#FFBF00]/15 to-[#FFA500]/10',
            'bg-gradient-to-br from-[#FFED4E]/20 to-[#FFE135]/15'
          ];
          const beadColor = colors[i % colors.length];
          
          return (
            <motion.div
              key={i}
              className={`absolute w-2 h-3 ${beadColor} rounded-full opacity-40`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg) scaleX(0.6)`,
                filter: 'drop-shadow(0 2px 4px rgba(255, 225, 53, 0.1))'
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Golden pattern overlay - much more subtle */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, #FFE135 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start mb-16">
            
            {/* Company Info */}
            <motion.div
              className="text-center md:text-left md:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Logo */}
              <motion.div 
                className="flex items-center justify-center md:justify-start mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mr-3">🧮</div>
                <span className="text-3xl font-black bg-gradient-to-r from-[#FFE135] via-[#FFBF00] to-[#FFED4E] bg-clip-text text-transparent">
                  BoltAbacus
                </span>
              </motion.div>

              {/* Description */}
              <p className="text-gray-400 mb-8 leading-relaxed text-base">
                Revolutionizing abacus education through innovative technology and 
                proven teaching methodologies. Building mathematical confidence in young minds.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-center justify-center md:justify-start text-gray-400 hover:text-[#FFE135] transition-colors duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <contact.icon className="w-4 h-4 mr-3 text-[#FFE135] group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold text-[#FFE135] mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 md:left-0 right-0 md:right-auto w-12 h-0.5 bg-gradient-to-r from-[#FFE135] to-[#FFBF00] mx-auto md:mx-0"></div>
              </h4>
              
              <nav className="space-y-4">
                {navigationLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-gray-400 hover:text-[#FFE135] transition-all duration-300 relative group text-left md:text-left text-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="relative">
                      {link.name}
                      <motion.div
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFE135] group-hover:w-full transition-all duration-300"
                      />
                    </span>
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Services */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-xl font-bold text-[#FFE135] mb-6 relative">
                Our Services
                <div className="absolute -bottom-2 left-0 md:left-0 right-0 md:right-auto w-12 h-0.5 bg-gradient-to-r from-[#FFE135] to-[#FFBF00] mx-auto md:mx-0"></div>
              </h4>
              
              <div className="space-y-4">
                {[
                  "1-on-1 Sessions", 
                  "Group Classes", 
                  "Competition Prep", 
                  "Parent Dashboard"
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    className="text-gray-400 hover:text-[#FFE135] transition-colors duration-300 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Media & Newsletter */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-xl font-bold text-[#FFE135] mb-6 relative">
                Connect With Us
                <div className="absolute -bottom-2 left-0 md:left-0 right-0 md:right-auto w-12 h-0.5 bg-gradient-to-r from-[#FFE135] to-[#FFBF00] mx-auto md:mx-0"></div>
              </h4>
              
              <div className="flex justify-center md:justify-start space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`w-12 h-12 border-2 border-[#FFE135]/30 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:border-[#FFE135] hover:bg-[#FFE135] hover:text-black hover:scale-110`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ 
                      boxShadow: "0 0 20px rgba(255, 225, 53, 0.4)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>

              <motion.p 
                className="text-sm text-gray-400 mb-6"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                Follow us for daily math tips and updates!
              </motion.p>

              {/* Newsletter Signup */}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email..."
                    className="flex-1 px-4 py-2 bg-black/80 border border-[#FFE135]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFE135] transition-colors text-sm backdrop-blur-sm"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-[#FFE135] to-[#FFBF00] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#FFE135]/30 transition-all duration-300 text-sm">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-[#FFE135]/20 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start">
                <span className="mr-2">© 2025 BoltAbacus. All rights reserved.</span>
                <span className="mx-2 text-[#FFE135]">•</span>
                <span className="flex items-center">
                  Made by <TarsLogo className="ml-1 text-white text-sm" />
                  <span className="ml-1">Networks</span>
                </span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#FFE135] text-sm transition-colors duration-300 flex items-center group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#FFE135]" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
