'use client'

import _ from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import { findWebinars } from '~/app/webinar/(main)/action'
import { WebinarCard, WebinarCardSkeleton } from '~/app/webinar/(main)/partials/webinar-card'
import Loader from '~/components/custom/loader'
import YoutubePlyr from '~/components/custom/plyr'
import { Separator } from '~/components/ui/separator'
import { WebinarEntity } from '~/data/entity/webinar'
import { findWebinarBySlug } from '../action'

type IProps = {
  slug: string
}

export default function WatchWebinarSection({ slug }: IProps) {
  const [watchWebinar, setWatchWebinar] = useState<WebinarEntity | null>(null)
  const [webinars, setWebinars] = useState<WebinarEntity[]>([])

  const [total, setTotal] = useState(0)

  const [isLoading, setIsLoading] = useState(true)

  const getWebinar = useCallback(async () => {
    const { data } = await findWebinarBySlug(slug)
    setWatchWebinar(data)
    setIsLoading(false)
  }, [slug])

  const getWebinars = useCallback(async () => {
    const { data, total } = await findWebinars({ page: 1, pageSize: 8 })
    setWebinars(data)
    setTotal(total)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getWebinar()
    getWebinars()
  }, [getWebinar, getWebinars])

  function renderContent() {
    if (isLoading) {
      return <Loader />
    }

    return (
      <>
        <h1 className="text-4xl font-semibold font-serif tracking-wide">{watchWebinar?.title}</h1>
        <h4 className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Elevate your expertise by learning how to analyze Web3 data and take the first step toward
          a career in the decentralized future.
        </h4>

        {_.isEmpty(watchWebinar?.recording_url) ? (
          <>
            <h4 className="text-2xl font-semibold font-serif tracking-wide mt-10">
              No recording available
            </h4>
            <Separator />
          </>
        ) : (
          <YoutubePlyr
            title={String(watchWebinar?.title)}
            src={String(watchWebinar?.recording_url)}
          />
        )}
      </>
    )
  }

  function renderWebinarContent() {
    if (isLoading) {
      return [1, 2, 3, 4].map((index) => <WebinarCardSkeleton key={index} />)
    }

    return (
      <>
        {webinars.map((webinar) => {
          return (
            <WebinarCard
              key={webinar.id}
              title={webinar.title}
              slug={webinar.slug}
              description={webinar.description}
              participants={webinar.total_participant}
              date={webinar.start_date}
              isLive={false}
              isRecording={Boolean(webinar.recording_url)}
            />
          )
        })}
      </>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {renderContent()}

      <div className="flex flex-col lg:items-center gap-1 mt-8">
        <h2 className="text-2xl font-semibold font-serif tracking-wide">Most Access Webinar</h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          To become a greater wizard, learn how to analyze Web3 data and start your career in the
          decentralized future.
        </p>
      </div>

      <Separator className="my-2" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-center mt-8">
        {renderWebinarContent()}
      </div>
    </div>
  )
}
