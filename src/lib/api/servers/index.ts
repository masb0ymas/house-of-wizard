import {
  getWebinarBySlugFn,
  getWebinarPrivatePlanFn,
  listWebinarPrivatePlansFn,
  listWebinarsFn,
} from './webinar'

export const servers = {
  webinar: {
    list: listWebinarsFn,
    slug: getWebinarBySlugFn,
  },
  webinarPrivatePlan: {
    list: listWebinarPrivatePlansFn,
    get: getWebinarPrivatePlanFn,
  },
} as const
