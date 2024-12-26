'use server'

import _ from 'lodash'
import { env } from '~/config/env'
import { WebinarEntity } from '~/data/entity/webinar'
import { WebinarAttendanceEntity } from '~/data/entity/webinar_attendance'
import { auth } from '~/lib/auth/handler'
import createFetchApi from '~/lib/fetcher'

type ResponseAttendance = {
  data: WebinarAttendanceEntity | null
  message: string | null
  isError: boolean
}

async function _axios() {
  const fetch = await createFetchApi(env.API_URL)
  return fetch.default
}

/**
 *
 * @param slug
 * @returns
 */
export async function findAttendanceBySlug(slug: string): Promise<ResponseAttendance> {
  const api = await _axios()

  let data = null
  let message = null
  let isError = false

  try {
    const res = await api.get(`/v1/webinar-attendance/check/by-webinar-slug/${slug}`)
    data = res.data.data
  } catch (err) {
    console.log(err)
    message = _.get(err, 'response.data.message', 'Something went wrong')
    isError = true
  }

  return { data, message, isError }
}

/**
 *
 * @param webinar
 * @returns
 */
export async function markAttendance(webinar: WebinarEntity | null) {
  const session = await auth()
  const api = await _axios()

  const formValue = {
    user_id: session?.user?.id,
    fullname: session?.user?.name,
    webinar_id: webinar?.id,
    check_in: new Date(),
    wallet_address: null,
    metadata: {
      title: webinar?.title,
      description: webinar?.description,
      speakers: webinar?.speakers,
      date: webinar?.start_date,
      webinar_url: webinar?.webinar_url,
    },
  }

  let data = null
  let message = null
  let isError = false

  try {
    const res = await api.post(`/v1/webinar-attendance`, formValue)
    data = res.data.data
    message = 'Attendance marked successfully'
  } catch (err) {
    message = _.get(err, 'response.data.message', 'Something went wrong')
    isError = true
  }

  return { data, message, isError }
}
