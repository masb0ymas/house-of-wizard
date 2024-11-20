'use server'

import axios from 'axios'
import qs from 'qs'
import { env } from '~/config/env'
import { WebinarEntity } from '~/data/entity/webinar'

export async function getWebinars(): Promise<{ result: WebinarEntity[]; total: number }> {
  const query = qs.stringify({
    page: 1,
    pageSize: 12,
    status: 'archive',
  })

  let result = []
  let total = 0

  try {
    const res = await axios.get(`${env.API_URL}/v1/webinar?${query}`)
    result = res.data.data
    total = res.data.total
  } catch (error) {
    console.log(error)
  }

  return { result, total }
}

export async function getWebinarLiveSession(): Promise<WebinarEntity | null> {
  let result = null

  try {
    const res = await axios.get(`${env.API_URL}/v1/webinar/live`)
    result = res.data.data
  } catch (error) {
    console.log(error)
  }

  return result
}
