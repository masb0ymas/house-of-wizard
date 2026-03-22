import { getWebinarBySlugFn, listWebinarsFn } from './webinar'

export const servers = {
  webinar: {
    list: listWebinarsFn,
    slug: getWebinarBySlugFn,
  },
} as const
