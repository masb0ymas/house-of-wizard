import { createServerFn } from '@tanstack/react-start'

import type { PaginateDto } from '../dtos/paginate'
import { services } from '../services'

export const listWebinarsFn = createServerFn({ method: 'GET' })
  .inputValidator((data: PaginateDto) => data)
  .handler(async ({ data }) => {
    const res = await services.webinars.index({
      page: data.offset,
      pageSize: data.limit,
    })

    return res.data
  })

export const getWebinarBySlugFn = createServerFn({ method: 'GET' })
  .inputValidator((slug: string) => slug)
  .handler(async ({ data }) => {
    const res = await services.webinars.slug(data)

    return res.data
  })
