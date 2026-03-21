import { listWebinarsFn } from './webinar'

export const servers = {
  webinar: {
    list: listWebinarsFn,
  },
} as const
