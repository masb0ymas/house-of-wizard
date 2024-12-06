'use client'

import { IconArrowRight, IconLoader } from '@tabler/icons-react'
import { subMinutes } from 'date-fns'
import _ from 'lodash'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { getWebinarLiveSession } from '~/app/webinar/(main)/action'
import { Description, ItemType } from '~/components/custom/description'
import Loader from '~/components/custom/loader'
import { RainbowButton } from '~/components/ui/rainbow-button'
import ShineBorder from '~/components/ui/shine-border'
import { WebinarEntity } from '~/data/entity/webinar'
import { WebinarAttendanceEntity } from '~/data/entity/webinar_attendance'
import { formatLocalDate } from '~/lib/date'
import { toast } from '~/lib/hooks/use-toast'
import { getAttendanceBySlug, markAttendance } from '../action'

type IProps = {
  slug: string
}

export default function WebinarLiveSection(props: IProps) {
  const { slug } = props
  const { data: session } = useSession()

  const [webinarLive, setWebinarLive] = useState<WebinarEntity | null>(null)
  const [webinarAttendance, setWebinarAttendance] = useState<WebinarAttendanceEntity | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [visible, setVisible] = useState(false)

  const getLiveWebinar = useCallback(async () => {
    const { data } = await getWebinarLiveSession()
    setWebinarLive(data)
    setIsLoading(false)

    console.log(visible)
  }, [visible])

  const getAttendance = useCallback(async () => {
    const { data } = await getAttendanceBySlug(slug)
    setWebinarAttendance(data)
    setIsLoading(false)
  }, [slug])

  const postAttendance = useCallback(async (webinar: WebinarEntity | null) => {
    setVisible(true)
    const { message } = await markAttendance(webinar)

    toast({
      title: 'Mark Attendance',
      description: message,
      duration: 5000,
    })

    setVisible(false)
  }, [])

  useEffect(() => {
    getLiveWebinar()
    getAttendance()
  }, [getLiveWebinar, getAttendance])

  const details = [
    { key: 'title', title: 'Webinar', type: ItemType.string },
    { key: 'speakers', title: 'Speakers', type: ItemType.string },
    { key: 'start_date', title: 'Schedule', type: ItemType.date },
    { key: 'webinar_url', title: 'Webinar URL', type: ItemType.link },
  ]

  function renderContent() {
    if (isLoading) {
      return <Loader />
    }

    // user not login
    if (!session?.user) {
      const callbackUrl = encodeURIComponent(`/webinar/live/${slug}`)

      return (
        <>
          <WebinarHeader
            title="Webinar - Live Session"
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
    if (webinarLive?.id) {
      // slug not match
      if (slug !== webinarLive?.slug) {
        return (
          <WebinarHeader
            title="Webinar - Live Session"
            subtitle="Currently, there are no webinars available."
          />
        )
      }

      // no attendance
      if (_.isEmpty(webinarAttendance?.id)) {
        const start_date = subMinutes(new Date(String(webinarLive?.start_date)), 30) // 30 minutes early
        const end_date = new Date(String(webinarLive?.end_date))

        const is_start_attendance = start_date < new Date() && end_date > new Date()
        const is_end_attendance = end_date < new Date()

        const live_at = webinarLive?.start_date && formatLocalDate(String(webinarLive?.start_date))

        let subtitle = 'To get access to the webinar, please mark attendance first.'
        if (is_end_attendance) {
          subtitle = 'Currently, there are no webinars available.'
        } else if (!is_start_attendance && !is_end_attendance) {
          subtitle = `Please stay tuned for the webinar, which will be streamed live on`
        }

        return (
          <>
            <WebinarHeader title="Webinar - Live Session" subtitle={subtitle} />

            {!is_start_attendance && !is_end_attendance && (
              <h4 className="text-lg sm:text-xl text-gray-500 font-semibold font-serif tracking-wide">
                {live_at} WIB
              </h4>
            )}

            {is_start_attendance && (
              <RainbowButton
                className="gap-2"
                disabled={visible}
                onClick={() => postAttendance(webinarLive)}
              >
                {visible && (
                  <IconLoader className="h-4 w-4 animate-spin transition-transform duration-300 group-hover:translate-x-1" />
                )}

                <span className="font-serif font-semibold tracking-wider">
                  {visible ? 'Loading...' : 'Mark Attendance'}
                </span>

                {!visible && (
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
      if (webinarAttendance?.id) {
        const start_date = subMinutes(new Date(String(webinarLive?.start_date)), 30) // 30 minutes early
        const end_date = new Date(String(webinarLive?.end_date))

        const is_start_attendance = start_date < new Date() && end_date > new Date()
        const is_end_attendance = end_date < new Date()

        return (
          <>
            <WebinarHeader
              title={webinarLive?.title}
              subtitle="Elevate your expertise by learning how to analyze Web3 data and take the first step toward a career in the decentralized future."
            />

            {is_start_attendance && !is_end_attendance && (
              <div className="flex flex-col gap-2 text-center w-full mt-8">
                {details.map((content) => Description<any>({ item: webinarLive, content }))}
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
        title="Webinar - Live Session"
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
