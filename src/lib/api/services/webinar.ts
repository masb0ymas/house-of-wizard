import { env } from '~/env'
import { AUTH_STORAGE_KEYS } from '~/lib/constants/auth'
import type { AxiosItemResponse, ResourceMethods } from '~/types/api'
import { HTTP_METHOD } from '~/types/api'

import type { Models } from '../models'
import { generateURL, serverResource } from '../resource'
import { ServerFetchApi } from '../server-fetch'

const path = '/v1/webinar'
const methods = [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.PUT, HTTP_METHOD.DELETE]

type WebinarResource = ResourceMethods<Models.Webinar> & {
  slug: (slug: string) => Promise<AxiosItemResponse<Models.Webinar>>
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

export const webinars: WebinarResource = webinarResource()
