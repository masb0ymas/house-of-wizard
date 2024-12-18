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
  const renderPageNumbers = () => {
    const pages = new Set<number>();
    
    // Always add current page
    pages.add(currentPage);
    
    // Add previous and next page if they exist
    if (currentPage > 1) pages.add(currentPage - 1);
    if (currentPage < totalPage) pages.add(currentPage + 1);
    
    return Array.from(pages).sort((a, b) => a - b).map(pageNumber => (
      <PaginationItem key={pageNumber}>
        <PaginationLink
          onClick={() => onPageChange(pageNumber)}
          className="rounded-xl"
          isActive={pageNumber === currentPage}
        >
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    ));
  };

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
        {renderPageNumbers()}

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
