'use client'

import _ from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import { getWebinars } from '~/app/webinar/(main)/action'
import WebinarCard, { WebinarCardSkeleton } from '~/app/webinar/(main)/partials/webinar-card'
import Loader from '~/components/custom/loader'
import YoutubePlyr from '~/components/custom/plyr'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '~/components/ui/pagination'
import { Separator } from '~/components/ui/separator'
import { WebinarEntity } from '~/data/entity/webinar'
import { getWebinarBySlug } from '../action'

type IProps = {
  slug: string
}

export default function WebinarWatchSection({ slug }: IProps) {
  const [webinarBySlug, setWebinarBySlug] = useState<WebinarEntity | null>(null)
  const [webinars, setWebinars] = useState<WebinarEntity[]>([])
  const [total, setTotal] = useState(0)

  const [isLoading, setIsLoading] = useState(true)

  const getWebinar = useCallback(async () => {
    const { data } = await getWebinarBySlug(slug)
    setWebinarBySlug(data)
    setIsLoading(false)
  }, [slug])

  const getListWebinars = useCallback(async () => {
    const { data, total } = await getWebinars({ page: 1, pageSize: 8 })
    setWebinars(data)
    setTotal(total)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getWebinar()
    getListWebinars()
  }, [getWebinar, getListWebinars])

  function renderContent() {
    if (isLoading) {
      return <Loader />
    }

    return (
      <>
        <h1 className="text-4xl font-semibold font-serif tracking-wide">{webinarBySlug?.title}</h1>
        <h4 className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Elevate your expertise by learning how to analyze Web3 data and take the first step toward
          a career in the decentralized future.
        </h4>

        {_.isEmpty(webinarBySlug?.recording_url) ? (
          <>
            <h4 className="text-2xl font-semibold font-serif tracking-wide mt-10">
              No recording available
            </h4>
            <Separator />
          </>
        ) : (
          <YoutubePlyr
            title={String(webinarBySlug?.title)}
            src={String(webinarBySlug?.recording_url)}
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

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className="rounded-xl" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="rounded-xl">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="rounded-xl" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="rounded-xl">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="rounded-xl" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
