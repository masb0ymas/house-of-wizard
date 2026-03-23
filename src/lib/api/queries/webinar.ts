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

const getWebinarPrivatePlan = () =>
  queryOptions({
    queryKey: ['webinar-private-plan'],
    queryFn: () => servers.webinarPrivatePlan.get(),
  })

export const webinarQueries = {
  list: listWebinars,
  slug: getWebinarBySlug,
} as const

export const webinarPrivatePlanQueries = {
  get: getWebinarPrivatePlan,
} as const
