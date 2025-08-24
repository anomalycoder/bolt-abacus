'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutInnovationFunSection from '@/components/AboutInnovationFunSection'
import CurriculumTimeline from '@/components/CurriculumTimeline'
import PricingSection from '@/components/PricingSection'
import ImpactSection from '@/components/ImpactSection'
import TestimonialSection from '@/components/TestimonialSection'
import ProfessionalFooter from '@/components/ProfessionalFooter'
import Login from '@/components/Login'

export default function Home() {
  const [showLogin, setShowLogin] = useState(false)

  if (showLogin) {
    return <Login />
  }

  return (
    <main className="bg-dark-bg">
      <Header />
      <HeroSection />
      <AboutInnovationFunSection />
      <CurriculumTimeline />
      <PricingSection />
      <ImpactSection />
      <TestimonialSection />
      <ProfessionalFooter />
    </main>
  )
}
