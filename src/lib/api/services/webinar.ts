import type { ResourceMethods } from '~/types/api'
import { HTTP_METHOD } from '~/types/api'

import type { Models } from '../models'
import { serverResource } from '../resource'

const path = '/v1/webinar'
const methods = [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.PUT, HTTP_METHOD.DELETE]

export const webinars: ResourceMethods<Models.Webinar> = serverResource(path, methods)
