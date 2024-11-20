import { formatDate } from 'date-fns'
import { ArrowRight, Lock, Video } from 'lucide-react'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { RainbowButton } from '~/components/ui/rainbow-button'
import { shortText } from '~/lib/string'
import { id } from 'date-fns/locale'

type WebinarCardProps = {
  title: string
  slug: string
  description: string
  participants: number
  duration: string
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
        <Link href={`/webinar/live/${slug}`}>
          <RainbowButton className="w-full h-10 rounded-xl gap-2">
            <span className="font-serif font-semibold">Join Now</span>
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
            <span className="font-serif font-semibold">Buy Now</span>
          </Button>
        </Link>
      )
    }

    return (
      <Link href={`/webinar/watch/${slug}`}>
        <Button className="w-full h-10" variant={'outline'} radius={'xl'}>
          <Video className="h-6 w-6" />
          <span className="font-serif font-semibold">Watch Recording</span>
        </Button>
      </Link>
    )
  }

  const shortTitle = shortText(title, 20)
  const shortDescription = shortText(description, 100)

  return (
    <div className="border-[1px] p-4 border-gray-200 rounded-xl bg-white shadow-sm transition-all duration-200 hover:shadow-lg">
      <h2 className="text-xl font-semibold font-serif">{shortTitle}</h2>
      <p className="text-gray-600 text-sm font-medium dark:text-gray-300">{shortDescription}</p>
      <div className="flex flex-row justify-between my-4">
        {isLive ? (
          <span className="text-gray-600 text-sm font-medium dark:text-gray-300">
            {formatDate(date, 'dd MMM yyyy HH:mm', { locale: id })}
          </span>
        ) : (
          <span className="text-gray-600 text-sm font-medium dark:text-gray-300">{duration}</span>
        )}
        <span className="text-gray-600 text-sm font-medium dark:text-gray-300">{`${participants} Participant`}</span>
      </div>

      {renderButton()}
    </div>
  )
}