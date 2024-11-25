import { Metadata } from 'next'
import Layout from '~/components/layout'
import About from './home/about'
import FAQ from './home/faq'
import Hero from './home/hero'
import LearningPhase from './home/learning-phase'
import Testimonials from './home/testimonial'

export const metadata: Metadata = {
  title: 'House of Wizard',
  description: 'To become a greater wizard, join with us',
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Testimonials />
      <LearningPhase />
      <FAQ />
    </Layout>
  )
}
