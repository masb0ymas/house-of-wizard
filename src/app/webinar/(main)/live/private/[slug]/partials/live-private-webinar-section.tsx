'use client'

import { IconArrowRight, IconLoader } from '@tabler/icons-react'
import { subMinutes } from 'date-fns'
import _ from 'lodash'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { base } from 'viem/chains'
import { useChainId } from 'wagmi'
import { findLivePrivateWebinarSession } from '~/app/webinar/(main)/action'
import { Description, ItemType } from '~/components/custom/description'
import Loader from '~/components/custom/loader'
import { RainbowButton } from '~/components/ui/rainbow-button'
import ShineBorder from '~/components/ui/shine-border'
import { WebinarBatchEntity } from '~/data/entity/webinar_batch'
import { WebinarPrivateEntity } from '~/data/entity/webinar_private'
import { WebinarPrivateAttendanceEntity } from '~/data/entity/webinar_private_attendance'
import { formatLocalDate } from '~/lib/date'
import { findActiveBatch, findPrivateAttendanceBySlug, markPrivateAttendance } from '../action'

type IProps = {
  slug: string
}

export default function LivePrivateWebinarSection(props: IProps) {
  const { slug } = props
  const { data: session } = useSession()

  const chain_id = useChainId() || base.id

  const [webinarBatch, setWebinarBatch] = useState<WebinarBatchEntity | null>(null)
  const [livePrivateWebinar, setLivePrivateWebinar] = useState<WebinarPrivateEntity | null>(null)
  const [livePrivateWebinarAttendance, setLivePrivateWebinarAttendance] =
    useState<WebinarPrivateAttendanceEntity | null>(null)

  const [isLoading, setIsLoading] = useState(true)
  const [isFetching, setIsFetching] = useState(false)

  const getLivePrivateWebinar = useCallback(async () => {
    const { data } = await findLivePrivateWebinarSession({ chain_id })
    setLivePrivateWebinar(data)
    setIsLoading(false)

    console.log('Fetching...', isFetching)
  }, [chain_id, isFetching])

  const getWebinarBatch = useCallback(async () => {
    const { data } = await findActiveBatch()
    setWebinarBatch(data)
    setIsLoading(false)
  }, [])

  const getPrivateAttendance = useCallback(async () => {
    const { data } = await findPrivateAttendanceBySlug(slug)
    setLivePrivateWebinarAttendance(data)
    setIsLoading(false)
  }, [slug])

  const postAttendance = useCallback(async (webinar: WebinarPrivateEntity | null) => {
    setIsFetching(true)
    const { message, isError } = await markPrivateAttendance(webinar)

    if (!isError) {
      toast.success('Successfully marked attendance', {
        duration: 5000,
      })
    } else {
      toast.error(`Failed to mark attendance, error: ${message}`, {
        duration: 5000,
      })
    }
    setIsFetching(false)
  }, [])

  useEffect(() => {
    getLivePrivateWebinar()
    getWebinarBatch()
    getPrivateAttendance()
  }, [getLivePrivateWebinar, getPrivateAttendance, getWebinarBatch])

  const details = [
    { key: 'webinar_batch.batch', title: 'Batch', type: ItemType.string },
    { key: 'title', title: 'Webinar', type: ItemType.string },
    { key: 'instructor.user.fullname', title: 'Instructor', type: ItemType.string },
    { key: 'webinar_batch.type', title: 'Type', type: ItemType.string },
    { key: 'category.name', title: 'Category', type: ItemType.string },
    { key: 'start_date', title: 'Schedule', type: ItemType.date },
    { key: 'webinar_url', title: 'Webinar URL', type: ItemType.link },
  ]

  function renderContent() {
    if (isLoading) {
      return <Loader />
    }

    const batch = _.get(webinarBatch, 'batch', 0)
    const new_batch = `Batch ${batch}`

    // user not login
    if (!session?.user) {
      const callbackUrl = encodeURIComponent(`/webinar/live/private/${slug}`)

      return (
        <>
          <WebinarHeader
            title={`Webinar - Live Private Session ${new_batch}`}
            subtitle="To enhance your skills and expertise, please log in first."
          />

          <Link href={`/sign-in?callbackUrl=${callbackUrl}`}>
            <RainbowButton className="gap-2">
              <span className="font-serif font-semibold tracking-wider">Get Access</span>
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </RainbowButton>
          </Link>
        </>
      )
    }

    // webinar live exists
    if (livePrivateWebinar?.id) {
      // slug not match
      if (slug !== livePrivateWebinar?.slug) {
        return (
          <WebinarHeader
            title={`Webinar - Live Private Session ${new_batch}`}
            subtitle="Currently, there are no webinars available."
          />
        )
      }

      // no attendance
      if (_.isEmpty(livePrivateWebinarAttendance?.id)) {
        const start_date = subMinutes(new Date(String(livePrivateWebinar?.start_date)), 30) // 30 minutes early
        const end_date = new Date(String(livePrivateWebinar?.end_date))

        const is_start_attendance = start_date < new Date() && end_date > new Date()
        const is_end_attendance = end_date < new Date()

        const live_at =
          livePrivateWebinar?.start_date && formatLocalDate(String(livePrivateWebinar?.start_date))

        let subtitle = 'To get access to the webinar, please mark attendance first.'
        if (is_end_attendance) {
          subtitle = 'Currently, there are no webinars available.'
        } else if (!is_start_attendance && !is_end_attendance) {
          subtitle = `${livePrivateWebinar?.description} Please stay tuned for the webinar, which will be streamed live on`
        }

        return (
          <>
            <WebinarHeader
              title={`Webinar - Live Private Session ${new_batch}`}
              subtitle={subtitle}
            />

            {!is_start_attendance && !is_end_attendance && (
              <h4 className="text-lg sm:text-xl text-gray-500 font-semibold font-serif tracking-wide">
                {live_at} WIB
              </h4>
            )}

            {is_start_attendance && (
              <RainbowButton
                className="gap-2"
                disabled={isFetching}
                onClick={() => postAttendance(livePrivateWebinar)}
              >
                {isFetching && (
                  <IconLoader className="h-4 w-4 animate-spin transition-transform duration-300 group-hover:translate-x-1" />
                )}

                <span className="font-serif font-semibold tracking-wider">
                  {isFetching ? 'Loading...' : 'Mark Attendance'}
                </span>

                {!isFetching && (
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </RainbowButton>
            )}

            {is_end_attendance && (
              <Link href="/webinar">
                <RainbowButton className="gap-2">
                  <span className="font-serif font-semibold tracking-wider">Webinar Ended</span>
                </RainbowButton>
              </Link>
            )}

            {!is_start_attendance && !is_end_attendance && (
              <RainbowButton className="gap-2">
                <span className="font-serif font-semibold tracking-wider">Upcoming Session</span>
              </RainbowButton>
            )}
          </>
        )
      }

      // attendance exists
      if (livePrivateWebinarAttendance?.id) {
        const start_date = subMinutes(new Date(String(livePrivateWebinar?.start_date)), 30) // 30 minutes early
        const end_date = new Date(String(livePrivateWebinar?.end_date))

        const is_start_attendance = start_date < new Date() && end_date > new Date()
        const is_end_attendance = end_date < new Date()

        return (
          <>
            <WebinarHeader
              title={livePrivateWebinar?.title}
              subtitle={`Elevate your expertise by learning how to analyze Web3 data and take the first step toward a career in the decentralized future.`}
            />

            {is_start_attendance && !is_end_attendance && (
              <div className="flex flex-col gap-2 text-center w-full mt-8">
                {details.map((content) => Description<any>({ item: livePrivateWebinar, content }))}
              </div>
            )}

            {is_end_attendance && (
              <Link href="/webinar">
                <RainbowButton className="gap-2">
                  <span className="font-serif font-semibold tracking-wider">Webinar Ended</span>
                </RainbowButton>
              </Link>
            )}
          </>
        )
      }
    }

    return (
      <WebinarHeader
        title={`Webinar - Live Private Session ${new_batch}`}
        subtitle="Currently, there are no webinars available."
      />
    )
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <ShineBorder
        className="relative h-48 w-48 min-h-48 min-w-48 p-0 flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
      >
        <Image
          src="/logo-how.png"
          alt="House of Wizard"
          className="h-48 w-48 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
          width={192}
          height={192}
        />
      </ShineBorder>

      {renderContent()}
    </div>
  )
}

type WebinarHeaderProps = {
  title: string
  subtitle: string
}

function WebinarHeader({ title, subtitle }: WebinarHeaderProps) {
  return (
    <>
      <h1 className="text-4xl font-semibold font-serif tracking-wide">{title}</h1>
      <h4 className="text-base sm:text-lg text-gray-600 dark:text-gray-300">{subtitle}</h4>
    </>
  )
}
