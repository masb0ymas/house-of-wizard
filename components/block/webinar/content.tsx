'use client'

import { IconFilter, IconSearch } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { Input, InputWrapper } from '@/components/ui/input'
import { usePaginationQuery } from '@/hooks/use-pagination-query'
import { queries } from '@/lib/api/queries'
import { AuthSession } from '@/types/auth'

import { WebinarCard, WebinarCardSkeleton } from './webinar-card'

interface WebinarContentProps {
  auth?: AuthSession | null
}

export default function WebinarContent({ auth }: WebinarContentProps) {
  const { offset, limit } = usePaginationQuery()

  const {
    data: webinarResponse,
    isLoading,
    isFetching,
  } = useQuery(queries.webinar.main.list({ offset, limit }))

  const loading = isLoading || isFetching
  const webinars = useMemo(() => {
    if (webinarResponse?.data && webinarResponse.data.length > 0) {
      return webinarResponse.data
    }

    return []
  }, [webinarResponse])

  const isAuth = useMemo(() => {
    if (auth?.user) {
      return true
    }
    return false
  }, [auth])

  const renderContent = () => {
    if (loading) {
      return Array.from({ length: 3 }, (_, index) => <WebinarCardSkeleton key={index} />)
    }

    if (webinars.length > 0) {
      return webinars.map((webinar) => (
        <WebinarCard
          key={webinar.id}
          title={webinar.title}
          description={webinar.description}
          slug={webinar.slug}
          speaker={webinar.speakers}
          participants={webinar.total_participant}
          date={webinar.start_date ? new Date(webinar.start_date) : undefined}
          isLive={false}
          isRecording={Boolean(webinar.recording_url)}
          isAuth={isAuth}
        />
      ))
    }

    return <div>No webinars found</div>
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col">
        <h1 className="text-center font-serif text-4xl font-bold tracking-wide text-gray-800 dark:text-gray-100">
          Webinar
        </h1>
        <h4 className="text-center text-lg text-gray-600 dark:text-gray-300">
          To become a greater wizard, learn how to analyze Web3 data and start your career in the
          decentralized future.
        </h4>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        <Button variant={'outline'} className="h-10">
          <IconFilter className="h-5 w-5" />
          <span>Filter</span>
        </Button>
        <InputWrapper className="h-10">
          <IconSearch />
          <Input type="text" placeholder="Search..." />
        </InputWrapper>
      </div>

      <div className="mt-8 grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {renderContent()}
      </div>
    </section>
  )
}
