'use client'

import _ from 'lodash'
import { useSession } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'
import { base } from 'viem/chains'
import { useChainId } from 'wagmi'
import MyPagination from '~/components/custom/pagination'
import Ribbon from '~/components/ui/ribbon'
import ShineBorder from '~/components/ui/shine-border'
import { WebinarEntity } from '~/data/entity/webinar'
import { WebinarPrivateEntity } from '~/data/entity/webinar_private'
import { capitalizeFirstLetter } from '~/lib/string'
import { findLivePrivateWebinarSession, findLiveWebinarSession, findWebinars } from '../action'
import { WebinarCard, WebinarCardSkeleton } from './webinar-card'

export default function WebinarList() {
  const { data: session } = useSession()

  const [page, setPage] = useState(1)
  const pageSize = 12

  const chain_id = useChainId() || base.id

  const [liveWebinar, setLiveWebinar] = useState<WebinarEntity | null>(null)
  const [livePrivateWebinar, setLivePrivateWebinar] = useState<WebinarPrivateEntity | null>(null)
  const [webinars, setWebinars] = useState<WebinarEntity[]>([])

  const [totalAttendance, setTotalAttendance] = useState(0)
  const [totalLiveAttendance, setTotalLiveAttendance] = useState(0)
  const [totalLivePrivateAttendance, setTotalLivePrivateAttendance] = useState(0)

  const [isFetching, setIsFetching] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const getLiveWebinar = useCallback(async () => {
    const { data, total } = await findLiveWebinarSession({
      chain_id,
    })

    setLiveWebinar(data)
    setTotalLiveAttendance(total)
    setIsLoading(false)
  }, [chain_id])

  const getLivePrivateWebinar = useCallback(async () => {
    const { data, total } = await findLivePrivateWebinarSession({
      chain_id,
    })
    setLivePrivateWebinar(data)
    setTotalLivePrivateAttendance(total)
    setIsLoading(false)
  }, [chain_id])

  const getListWebinars = useCallback(async () => {
    setIsFetching(true)
    const { data, total } = await findWebinars({ page, pageSize })

    setWebinars(data)
    setTotalAttendance(total)
    setIsFetching(false)
  }, [page, pageSize])

  useEffect(() => {
    getLiveWebinar()
    getLivePrivateWebinar()
    getListWebinars()
  }, [getLiveWebinar, getListWebinars, getLivePrivateWebinar])

  function renderLiveButton() {
    if (liveWebinar) {
      const baseUrl = `/webinar/live/${liveWebinar.slug}`
      let redirectUrl = baseUrl

      if (!session?.user) {
        redirectUrl = `/sign-in?callbackUrl=${encodeURIComponent(baseUrl)}`
      }

      if (new Date(liveWebinar?.end_date) < new Date()) {
        return null
      }

      return (
        <ShineBorder
          className="p-0 w-full h-full flex flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl"
          color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        >
          <WebinarCard
            title={liveWebinar.title}
            slug={redirectUrl}
            description={liveWebinar.description}
            participants={totalLiveAttendance || 0}
            date={liveWebinar.start_date}
            isLive
          />
        </ShineBorder>
      )
    }

    return null
  }

  function renderLivePrivateButton() {
    if (!session?.user) {
      return null
    }

    if (livePrivateWebinar) {
      const redirectUrl = `/webinar/live/private/${livePrivateWebinar.slug}`

      if (new Date(livePrivateWebinar?.end_date) < new Date()) {
        return null
      }

      const type = _.get(livePrivateWebinar, 'webinar_batch.type', 'Private')

      return (
        <ShineBorder
          className="p-0 w-full h-full flex flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl"
          color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        >
          <Ribbon text={capitalizeFirstLetter(type)} />
          <WebinarCard
            title={livePrivateWebinar.title}
            slug={redirectUrl}
            description={livePrivateWebinar.description}
            participants={totalLivePrivateAttendance || 0}
            date={livePrivateWebinar.start_date}
            isLive
          />
        </ShineBorder>
      )
    }

    return null
  }

  function renderContent() {
    if (isLoading || isFetching) {
      return [1, 2, 3, 4].map((index) => <WebinarCardSkeleton key={index} />)
    }

    return (
      <>
        {renderLiveButton()}
        {renderLivePrivateButton()}

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
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-center mt-8">
        {renderContent()}
      </div>

      <MyPagination
        currentPage={page}
        totalPage={Math.ceil(totalAttendance / pageSize)}
        onPageChange={setPage}
      />
    </>
  )
}
