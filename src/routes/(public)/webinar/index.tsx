import { IconFilter, IconSearch } from '@tabler/icons-react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useQueryState } from 'nuqs'
import { useMemo } from 'react'

import Loading from '~/components/block/common/loading'
import NotFound from '~/components/block/common/not-found'
import { WebinarCard, WebinarCardSkeleton } from '~/components/block/webinar/webinar-card'
import { Button } from '~/components/ui/button'
import { Input, InputWrapper } from '~/components/ui/input'
import { queries } from '~/lib/api/queries'

export const Route = createFileRoute('/(public)/webinar/')({
  loader: ({ context: { queryClient } }) => {
    const queryOptions = queries.webinar.list({ offset: 0, limit: 10 })
    return queryClient.ensureQueryData(queryOptions)
  },
  component: RouteComponent,
  pendingComponent: Loading,
  notFoundComponent: NotFound,
})

function RouteComponent() {
  const [queryPage] = useQueryState('page')
  const [queryPageSize] = useQueryState('pageSize')

  const page = queryPage ? Number(queryPage) : 0
  const pageSize = queryPageSize ? Number(queryPageSize) : 10
  const offset = Math.max(page * pageSize, 0)

  const {
    data: webinarResponse,
    isLoading,
    isFetching,
  } = useSuspenseQuery(queries.webinar.list({ offset, limit: pageSize }))

  const loading = isLoading || isFetching
  const webinars = useMemo(() => webinarResponse?.data || [], [webinarResponse])

  const renderContent = () => {
    if (loading) {
      return Array.from({ length: 4 }, (_, index) => <WebinarCardSkeleton key={index} />)
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
      <div className="flex flex-col">
        <h1 className="text-center font-serif text-4xl font-bold tracking-wide text-gray-800 dark:text-gray-100">
          Webinar
        </h1>
        <h4 className="text-center text-lg text-gray-600 dark:text-gray-300">
          To become a greater wizard, learn how to analyze Web3 data and start your career in the
          decentralized future.
        </h4>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        <Button variant={'outline'} className="h-10">
          <IconFilter className="h-5 w-5" />
          <span>Filter</span>
        </Button>
        <InputWrapper className="h-10">
          <IconSearch />
          <Input type="text" placeholder="Search..." />
        </InputWrapper>
      </div>

      <div className="mt-8 grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {renderContent()}
      </div>
    </section>
  )
}
