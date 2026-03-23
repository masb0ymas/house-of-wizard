import { IconReceiptOff } from '@tabler/icons-react'

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '~/components/ui/empty'
import type { Models } from '~/lib/api/models'

import { WebinarPricingCard, WebinarPricingCardSkeleton } from '../webinar-pricing-card'

interface PricingSectionProps {
  loading: boolean
  data: Models.WebinarPrivatePlan[]
}

export function PricingSection({ loading, data }: PricingSectionProps) {
  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex flex-row items-center justify-center gap-4">
          {Array.from({ length: 2 }).map((_, index) => (
            <WebinarPricingCardSkeleton key={index} />
          ))}
        </div>
      )
    }

    if (data && data.length > 0) {
      return (
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {data.map((plan) => (
            <WebinarPricingCard
              key={plan.id}
              title={plan.title}
              subtitle={plan.description}
              price={plan.price}
              features={plan.features}
              onSelect={() => console.log(plan.id)}
              disabled={!plan.is_active}
            />
          ))}
        </div>
      )
    }

    return <EmptyPricingSection />
  }

  return (
    <>
      <section className="mb-20">
        <h2 className="mb-10 text-center font-serif text-xl font-bold tracking-wide text-slate-800 sm:text-3xl">
          Choose Your Plan
        </h2>
        {renderContent()}
      </section>

      {/* Checkout Section */}
      {/* {selectedPlan && <Checkout id={selectedPlan} />} */}
    </>
  )
}

export function EmptyPricingSection() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconReceiptOff />
        </EmptyMedia>
        <EmptyTitle className="font-serif tracking-wide">No Plans Available</EmptyTitle>
        <EmptyDescription className="text-base">
          No pricing plans are currently available for this webinar.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="sr-only" />
    </Empty>
  )
}
