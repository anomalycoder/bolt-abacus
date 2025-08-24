/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bright Premium Light Palette
        'primary-blue': '#2A9DF4',         // Bright engaging blue
        'secondary-green': '#4CAF50',      // Fresh success green
        'accent-yellow': '#FFC107',        // Vibrant highlight yellow
        'tertiary-purple': '#9C27B0',      // Rich purple for variety
        
        // Clean Light Backgrounds
        'bg-white': '#FFFFFF',             // Pure crisp white
        'bg-light': '#F9FAFB',             // Soft light gray
        'bg-cream': '#FEFEFE',             // Warm white
        'bg-blue': '#F0F8FF',              // Light blue tint
        'bg-green': '#F1F8E9',             // Light green tint
        
        // Clear Grays
        'gray-50': '#F9FAFB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-300': '#D1D5DB',
        'gray-400': '#9CA3AF',
        'gray-500': '#6B7280',
        'gray-600': '#4B5563',
        'gray-700': '#374151',
        'gray-800': '#1F2937',
        'gray-900': '#111827',
        
        // High Contrast Text
        'text-primary': '#1A202C',         // Dark slate for maximum readability
        'text-secondary': '#4A5568',       // Medium slate
        'text-muted': '#718096',           // Light slate for hints
        'text-white': '#FFFFFF',           // Pure white text
        
        // Vibrant Interactive Elements
        'button-blue': '#2A9DF4',          // Bright blue buttons
        'button-green': '#4CAF50',         // Fresh green buttons
        'button-yellow': '#FFC107',        // Vibrant yellow accents
        'hover-blue': '#1976D2',           // Darker blue hover
        'hover-green': '#388E3C',          // Darker green hover
        'hover-yellow': '#F57C00',         // Darker yellow hover
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'poppins': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
      },
      boxShadow: {
        'light': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'large': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow-blue': '0 0 20px rgba(42, 157, 244, 0.3)',
        'glow-green': '0 0 20px rgba(76, 175, 80, 0.3)',
        'glow-yellow': '0 0 20px rgba(255, 193, 7, 0.3)',
      },
    },
  },
  plugins: [],
}
