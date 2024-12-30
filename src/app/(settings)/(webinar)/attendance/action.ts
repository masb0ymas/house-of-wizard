'use server'

import _ from 'lodash'
import qs from 'qs'
import { env } from '~/config/env'
import createFetchApi from '~/lib/fetcher'

type ReqFindAll = {
  page: number
  pageSize: number
}

async function _axios() {
  const fetch = await createFetchApi(env.API_URL)
  return fetch.default
}

/**
 * Find Webinar Attendance
 * @param params
 * @returns
 */
export async function findLogAttendances({ page, pageSize }: ReqFindAll) {
  const api = await _axios()

  let data = []
  let total = 0
  let message = null
  let isError = false

  const queryParams = qs.stringify({ page, pageSize }, { skipNulls: true })

  try {
    const res = await api.get(`/v1/webinar-log-attendance/by-user-login?${queryParams}`)
    data = res.data.data
    total = res.data.total
  } catch (err) {
    console.log(err)
    message = _.get(err, 'response.data.message', 'Something went wrong')
    isError = true
  }

  return { data, total, message, isError }
}
