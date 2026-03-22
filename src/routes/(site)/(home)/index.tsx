import { createFileRoute } from '@tanstack/react-router'

import Loading from '~/components/block/common/loading'
import NotFound from '~/components/block/common/not-found'
import AboutSection from '~/components/block/home/about'
import CallToAction from '~/components/block/home/cta'
import FAQSection from '~/components/block/home/faq'
import HeroSection from '~/components/block/home/hero'
import LearningPhaseSection from '~/components/block/home/learning-phase'
import TestimonySection from '~/components/block/home/testimony'

export const Route = createFileRoute('/(site)/(home)/')({
  component: RouteComponent,
  pendingComponent: Loading,
  notFoundComponent: NotFound,
})

function RouteComponent() {
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
