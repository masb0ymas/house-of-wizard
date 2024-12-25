'use server'

import _ from 'lodash'
import { env } from '~/config/env'
import { WebinarPrivateEntity } from '~/data/entity/webinar_private'
import { WebinarPrivateAttendanceEntity } from '~/data/entity/webinar_private_attendance'
import { auth } from '~/lib/auth/handler'
import createFetchApi from '~/lib/fetcher'

type ResponseAttendance = {
  data: WebinarPrivateAttendanceEntity | null
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
export async function findPrivateAttendanceBySlug(slug: string): Promise<ResponseAttendance> {
  const api = await _axios()

  let data = null
  let message = null
  let isError = false

  try {
    const res = await api.get(`/v1/webinar-private-attendance/check/by-webinar-slug/${slug}`)
    data = res.data.data
  } catch (err) {
    console.log(err)
    message = _.get(err, 'response.data.message', 'Something went wrong')
    isError = true
    console.log(message)
  }

  return { data, message, isError }
}

/**
 * Find Active Batch
 * @returns 
 */
export async function findActiveBatch() {
  const api = await _axios()

  let data = null
  let message = null
  let isError = false

  try {
    const res = await api.get(`/v1/webinar-batch/active`)
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
export async function markPrivateAttendance(webinar: WebinarPrivateEntity | null) {
  const session = await auth()
  const api = await _axios()

  const formValue = {
    user_id: session?.user?.id,
    fullname: session?.user?.name,
    webinar_private_id: webinar?.id,
    attendance_date: new Date(),
    metadata: {
      title: webinar?.title,
      description: webinar?.description,
      instructor: webinar?.instructor?.user?.fullname,
      date: webinar?.start_date,
      webinar_url: webinar?.webinar_url,
    },
  }

  let data = null
  let message = null
  let isError = false

  try {
    const res = await api.post(`/v1/webinar-private-attendance`, formValue)
    data = res.data.data
    message = 'Attendance marked successfully'
  } catch (err) {
    message = _.get(err, 'response.data.message', 'Something went wrong')
    isError = true
  }

  return { data, message, isError }
}
