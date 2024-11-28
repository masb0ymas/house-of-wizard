'use client'

import { IconLoader } from '@tabler/icons-react'
import { useSession } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'
import ShineBorder from '~/components/ui/shine-border'
import { WebinarEntity } from '~/data/entity/webinar'
import { getWebinarLiveSession, getWebinars } from '../action'
import WebinarCard from './webinar-card'

export default function WebinarList() {
  const { data: session } = useSession()

  const [webinarLive, setWebinarLive] = useState<WebinarEntity | null>(null)
  const [webinars, setWebinars] = useState<WebinarEntity[]>([])
  const [total, setTotal] = useState(0)

  const [isLoading, setIsLoading] = useState(false)

  const getLiveWebinar = useCallback(async () => {
    setIsLoading(true)
    const { data } = await getWebinarLiveSession()
    setWebinarLive(data)
    setIsLoading(false)
  }, [])

  const getListWebinars = useCallback(async () => {
    setIsLoading(true)
    const { data, total } = await getWebinars({ pageSize: 11 })
    setWebinars(data)
    setTotal(total)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getListWebinars()
    getLiveWebinar()
  }, [getListWebinars, getLiveWebinar])

  function renderLiveButton() {
    if (webinarLive) {
      const baseUrl = `/webinar/live/${webinarLive.slug}`
      let redirectUrl = baseUrl

      if (!session?.user) {
        redirectUrl = `/sign-in?callbackUrl=${encodeURIComponent(baseUrl)}`
      }

      if (new Date(webinarLive?.end_date) < new Date()) {
        return null
      }

      return (
        <ShineBorder
          className="p-0 w-full h-full flex flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl"
          color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        >
          <WebinarCard
            title={webinarLive.title}
            slug={redirectUrl}
            description={webinarLive.description}
            participants={webinarLive.total_participant || 0}
            date={webinarLive.start_date}
            isLive
          />
        </ShineBorder>
      )
    }

    return null
  }

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <IconLoader className="h-6 w-6 animate-spin" />
          <span>Loading...</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-center mt-8">
        {renderLiveButton()}

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
      </div>
    </>
  )
}
