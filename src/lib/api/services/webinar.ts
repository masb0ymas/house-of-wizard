import { env } from '~/env'
import { AUTH_STORAGE_KEYS } from '~/lib/constants/auth'
import type { AxiosItemResponse, AxiosListResponse, ResourceMethods } from '~/types/api'
import { HTTP_METHOD } from '~/types/api'

import type { Models } from '../models'
import { generateURL, serverResource } from '../resource'
import { ServerFetchApi } from '../server-fetch'

const path = '/v1/webinar'
const privatePlanPath = '/v1/webinar-private-plan'

const methods = [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.PUT, HTTP_METHOD.DELETE]

type WebinarResource = ResourceMethods<Models.Webinar> & {
  slug: (slug: string) => Promise<AxiosItemResponse<Models.Webinar>>
}

type WebinarPrivatePlanResource = ResourceMethods<Models.WebinarPrivatePlan> & {
  open: () => Promise<AxiosListResponse<Models.WebinarPrivatePlan>>
}

const api = new ServerFetchApi({
  baseURL: String(env.SERVER_URL),
  storageKey: AUTH_STORAGE_KEYS.AUTH_STORAGE,
}).default

const webinarResource = (): WebinarResource => {
  return {
    ...serverResource(path, methods),
    slug: (slug: string) => api.get(generateURL([path, 'by-slug', String(slug)])),
  }
}

const webinarPrivatePlanResource = (): WebinarPrivatePlanResource => {
  return {
    ...serverResource(privatePlanPath, methods),
    open: () => api.get(generateURL([privatePlanPath, 'by-active-batch'])),
  }
}

export const webinars: WebinarResource = webinarResource()
export const webinarPrivatePlan: WebinarPrivatePlanResource = webinarPrivatePlanResource()
