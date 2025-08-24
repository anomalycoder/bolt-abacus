import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'BoltAbacus - Master Abacus Online | The Perfect App to Learn',
  description: 'Where fun and education unite to unlock your child\'s potential through innovative abacus learning. Interactive visuals, engaging lessons, and gamified activities.',
  keywords: 'abacus, online learning, mathematics, kids education, Hyderabad, mental math, abacus classes',
  authors: [{ name: 'BoltAbacus Team' }],
  openGraph: {
    title: 'BoltAbacus - Master Abacus Online',
    description: 'Where fun and education unite to unlock your child\'s potential through innovative abacus learning.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
