import type { Metadata } from 'next'

import AboutSection from '@/components/block/site/about'
import CallToAction from '@/components/block/site/cta'
import FAQSection from '@/components/block/site/faq'
import HeroSection from '@/components/block/site/hero'
import LearningPhaseSection from '@/components/block/site/learning-phase'
import TestimonySection from '@/components/block/site/testimony'
import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'Home | House of Wizard',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Testimony Section */}
      <TestimonySection />

      {/* Learning Phase Section */}
      <LearningPhaseSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Call to Action Section */}
      <CallToAction />
    </>
  )
}
