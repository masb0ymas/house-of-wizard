import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { capitalizeFirstLetter } from '~/lib/string'
import LivePrivateWebinarSection from './partials/live-private-webinar-section'

type IParams = {
  slug: string
}

type IProps = {
  params: Promise<IParams>
}

export const generateMetadata = async ({ params }: IProps): Promise<Metadata> => {
  const { slug } = await params
  const title = capitalizeFirstLetter(slug)

  return {
    title: `Live Private ${title} - House of Wizard`,
    description: `Webinar Live Private ${title} House of Wizard`,
  }
}

export default async function WebinarLivePrivatePage({ params }: IProps) {
  const { slug } = await params

  if (!slug) {
    return notFound()
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <LivePrivateWebinarSection slug={slug} />
    </section>
  )
}
