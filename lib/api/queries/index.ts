import { osmQueries } from './osm'
import { webinarPrivatePlanQueries, webinarQueries } from './webinar'

export const queries = {
  osm: osmQueries,
  webinar: {
    main: webinarQueries,
    privatePlan: webinarPrivatePlanQueries,
  },
} as const
