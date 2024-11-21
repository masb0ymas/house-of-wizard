import { Metadata } from 'next'
import NotFound from '~/components/custom/not-found'
import WebinarLiveSection from './partials/webinar-live'
import { capitalizeFirstLetter } from '~/lib/string'

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
    title: `Live ${title} - House of Wizard`,
    description: `Webinar Live ${title} House of Wizard`,
  }
}

export default async function WebinarLivePage({ params }: IProps) {
  const { slug } = await params

  if (!slug) {
    return <NotFound />
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <WebinarLiveSection slug={slug} />
    </section>
  )
}
