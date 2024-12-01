import { Metadata } from 'next'
import { capitalizeFirstLetter } from '~/lib/string'
import WebinarWatchSection from './partials/webinar-watch'

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
    title: `Watch ${title} - House of Wizard`,
    description: `Webinar Watch ${title} House of Wizard`,
  }
}

export default async function WebinarWatchPage({ params }: IProps) {
  const { slug } = await params

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <WebinarWatchSection slug={slug} />
    </section>
  )
}