'use server'

import axios from 'axios'
import _ from 'lodash'
import qs from 'qs'
import { env } from '~/config/env'
import { WebinarPrivatePlanEntity } from '~/data/entity/webinar_private_plan'

type RequestFindAll = {
  pageSize: number
}

type DtoWebinarPrivatePlan = {
  data: WebinarPrivatePlanEntity[]
  total: number
  error: string | null
}

/**
 * Get Webinar Private Plans
 * @returns
 */
export async function getWebinarPrivatePlans({
  pageSize,
}: RequestFindAll): Promise<DtoWebinarPrivatePlan> {
  const query = qs.stringify({
    page: 1,
    pageSize,
  })

  let data = []
  let total = 0
  let error = null

  try {
    const res = await axios.get(`${env.API_URL}/v1/webinar-private-plan/by-active-batch?${query}`)
    data = res.data.data
    total = res.data.total
  } catch (err) {
    console.log(err)
    error = _.get(err, 'response.data.message', 'Something went wrong')
  }

  return { data, total, error }
}
