'use server'

import _ from 'lodash'
import qs from 'qs'
import { env } from '~/config/env'
import { WebinarEntity } from '~/data/entity/webinar'
import { WebinarPrivateEntity } from '~/data/entity/webinar_private'
import { auth } from '~/lib/auth'
import createFetchApi from '~/lib/fetcher'

type RequestGetWebinars = {
  page: number
  pageSize: number
}

type ResponseWebinars = {
  data: WebinarEntity[]
  total: number
  message: string | null
  isError: boolean
}

async function _axios() {
  const fetch = await createFetchApi(env.API_URL)
  return fetch.default
}

/**
 * Get Webinars
 * @param params
 * @returns
 */
export async function findWebinars({
  page,
  pageSize,
}: RequestGetWebinars): Promise<ResponseWebinars> {
  const api = await _axios()

  const queryParams = qs.stringify({
    page,
    pageSize,
    status: 'archive',
  })

  let data = []
  let total = 0
  let message = null
  let isError = false

  try {
    const res = await api.get(`/v1/webinar?${queryParams}`)
    data = res.data.data
    total = res.data.total
  } catch (err) {
    console.log(err)
    message = _.get(err, 'response.data.message', 'Something went wrong')
    isError = true
  }

  return { data, total, message, isError }
}

type ReqWebinarLive = {
  chain_id: number
}

type ResponseWebinarLive = {
  data: WebinarEntity | null
  total: number
  message: string | null
  isError: boolean
}

/**
 * Get Webinar Live Session
 * @param params
 * @returns
 */
export async function findLiveWebinarSession({
  chain_id,
}: ReqWebinarLive): Promise<ResponseWebinarLive> {
  const api = await _axios()

  let data = null
  let total = 0
  let message = null
  let isError = false

  const queryParams = qs.stringify({ chain_id })

  try {
    const res = await api.get(`/v1/webinar/live?${queryParams}`)
    data = res.data.data
    total = res.data.total
  } catch (err) {
    console.log(err)
    message = _.get(err, 'response.data.message', 'Something went wrong')
    isError = true
  }

  return { data, total, message, isError }
}

type ReqWebinarLivePrivate = {
  chain_id: number
}

type ResponseWebinarLivePrivate = {
  data: WebinarPrivateEntity | null
  total: number
  message: string | null
  isError: boolean
}

/**
 * Get Webinar Live Private Session
 * @param params
 * @returns
 */
export async function findLivePrivateWebinarSession({
  chain_id,
}: ReqWebinarLivePrivate): Promise<ResponseWebinarLivePrivate> {
  const api = await _axios()
  const session = await auth()

  if (!session?.user) {
    return { data: null, total: 0, message: null, isError: false }
  }

  let data = null
  let total = 0
  let message = null
  let isError = false

  const queryParams = qs.stringify({ chain_id })

  try {
    const res = await api.get(`/v1/webinar-private/live?${queryParams}`)
    data = res.data.data
    total = res.data.total
  } catch (err) {
    console.log(err)
    message = _.get(err, 'response.data.message', 'Something went wrong')
    isError = true
  }

  return { data, total, message, isError }
}
