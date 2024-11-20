'use server'

import axios from 'axios'
import qs from 'qs'
import { env } from '~/config/env'
import { WebinarEntity } from '~/data/entity/webinar'

export async function getWebinars(): Promise<WebinarEntity[]> {
  const query = qs.stringify({
    page: 1,
    pageSize: 12,
    status: 'archive',
  })

  const res = await axios.get(`${env.API_URL}/v1/webinar?${query}`)
  return res.data.data
}

export async function getWebinarLiveSession(): Promise<WebinarEntity | null> {
  const res = await axios.get(`${env.API_URL}/v1/webinar/live`)
  return res.data.data
}
