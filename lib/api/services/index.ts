import { authServices } from './auth'
import { osmServices } from './osm'
import { webinarLogAttendanceService, webinarPrivatePlanService, webinarService } from './webinar'

export const services = {
  auth: authServices,
  osm: osmServices,
  webinar: {
    main: webinarService,
    privatePlan: webinarPrivatePlanService,
    logAttendance: webinarLogAttendanceService,
  },
} as const
