import { queryOptions } from '@tanstack/react-query'

import type { PaginateDto } from '../dtos/paginate'
import { servers } from '../servers'

const listWebinars = (params?: PaginateDto) =>
  queryOptions({
    queryKey: ['webinars', params],
    queryFn: () =>
      servers.webinar.list({
        data: {
          offset: params?.offset,
          limit: params?.limit,
        },
      }),
  })

export const webinarQueries = {
  list: listWebinars,
} as const
