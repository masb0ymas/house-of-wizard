import { createServerFn } from '@tanstack/react-start'

import type { PaginateDto } from '../dtos/paginate'
import { services } from '../services'

export const listWebinarsFn = createServerFn({ method: 'GET' })
  .inputValidator((data: PaginateDto) => data)
  .handler(async ({ data }) => {
    const res = await services.webinars.index({
      offset: data.offset,
      limit: data.limit,
    })

    return res.data
  })
