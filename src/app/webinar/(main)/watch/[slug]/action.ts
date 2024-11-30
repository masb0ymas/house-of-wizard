import axios from 'axios'
import _ from 'lodash'
import { env } from '~/config/env'

export async function getWebinarBySlug(slug: string) {
  let result = null
  let message = null

  try {
    const res = await axios.get(`${env.API_URL}/v1/webinar/by-slug/${slug}`)
    result = res.data.data
    message = 'Webinar fetched successfully'
  } catch (err) {
    console.log(err)
    message = _.get(err, 'response.data.message', 'Something went wrong')
  }

  return { data: result, message }
}
