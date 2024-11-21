'use server'

import axios from 'axios'
import _ from 'lodash'
import qs from 'qs'
import { env } from '~/config/env'
import { WebinarEntity } from '~/data/entity/webinar'

type ResponseWebinars = {
  data: WebinarEntity[]
  total: number
  error: string | null
}

export async function getWebinars(): Promise<ResponseWebinars> {
  const query = qs.stringify({
    page: 1,
    pageSize: 11,
    status: 'archive',
  })

  let result = []
  let total = 0
  let error = null

  try {
    const res = await axios.get(`${env.API_URL}/v1/webinar?${query}`)
    result = res.data.data
    total = res.data.total
  } catch (err) {
    console.log(err)
    error = _.get(err, 'response.data.message', 'Something went wrong')
  }

  return { data: result, total, error }
}

type ResponseWebinarLive = {
  data: WebinarEntity | null
  error: string | null
}

export async function getWebinarLiveSession(): Promise<ResponseWebinarLive> {
  let result = null
  let error = null

  try {
    const res = await axios.get(`${env.API_URL}/v1/webinar/live`)
    result = res.data.data
  } catch (err) {
    console.log(err)
    error = _.get(err, 'response.data.message', 'Something went wrong')
  }

  return { data: result, error }
}
