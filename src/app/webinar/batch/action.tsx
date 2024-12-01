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

/**
 *
 * @param values
 * @returns
 */
export async function createTransaction(values: any) {
  let data = null
  let message = null
  let isError = false

  const formValue = {
    provider: 'midtrans',
    first_name: values.first_name,
    last_name: values.last_name,
    email: values.email,
    details: [
      {
        webinar_private_plan_id: values.webinar_private_plan_id,
        webinar_private_id: null,
      },
    ],
  }

  try {
    const res = await axios.post(`${env.API_URL}/v1/transaction`, formValue)
    data = res.data.data
  } catch (err) {
    console.log(err)
    message = _.get(err, 'response.data.message', 'Something went wrong')

    if (!message.includes('already completed the payment')) {
      isError = true
    }
  }

  return { data, message, isError }
}
