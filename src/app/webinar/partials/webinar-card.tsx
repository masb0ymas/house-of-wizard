import { IconUsers } from '@tabler/icons-react'
import clsx from 'clsx'
import { formatDate } from 'date-fns'
import { id } from 'date-fns/locale'
import { ArrowRight, Lock, Video } from 'lucide-react'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { RainbowButton } from '~/components/ui/rainbow-button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip'
import { shortText } from '~/lib/string'

type WebinarCardProps = {
  title: string
  slug: string
  description: string
  participants: number
  duration?: string
  date: string
  isLive: boolean
  isPremium?: boolean
}

export default function WebinarCard(props: WebinarCardProps) {
  const {
    title,
    slug,
    description,
    participants,
    duration,
    date,
    isLive,
    isPremium = false,
  } = props

  function renderButton() {
    if (isLive) {
      return (
        <Link href={slug}>
          <RainbowButton className="w-full h-10 rounded-xl gap-2">
            <span className="font-serif font-semibold tracking-wider">Join Now</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </RainbowButton>
        </Link>
      )
    }

    if (isPremium) {
      return (
        <Link href={`/webinar/watch/${slug}`}>
          <Button className="w-full h-10" radius={'xl'}>
            <Lock className="h-6 w-6" />
            <span className="font-serif font-semibold tracking-wider">Buy Now</span>
          </Button>
        </Link>
      )
    }

    return (
      <Link href={`/webinar/watch/${slug}`}>
        <Button className="w-full h-10" variant={'outline'} radius={'xl'}>
          <Video className="h-6 w-6" />
          <span className="font-serif font-semibold tracking-wider">Watch Recording</span>
        </Button>
      </Link>
    )
  }

  const shortTitle = shortText(title, 20)
  const shortDescription = shortText(description, 100)

  function renderDays() {
    if (isLive || date) {
      return (
        <span className="text-gray-600 text-sm font-medium dark:text-gray-300">
          {formatDate(date, 'dd MMM yyyy HH:mm', { locale: id })} WIB
        </span>
      )
    }

    if (duration) {
      return (
        <span className="text-gray-600 text-sm font-medium dark:text-gray-300">{duration}</span>
      )
    }

    return null
  }

  return (
    <div
      className={clsx(
        'p-4 h-full w-full flex flex-col border-gray-200 rounded-xl bg-white',
        !isLive && 'border-[1px] shadow-sm transition-all duration-200 hover:shadow-lg'
      )}
    >
      <div className="flex flex-col flex-grow">
        <h2 className="text-xl font-semibold font-serif tracking-wide">{shortTitle}</h2>
        <p className="text-gray-600 text-sm font-medium dark:text-gray-300 flex-grow">
          {shortDescription}
        </p>
        <div className="flex flex-row justify-between my-4">
          {renderDays()}

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex flex-row items-center gap-2">
                  <span className="text-gray-500 text-sm font-medium font-serif tracking-wider dark:text-gray-300">{`${participants}`}</span>
                  <IconUsers className="h-4 w-4 text-gray-500" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span>Total Participant</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {renderButton()}
      </div>
    </div>
  )
}
