'use client'

import { IconLoader } from '@tabler/icons-react'
import _ from 'lodash'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { getWebinarLiveSession } from '~/app/webinar/action'
import { Description, ItemType } from '~/components/custom/description'
import ShineBorder from '~/components/ui/shine-border'
import { WebinarEntity } from '~/data/entity/webinar'

type IProps = {
  slug: string
}

export default function WebinarLiveSection(props: IProps) {
  const { slug } = props

  const [webinarLive, setWebinarLive] = useState<WebinarEntity | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const getLiveWebinar = useCallback(async () => {
    setIsLoading(true)
    const { data } = await getWebinarLiveSession()
    setWebinarLive(data)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getLiveWebinar()
  }, [getLiveWebinar])

  const details = [
    { key: 'title', title: 'Webinar', type: ItemType.string },
    { key: 'speakers', title: 'Speakers', type: ItemType.string },
    { key: 'start_date', title: 'Schedule', type: ItemType.date },
    { key: 'webinar_url', title: 'Webinar URL', type: ItemType.link },
  ]

  function renderContent() {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center gap-2 mt-10">
          <IconLoader className="h-6 w-6 animate-spin" />
          <span>Loading...</span>
        </div>
      )
    }

    if (!isLoading && !_.isEmpty(webinarLive?.slug) && slug !== webinarLive?.slug) {
      return (
        <>
          <h1 className="text-4xl font-semibold font-serif">Webinar Live Session</h1>
          <h4 className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            There are no webinars at this time
          </h4>
        </>
      )
    }

    return (
      <>
        <h1 className="text-4xl font-semibold font-serif">{webinarLive?.title}</h1>
        <h4 className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          To become a greater wizard, learn how to analyze Web3 data and start your career in the
          decentralized future.
        </h4>

        <div className="flex flex-col gap-2 text-center w-full mt-8">
          {details.map((content) => Description<any>({ item: webinarLive, content }))}
        </div>
      </>
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
