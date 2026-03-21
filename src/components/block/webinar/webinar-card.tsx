import { IconArrowRight, IconLock, IconUsers } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'

import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeading,
  CardTitle,
  CardToolbar,
} from '~/components/ui/card'
import { RainbowButton } from '~/components/ui/rainbow-button'
import { Skeleton } from '~/components/ui/skeleton'
import { formatDate } from '~/lib/date'

interface WebinarCardProps {
  title: string
  description: string
  participants: number
  speaker: string
  isLive?: boolean
  isPremium?: boolean
  isRecording?: boolean
  slug: string
  date?: Date
  duration?: string
}

export function WebinarCard({
  title,
  description,
  participants,
  speaker,
  isLive = false,
  isPremium = false,
  isRecording = false,
  slug,
  date,
  duration,
}: WebinarCardProps) {
  const renderDays = () => {
    if (isLive || date) {
      return `${formatDate(date!, 'dd/MM/yyyy')} WIB`
    }

    if (duration) {
      return duration
    }

    return null
  }

  const renderButton = () => {
    if (isLive) {
      return (
        <RainbowButton className="h-10 w-full gap-2 rounded-xl" asChild>
          <Link to={slug}>
            <span className="font-serif font-semibold tracking-wider">Join Now</span>
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </RainbowButton>
      )
    }

    if (isPremium) {
      return (
        <Button className="h-10 w-full" asChild>
          <Link to="/webinar/watch/$slug" params={{ slug }}>
            <IconLock className="h-6 w-6" />
            <span className="font-semibold tracking-wide">Buy Now</span>
          </Link>
        </Button>
      )
    }

    if (!isRecording) {
      return (
        <Button className="h-10 w-full" variant={'secondary'}>
          <span className="font-medium tracking-wide">No Recording</span>
        </Button>
      )
    }

    return (
      <Button className="h-10 w-full" variant="primary" asChild>
        <Link to="/webinar/watch/$slug" params={{ slug }}>
          <span className="font-medium tracking-wide">Watch Recording</span>
        </Link>
      </Button>
    )
  }

  const schedule = renderDays()

  return (
    <Card className="w-[400px]" variant="accent">
      <CardHeader>
        <CardHeading>
          <CardTitle className="text-purple-900 ring-purple-200">{speaker}</CardTitle>
        </CardHeading>
        <CardToolbar>
          <Button variant="outline" size="sm" className="text-purple-800">
            <IconUsers className="text-purple-800" />
            <span>{participants}</span>
          </Button>
        </CardToolbar>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col py-2">
        <div className="min-h-[96px] flex-1 space-y-2">
          <p className="[display:-webkit-box] overflow-hidden text-base leading-snug font-semibold text-slate-900 [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
            {title}
          </p>
          <p className="[display:-webkit-box] overflow-hidden text-sm leading-relaxed text-slate-600 [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
            {description}
          </p>
        </div>
        {schedule && (
          <div className="mt-6 flex items-center justify-between text-xs font-semibold tracking-wider text-slate-400 uppercase">
            <span>{duration ? 'Duration' : 'Schedule'}</span>
            <span className="text-sm font-medium text-slate-700 normal-case">{schedule}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="justify-center">{renderButton()}</CardFooter>
    </Card>
  )
}

export function WebinarCardSkeleton() {
  return (
    <div className="h-full w-[400px] rounded-2xl border border-gray-200/80 bg-white p-5 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.45)]">
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-[120px] rounded-full" />
          <Skeleton className="h-6 w-[80px] rounded-full" />
        </div>
        <Skeleton className="h-6 w-[220px]" />
        <Skeleton className="h-4 w-[260px]" />
        <Skeleton className="h-4 w-[240px]" />

        <div className="mt-4 flex flex-row justify-between">
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-4 w-[80px]" />
        </div>

        <Skeleton className="mt-3 h-10 w-full" />
      </div>
    </div>
  )
}
