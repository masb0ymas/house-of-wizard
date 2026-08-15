import { queryOptions } from '@tanstack/react-query'

import { PaginateDto } from '../dtos/paginate'
import { services } from '../services'

const listWebinars = (params?: PaginateDto) =>
  queryOptions({
    queryKey: ['webinars', params],
    queryFn: async () => {
      const res = await services.webinar.main.list({
        data: {
          offset: params?.offset,
          limit: params?.limit,
        },
      })

      return res.data
    },
  })

const getWebinarBySlug = (slug: string) =>
  queryOptions({
    queryKey: ['webinar', slug],
    queryFn: async () => {
      const res = await services.webinar.main.slug(slug)
      return res.data
    },
  })

const getActiveWebinarPrivatePlan = () =>
  queryOptions({
    queryKey: ['webinar-private-plan'],
    queryFn: async () => {
      const res = await services.webinar.privatePlan.active()
      return res.data
    },
  })

export const webinarQueries = {
  list: listWebinars,
  slug: getWebinarBySlug,
} as const

export const webinarPrivatePlanQueries = {
  active: getActiveWebinarPrivatePlan,
} as const
