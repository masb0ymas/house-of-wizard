'use server'

import axios from 'axios'
import _ from 'lodash'
import { env } from '~/config/env'
import { WebinarEntity } from '~/data/entity/webinar'
import { WebinarAttendanceEntity } from '~/data/entity/webinar_attendance'
import { auth } from '~/lib/auth'

type ResponseAttendance = {
  data: WebinarAttendanceEntity | null
  error: string | null
}

/**
 *
 * @param slug
 * @returns
 */
export async function getAttendanceBySlug(slug: string): Promise<ResponseAttendance> {
  let result = null
  let error = null

  try {
    const res = await axios.get(
      `${env.API_URL}/v1/webinar-attendance/check/by-webinar-slug/${slug}`
    )
    result = res.data.data
  } catch (err) {
    console.log(err)
    error = _.get(err, 'response.data.message', 'Something went wrong')
  }

  return { data: result, error }
}

/**
 *
 * @param webinar
 * @returns
 */
export async function markAttendance(webinar: WebinarEntity | null) {
  const session = await auth()

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

  let result = null
  let message = null

  try {
    const res = await axios.post(`${env.API_URL}/v1/webinar-attendance`, formValue)
    result = res.data.data
    message = 'Attendance marked successfully'
  } catch (err) {
    message = _.get(err, 'response.data.message', 'Something went wrong')
  }

  return { data: result, message }
}
