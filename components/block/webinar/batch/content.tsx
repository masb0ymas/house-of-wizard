'use client'

import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { queries } from '@/lib/api/queries'

import CoursesDetailSection from './courses-detail'
import CurriculumSection from './curriculum'
import HeroSection from './hero'
import { PricingSection } from './pricing'

export default function WebinarBatchContent() {
  const {
    data: plansResponse,
    isLoading,
    isFetching,
  } = useQuery(queries.webinar.privatePlan.active())

  const loading = isLoading || isFetching
  const plansData = useMemo(() => {
    if (plansResponse?.data && plansResponse?.data?.length > 0) {
      return plansResponse.data
    }
    return []
  }, [plansResponse])

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
