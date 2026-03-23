import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, ErrorComponent } from '@tanstack/react-router'
import { useMemo } from 'react'

import Loading from '~/components/block/common/loading'
import NotFound from '~/components/block/common/not-found'
import CoursesDetailSection from '~/components/block/webinar/batch/courses-detail'
import CurriculumSection from '~/components/block/webinar/batch/curriculum'
import HeroSection from '~/components/block/webinar/batch/hero'
import { PricingSection } from '~/components/block/webinar/batch/pricing'
import { queries } from '~/lib/api/queries'

export const Route = createFileRoute('/(public)/webinar/batch/')({
  loader: async ({ context: { queryClient } }) => {
    const queryOptions = queries.webinarPrivatePlan.get()
    return queryClient.ensureQueryData(queryOptions)
  },
  component: RouteComponent,
  pendingComponent: Loading,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
})

function RouteComponent() {
  const { data: plans, isLoading, isFetching } = useSuspenseQuery(queries.webinarPrivatePlan.get())

  const loading = isLoading || isFetching
  const plansData = useMemo(() => plans?.data || [], [plans])

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <HeroSection />

      {/* Courses Detail Section */}
      <CoursesDetailSection />

      {/* Curriculum Section */}
      <CurriculumSection />

      {/* Pricing Section */}
      <PricingSection loading={loading} data={plansData} />
    </div>
  )
}
