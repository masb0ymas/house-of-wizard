import YoutubePlyr from '~/components/custom/plyr'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '~/components/ui/pagination'
import { Separator } from '~/components/ui/separator'
import WebinarCard from '../../partials/webinar-card'

export default function WebinarWatchPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-semibold font-serif tracking-wide">Webinar Data Analyst</h1>
        <h4 className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Elevate your expertise by learning how to analyze Web3 data and take the first step toward
          a career in the decentralized future.
        </h4>

        <YoutubePlyr title={'Webinar Data Analyst'} src={'https://youtu.be/0qFaMn6gVyc'} />

        <div className="flex flex-col lg:items-center gap-1 mt-8">
          <h2 className="text-2xl font-semibold font-serif tracking-wide">Most Access Webinar</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            To become a greater wizard, learn how to analyze Web3 data and start your career in the
            decentralized future.
          </p>
        </div>

        <Separator className="my-2" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-center mt-8">
          <WebinarCard
            title="Explore NEAR Blockchain"
            slug="explore-near-blockchain"
            description="Learn how to analyze Web3 data and start your career in the decentralized future."
            participants={10}
            duration="1:30:00"
            date="2023-01-01"
            isLive={false}
          />

          <WebinarCard
            title="Explore NEAR Blockchain"
            slug="explore-near-blockchain"
            description="Learn how to analyze Web3 data and start your career in the decentralized future."
            participants={10}
            duration="1:30:00"
            date="2023-01-01"
            isLive={false}
          />

          <WebinarCard
            title="Explore NEAR Blockchain"
            slug="explore-near-blockchain"
            description="Learn how to analyze Web3 data and start your career in the decentralized future."
            participants={10}
            duration="1:30:00"
            date="2023-01-01"
            isLive={false}
          />

          <WebinarCard
            title="Explore NEAR Blockchain"
            slug="explore-near-blockchain"
            description="Learn how to analyze Web3 data and start your career in the decentralized future."
            participants={10}
            duration="1:30:00"
            date="2023-01-01"
            isLive={false}
          />
        </div>

        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="rounded-xl" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="rounded-xl">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="rounded-xl" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="rounded-xl">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="rounded-xl" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  )
}
