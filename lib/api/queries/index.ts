import { authQueries } from './auth'
import { osmQueries } from './osm'
import { webinarLogAttendanceQueries, webinarPrivatePlanQueries, webinarQueries } from './webinar'

export const queries = {
  auth: authQueries,
  osm: osmQueries,
  webinar: {
    main: webinarQueries,
    privatePlan: webinarPrivatePlanQueries,
    logAttendance: webinarLogAttendanceQueries,
  },
} as const
