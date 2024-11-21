import { Filter, Search } from 'lucide-react'
import { Metadata } from 'next'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '~/components/ui/pagination'
import { auth } from '~/lib/auth'
import WebinarList from './partials/webinar-list'

export const metadata: Metadata = {
  title: 'Webinar -House of Wizard',
  description: 'Webinar House of Wizard',
}

export default async function WebinarPage() {
  const session = await auth()

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="flex flex-col">
        <h1 className="text-center text-4xl font-bold font-serif tracking-wide text-gray-800 dark:text-gray-100">
          Webinar
        </h1>
        <h4 className="text-center text-lg text-gray-600 dark:text-gray-300">
          To become a greater wizard, learn how to analyze Web3 data and start your career in the
          decentralized future.
        </h4>
      </div>

      <div className="flex justify-center items-center gap-2 mt-8">
        <Button variant={'outline'} radius={'xl'} className="h-10">
          <Filter className="h-5 w-5" />
          <span>Filter</span>
        </Button>
        <div className="relative w-full bg-white rounded-xl shadow-sm">
          <Input type="text" placeholder="Search webinar..." className="w-full rounded-xl h-10" />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <WebinarList session={session} />

      <Pagination className="my-8">
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
    </section>
  )
}
