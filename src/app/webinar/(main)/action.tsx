'use server'

import _ from 'lodash'
import qs from 'qs'
import { env } from '~/config/env'
import { WebinarEntity } from '~/data/entity/webinar'
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

export async function getWebinars({
  page,
  pageSize,
}: RequestGetWebinars): Promise<ResponseWebinars> {
  const api = await _axios()

  const query = qs.stringify({
    page,
    pageSize,
    status: 'archive',
  })

  let data = []
  let total = 0
  let message = null
  let isError = false

  try {
    const res = await api.get(`/v1/webinar?${query}`)
    data = res.data.data
    total = res.data.total
  } catch (err) {
    console.log(err)
    message = _.get(err, 'response.data.message', 'Something went wrong')
    isError = true
  }

  return { data, total, message, isError }
}

type ResponseWebinarLive = {
  data: WebinarEntity | null
  total: number
  message: string | null
  isError: boolean
}

export async function getWebinarLiveSession(): Promise<ResponseWebinarLive> {
  const api = await _axios()

  let data = null
  let total = 0
  let message = null
  let isError = false

  try {
    const res = await api.get(`/v1/webinar/live`)
    data = res.data.data
    total = res.data.total
  } catch (err) {
    console.log(err)
    message = _.get(err, 'response.data.message', 'Something went wrong')
    isError = true
  }

  return { data, total, message, isError }
}
