import { authServices } from './auth'
import { osmServices } from './osm'
import { webinarPrivatePlanService, webinarService } from './webinar'

export const services = {
  auth: authServices,
  osm: osmServices,
  webinar: {
    main: webinarService,
    privatePlan: webinarPrivatePlanService,
  },
} as const
