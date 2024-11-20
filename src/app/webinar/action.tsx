'use server'

import axios from 'axios'
import { env } from '~/config/env'
import { WebinarEntity } from '~/data/entity/webinar'

export async function getWebinars(): Promise<WebinarEntity[]> {
  const res = await axios.get(`${env.API_URL}/v1/webinar?page=1&limit=12`)
  return res.data.data
}

export async function getWebinarLiveSession(): Promise<WebinarEntity | null> {
  const res = await axios.get(`${env.API_URL}/v1/webinar/live`)
  return res.data.data
}
