'use client'

import { IconArrowLeft, IconVideoOff } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import _ from 'lodash'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Separator } from '@/components/ui/separator'
import { queries } from '@/lib/api/queries'
import { AuthSession } from '@/types/auth'

import YoutubePlyr from '../../common/plyr'
import SimpleEmpty from '../../common/simple-empty'
import { WebinarCard, WebinarCardSkeleton } from '../webinar-card'

interface WebinarWatchContentProps {
  slug: string
  auth?: AuthSession
}

export default function WebinarWatchContent({ slug, auth }: WebinarWatchContentProps) {
  const router = useRouter()

  const queryWebinar = useQuery(queries.webinar.main.slug(slug))
  const queryListWebinars = useQuery(queries.webinar.main.list({ offset: 0, limit: 3 }))

  const webinar = queryWebinar.data?.data ?? null
  const webinars = useMemo(() => {
    if (queryListWebinars.data?.data && Array.isArray(queryListWebinars.data.data)) {
      return queryListWebinars.data.data.filter((webinar) => webinar.slug !== slug)
    }
    return []
  }, [queryListWebinars.data, slug])

  const isAuth = useMemo(() => {
    if (auth?.user) {
      return true
    }
    return false
  }, [auth])

  const renderContent = () => {
    if (queryWebinar.isLoading || queryWebinar.isFetching) {
      return <WebinarCardSkeleton />
    }

    if (_.isEmpty(webinar?.recording_url)) {
      return (
        <div className="flex items-center justify-center py-20">
          <SimpleEmpty
            title="No Recording Available"
            description="The webinar you are looking for does not have a recording yet."
            icon={IconVideoOff}
          >
            <Button onClick={() => router.push('/webinar')}>
              <IconArrowLeft />
              <span>Back</span>
            </Button>
          </SimpleEmpty>
        </div>
      )
    }

    return (
      <Container className="relative grid gap-7.5 pb-4 lg:pb-6">
        <h1 className="font-serif text-4xl font-semibold tracking-wide">{webinar?.title}</h1>
        <h4 className="text-base text-gray-600 sm:text-lg dark:text-gray-300">
          Elevate your expertise by learning how to analyze Web3 data and take the first step toward
          a career in the decentralized future.
        </h4>
        <div className="bg-muted aspect-video overflow-hidden rounded-lg">
          <YoutubePlyr src={String(webinar?.recording_url)} />
        </div>
      </Container>
    )
  }

  const renderWebinarContent = () => {
    if (queryListWebinars.isLoading || queryListWebinars.isFetching) {
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
      <div className="flex flex-col items-center justify-center gap-4">
        {renderContent()}

        <div className="mt-8 flex flex-col gap-1 lg:items-center">
          <h2 className="font-serif text-2xl font-semibold tracking-wide">Most Access Webinar</h2>
          <p className="text-base text-gray-600 sm:text-lg dark:text-gray-300">
            To become a greater wizard, learn how to analyze Web3 data and start your career in the
            decentralized future.
          </p>
        </div>

        <Separator className="my-2" />

        <div className="mt-8 grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {renderWebinarContent()}
        </div>
      </div>
    </section>
  )
}
