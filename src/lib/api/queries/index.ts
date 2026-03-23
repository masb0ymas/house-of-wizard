import { webinarPrivatePlanQueries, webinarQueries } from './webinar'

export const queries = {
  webinar: webinarQueries,
  webinarPrivatePlan: webinarPrivatePlanQueries,
} as const
