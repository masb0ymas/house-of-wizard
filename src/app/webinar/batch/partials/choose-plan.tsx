'use client'

import { useState } from 'react'
import Checkout from './checkout'
import PricingCard from './pricing-card'

type IProps = {
  email?: string | null
}

export default function ChoosePlan({ email }: IProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan)
    // Scroll to checkout section
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="mb-20">
        <h2 className="text-xl sm:text-3xl font-bold font-serif tracking-wide text-center mb-10">
          Choose Your Plan
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="Early Bird"
            subtitle="Limited time offer for first 20 students"
            price={7}
            features={[
              { text: '12 weeks live training' },
              { text: 'Personal mentorship' },
              { text: 'Project portfolio' },
              { text: 'Career support' },
              { text: 'Lifetime community access' },
              { text: 'Certificate of completion' },
            ]}
            onSelect={() => handlePlanSelect('early-bird')}
          />
          <PricingCard
            title="Regular"
            subtitle="Standard enrollment"
            price={12}
            disabled
            features={[
              { text: '12 weeks live training' },
              { text: 'Personal mentorship' },
              { text: 'Project portfolio' },
              { text: 'Career support' },
              { text: 'Lifetime community access' },
              { text: 'Certificate of completion' },
            ]}
            onSelect={() => handlePlanSelect('regular')}
          />
        </div>
      </section>

      {/* Checkout Section */}
      {selectedPlan && <Checkout email={email} />}
    </>
  )
}
