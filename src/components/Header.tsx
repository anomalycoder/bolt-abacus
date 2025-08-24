'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const router = useRouter()

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
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

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Handle login button click
  const handleLoginClick = () => {
    router.push('/login')
  }

  // Handle logo click - scroll to top
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.header
      ref={ref}
      className="absolute top-2 left-1/2 transform -translate-x-1/2 z-50 bg-transparent px-4 sm:px-8 lg:px-12 py-3.5 w-[96vw] max-w-7xl h-16 rounded-full"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="relative flex items-center justify-between w-full h-full">
        {/* Animated Logo with better visibility - clickable */}
        <motion.div 
          className="flex items-center space-x-3 cursor-pointer group"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={handleLogoClick}
        >
          <motion.span 
            className="text-2xl select-none drop-shadow-lg"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            🧮
          </motion.span>
          <div>
            <motion.span 
              className="font-bold text-xl tracking-tight font-['Merriweather',serif] text-white drop-shadow-lg group-hover:text-[#FFE135] transition-colors duration-300"
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              BoltAbacus
            </motion.span>
            <motion.div 
              className="text-xs font-medium text-[#FFE135] drop-shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Learn & Master
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Navigation with better visibility - linked */}
        <motion.nav 
          className="hidden md:flex items-center space-x-8"
          variants={containerVariants}
        >
          {[
            { name: "About", href: "#about" },
            { name: "Pricing", href: "#pricing" },
            { name: "Reviews", href: "#testimonials" }
          ].map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="font-bold text-lg text-white drop-shadow-lg hover:text-[#FFE135] relative group transition-colors duration-300 bg-transparent border-none cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { type: "spring", stiffness: 400 } 
              }}
            >
              {item.name}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFE135] to-[#FFBF00] rounded-full drop-shadow-sm"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </motion.nav>

        {/* Action Buttons Container */}
        <div className="flex items-center">
          {/* Animated Login Button - linked to login page */}
          <motion.button
            onClick={handleLoginClick}
            className="hidden md:block px-8 py-2.5 rounded-full font-bold text-lg bg-gradient-to-r from-[#FFE135] to-[#FFBF00] text-black border-2 border-[#FFE135]/30 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(255, 225, 53, 0.4)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 sm:p-3 rounded-full text-white hover:text-[#FFE135] hover:bg-[#FFE135]/10 border border-transparent hover:border-[#FFE135]/30 transition-all duration-300 drop-shadow-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="transition-all duration-400 ease-out"
              animate={{ 
                rotate: mobileMenuOpen ? 180 : 0,
                scale: mobileMenuOpen ? 1.05 : 1 
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with background for readability - all linked */}
      {mobileMenuOpen && (
        <motion.div 
          className="absolute top-full left-0 right-0 mt-3 bg-black/96 backdrop-blur-xl border border-[#FFE135]/30 shadow-2xl rounded-3xl"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="px-4 sm:px-8 py-6 space-y-3">
            {[
              { name: "About", href: "#about" },
              { name: "Pricing", href: "#pricing" },
              { name: "Reviews", href: "#testimonials" }
            ].map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.href)
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-300 hover:text-[#FFE135] py-3 px-4 sm:px-5 rounded-2xl hover:bg-[#FFE135]/10 font-bold text-base sm:text-lg border border-transparent hover:border-[#FFE135]/20 transition-all duration-300 bg-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              onClick={() => {
                handleLoginClick()
                setMobileMenuOpen(false)
              }}
              className="w-full mt-4 px-6 py-3 rounded-2xl font-bold text-base bg-gradient-to-r from-[#FFE135] to-[#FFBF00] text-black border-2 border-[#FFE135] hover:from-[#FFBF00] hover:to-[#FFE135] shadow-lg hover:shadow-[#FFE135]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
