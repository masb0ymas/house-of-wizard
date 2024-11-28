'use client'

import _ from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import Loader from '~/components/custom/loader'
import { WebinarPrivatePlanEntity } from '~/data/entity/webinar_private_plan'
import { getWebinarPrivatePlans } from '../action'
import Checkout from './checkout'
import PricingCard from './pricing-card'

export default function ChoosePlan() {
  const [webinarPlans, setWebinarPlans] = useState<WebinarPrivatePlanEntity[]>([])

  const [isLoading, setIsLoading] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const getWebinarPlans = useCallback(async () => {
    setIsLoading(true)
    const { data } = await getWebinarPrivatePlans({ pageSize: 2 })
    setWebinarPlans(data)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getWebinarPlans()
  }, [getWebinarPlans])

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan)
    // Scroll to checkout section
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })
  }

  function renderContent() {
    if (isLoading) {
      return <Loader />
    }

    if (!isLoading && !_.isEmpty(webinarPlans)) {
      return (
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {webinarPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              title={plan.title}
              subtitle={plan.description}
              price={plan.price}
              features={plan.features}
              onSelect={() => handlePlanSelect(plan.id)}
              disabled={!plan.is_active}
            />
          ))}
        </div>
      )
    }

    return (
      <div className="flex items-center justify-center gap-2 mt-10">
        <span>No plans available</span>
      </div>
    )
  }

  return (
    <>
      <section className="mb-20">
        <h2 className="text-xl sm:text-3xl font-bold font-serif tracking-wide text-center mb-10">
          Choose Your Plan
        </h2>
        {renderContent()}
      </section>

      {/* Checkout Section */}
      {selectedPlan && <Checkout />}
    </>
  )
}
