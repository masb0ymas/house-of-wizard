import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination'

type IProps = {
  currentPage: number
  totalPage: number
  onPageChange: (page: number) => void
}

export default function MyPagination({ currentPage, totalPage, onPageChange }: IProps) {
  return (
    <Pagination className="my-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(currentPage - 1)}
            className="rounded-xl"
            disabled={currentPage === 1}
          />
        </PaginationItem>

        {/* First page */}
        {currentPage > 2 && (
          <PaginationItem>
            <PaginationLink onClick={() => onPageChange(1)} className="rounded-xl">
              1
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Ellipsis if needed */}
        {currentPage > 3 && <PaginationEllipsis />}

        {/* Current page and neighbors */}
        {Array.from({ length: Math.min(3, totalPage) }, (_, i) => {
          const pageNumber = Math.min(Math.max(currentPage - 1 + i, 1), totalPage)
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                onClick={() => onPageChange(pageNumber)}
                className="rounded-xl"
                isActive={pageNumber === currentPage}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        {/* Ellipsis if needed */}
        {currentPage < totalPage - 2 && <PaginationEllipsis />}

        {/* Last page */}
        {currentPage < totalPage - 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => onPageChange(totalPage)} className="rounded-xl">
              {totalPage}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(currentPage + 1)}
            className="rounded-xl"
            disabled={currentPage === totalPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
