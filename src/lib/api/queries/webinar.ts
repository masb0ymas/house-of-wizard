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

const getWebinarBySlug = (slug: string) =>
  queryOptions({
    queryKey: ['webinar', slug],
    queryFn: () => servers.webinar.slug({ data: slug }),
  })

export const webinarQueries = {
  list: listWebinars,
  slug: getWebinarBySlug,
} as const
