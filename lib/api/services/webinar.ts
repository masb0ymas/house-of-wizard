import { env } from '@/config/env'
import { AUTH_STORAGE_KEYS } from '@/lib/constants/auth'
import { AxiosItemResponse, AxiosListResponse, HTTP_METHOD, ResourceMethods } from '@/types/api'

import { ClientFetchApi } from '../client-fetch'
import { Models } from '../models'
import { clientResource, generateURL } from '../resource'

const webinarPath = `/v1/webinars`
const webinarPrivatePlanPath = `/v1/webinar-private-plans`

const methods = [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.PUT, HTTP_METHOD.DELETE]

const api = new ClientFetchApi({
  baseURL: String(env.NEXT_PUBLIC_API_URL),
  storageKey: AUTH_STORAGE_KEYS.AUTH_STORAGE,
}).default

// Webinar Resources
type WebinarResources = ResourceMethods<Models.Webinar> & {
  slug: (slug: string) => Promise<AxiosItemResponse<Models.Webinar>>
}

const webinarResources = (): WebinarResources => {
  return {
    ...clientResource(webinarPath, methods),
    slug: (slug: string) => {
      const url = generateURL([webinarPath, 'me', slug])
      return api.get(url)
    },
  }
}

// Webinar Private Plan Resources
type WebinarPrivatePlanResource = ResourceMethods<Models.WebinarPrivatePlan> & {
  active: () => Promise<AxiosListResponse<Models.WebinarPrivatePlan>>
}

const webinarPrivatePlanResources = (): WebinarPrivatePlanResource => {
  return {
    ...clientResource(webinarPrivatePlanPath, methods),
    active: () => {
      const url = generateURL([webinarPrivatePlanPath, 'active'])
      return api.get(url)
    },
  }
}

export const webinarService = webinarResources()
export const webinarPrivatePlanService = webinarPrivatePlanResources()
