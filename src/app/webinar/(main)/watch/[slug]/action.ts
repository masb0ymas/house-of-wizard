'use server'

import _ from 'lodash'
import { env } from '~/config/env'
import createFetchApi from '~/lib/fetcher'

async function _axios() {
  const fetch = await createFetchApi(env.API_URL)
  return fetch.default
}

/**
 * Find Webinar By Slug
 * @param slug
 * @returns
 */
export async function findWebinarBySlug(slug: string) {
  const api = await _axios()

  let data = null
  let message = null
  let isError = false

  try {
    const res = await api.get(`/v1/webinar/by-slug/${slug}`)
    data = res.data.data
    message = 'Webinar fetched successfully'
  } catch (err) {
    console.log(err)
    message = _.get(err, 'response.data.message', 'Something went wrong')
    isError = true
  }

  return { data, message, isError }
}
