import { IconArrowRight, IconLock, IconUsers } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import { useMemo } from 'react'

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
  const status = useMemo(() => {
    if (isLive) {
      return {
        label: 'Live Now',
        className: 'bg-rose-50 text-rose-700 ring-rose-200',
      }
    }

    if (isPremium) {
      return {
        label: 'Premium',
        className: 'bg-amber-50 text-amber-800 ring-amber-200',
      }
    }

    if (isRecording) {
      return {
        label: 'Replay',
        className: 'bg-slate-100 text-slate-700 ring-slate-200',
      }
    }

    return {
      label: 'Upcoming',
      className: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    }
  }, [isLive, isPremium, isRecording])

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
        <RainbowButton className="w-full h-10 rounded-xl gap-2" asChild>
          <Link to={slug}>
            <span className="font-serif font-semibold tracking-wider">
              Join Now
            </span>
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </RainbowButton>
      )
    }

    if (isPremium) {
      return (
        <Button className="w-full h-10" asChild>
          <Link to="/webinar/watch/$slug" params={{ slug }}>
            <IconLock className="h-6 w-6" />
            <span className="font-semibold tracking-wide">Buy Now</span>
          </Link>
        </Button>
      )
    }

    if (!isRecording) {
      return (
        <Button className="w-full h-10" variant={'secondary'}>
          <span className="font-medium tracking-wide">No Recording</span>
        </Button>
      )
    }

    return (
      <Button className="w-full h-10" variant="primary" asChild>
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
          <CardTitle className="text-purple-900 ring-purple-200">
            {speaker}
          </CardTitle>
        </CardHeading>
        <CardToolbar>
          <Button variant="outline" size="sm" className="text-purple-800">
            <IconUsers className="text-purple-800" />
            <span>{participants}</span>
          </Button>
        </CardToolbar>
      </CardHeader>
      <CardContent className="py-2 mt-auto flex flex-col">
        <div className="space-y-2 flex-1 min-h-[96px]">
          <p className="text-base font-semibold leading-snug text-slate-900 [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
            {title}
          </p>
          <p className="text-sm leading-relaxed text-slate-600 [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden">
            {description}
          </p>
        </div>
        {schedule && (
          <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span>{duration ? 'Duration' : 'Schedule'}</span>
            <span className="text-sm font-medium normal-case text-slate-700">
              {schedule}
            </span>
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
