import { IconVideoOff } from '@tabler/icons-react'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, ErrorComponent } from '@tanstack/react-router'
import _ from 'lodash'
import { ArrowLeft } from 'lucide-react'
import { useMemo } from 'react'

import Loading from '~/components/block/common/loading'
import NotFound from '~/components/block/common/not-found'
import Plyr from '~/components/block/common/plyr'
import SimpleEmpty from '~/components/block/common/simple-empty'
import { WebinarCard, WebinarCardSkeleton } from '~/components/block/webinar/webinar-card'
import { Button } from '~/components/ui/button'
import { Separator } from '~/components/ui/separator'
import { queries } from '~/lib/api/queries'

export const Route = createFileRoute('/(public)/webinar/watch/$slug')({
  loader: async ({ params, context: { queryClient } }) => {
    const queryOptions = queries.webinar.slug(params.slug)
    return queryClient.ensureQueryData(queryOptions)
  },
  component: RouteComponent,
  pendingComponent: Loading,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
})

function RouteComponent() {
  const { slug } = Route.useParams()
  const navigate = Route.useNavigate()

  const queryWebinar = useSuspenseQuery(queries.webinar.slug(slug))
  const queryListWebinars = useQuery(queries.webinar.list({ offset: 0, limit: 3 }))

  const webinar = queryWebinar.data?.data ?? null
  const webinars = useMemo(() => queryListWebinars.data?.data ?? [], [queryListWebinars.data])

  const renderContent = () => {
    if (queryWebinar.isLoading || queryWebinar.isFetching) {
      return <WebinarCardSkeleton />
    }

    if (_.isEmpty(webinar.recording_url)) {
      return (
        <div className="flex items-center justify-center py-20">
          <SimpleEmpty
            title="No Recording Available"
            description="The webinar you are looking for does not have a recording yet."
            icon={IconVideoOff}
          >
            <Button onClick={() => navigate({ to: '/webinar' })}>
              <ArrowLeft />
              <span>Back</span>
            </Button>
          </SimpleEmpty>
        </div>
      )
    }

    return (
      <>
        <h1 className="font-serif text-4xl font-semibold tracking-wide">{webinar?.title}</h1>
        <h4 className="text-base text-gray-600 sm:text-lg dark:text-gray-300">
          Elevate your expertise by learning how to analyze Web3 data and take the first step toward
          a career in the decentralized future.
        </h4>
        <Plyr title={String(webinar?.title)} src={String(webinar?.recording_url)} />
      </>
    )
  }

  const renderWebinarContent = () => {
    if (queryListWebinars.isLoading || queryListWebinars.isFetching) {
      return Array.from({ length: 3 }, (_, index) => <WebinarCardSkeleton key={index} />)
    }

    if (webinars.length > 0) {
      return webinars.map((webinar) => (
        <WebinarCard
          key={webinar.id}
          title={webinar.title}
          description={webinar.description}
          slug={webinar.slug}
          speaker={webinar.speakers}
          participants={webinar.total_participant}
          date={webinar.start_date ? new Date(webinar.start_date) : undefined}
          isLive={false}
          isRecording={Boolean(webinar.recording_url)}
        />
      ))
    }

    return <div>No webinars found</div>
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center gap-4">
        {renderContent()}

        <div className="mt-8 flex flex-col gap-1 lg:items-center">
          <h2 className="font-serif text-2xl font-semibold tracking-wide">Most Access Webinar</h2>
          <p className="text-base text-gray-600 sm:text-lg dark:text-gray-300">
            To become a greater wizard, learn how to analyze Web3 data and start your career in the
            decentralized future.
          </p>
        </div>

        <Separator className="my-2" />

        <div className="mt-8 grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {renderWebinarContent()}
        </div>
      </div>
    </section>
  )
}
