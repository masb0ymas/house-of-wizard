import { useQueryState } from 'nuqs'

type UsePaginationQueryOptions = {
  defaultOffset?: number
  defaultLimit?: number
}

export function usePaginationQuery(options: UsePaginationQueryOptions = {}) {
  const [queryPage] = useQueryState('page')
  const [queryPageSize] = useQueryState('pageSize')

  const pageIndex = queryPage ? parseInt(queryPage) : (options.defaultOffset ?? 0)
  const pageSize = queryPageSize ? parseInt(queryPageSize) : (options.defaultLimit ?? 10)

  const offset = pageIndex * pageSize

  return { offset, limit: pageSize, pageIndex }
}
