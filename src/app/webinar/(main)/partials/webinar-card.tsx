import { IconArrowRight, IconLock, IconUsers, IconVideo, IconVideoOff } from '@tabler/icons-react'
import clsx from 'clsx'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { RainbowButton } from '~/components/ui/rainbow-button'
import { Skeleton } from '~/components/ui/skeleton'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip'
import { formatLocalDate } from '~/lib/date'
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
  isRecording?: boolean
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
    isRecording = true,
  } = props
  function renderButton() {
    if (isLive) {
      return (
        <Link href={slug}>
          <RainbowButton className="w-full h-10 rounded-xl gap-2">
            <span className="font-serif font-semibold tracking-wider">Join Now</span>
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </RainbowButton>
        </Link>
      )
    }
    if (isPremium) {
      return (
        <Link href={`/webinar/watch/${slug}`}>
          <Button className="w-full h-10" radius={'xl'}>
            <IconLock className="h-6 w-6" />
            <span className="font-serif font-semibold text-gray-600 tracking-wider">Buy Now</span>
          </Button>
        </Link>
      )
    }
    if (!isRecording) {
      return (
        <Button className="w-full h-10" variant={'outline'} radius={'xl'}>
          <IconVideoOff className="h-6 w-6" />
          <span className="font-serif font-medium text-gray-600 tracking-wider">No Recording</span>
        </Button>
      )
    }
    return (
      <Link href={`/webinar/watch/${slug}`}>
        <Button className="w-full h-10" variant={'outline'} radius={'xl'}>
          <IconVideo className="h-6 w-6" />
          <span className="font-serif font-medium text-gray-600 tracking-wider">
            Watch Recording
          </span>
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
          {formatLocalDate(date)} WIB
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

export function WebinarCardSkeleton() {
  return (
    <div className="p-4 h-full w-full flex flex-col border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col flex-grow gap-2">
        <Skeleton className="h-6 w-[200px] mb-4" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />

        <div className="flex flex-row justify-between my-4">
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-4 w-[50px]" />
        </div>

        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  )
}
