'use server'

import _ from 'lodash'
import qs from 'qs'
import { env } from '~/config/env'
import { WebinarPrivatePlanEntity } from '~/data/entity/webinar_private_plan'
import createFetchApi from '~/lib/fetcher'

type RequestFindAll = {
  pageSize: number
}

type DtoWebinarPrivatePlan = {
  data: WebinarPrivatePlanEntity[]
  total: number
  message: string | null
  isError: boolean
}

async function _axios() {
  const fetch = await createFetchApi(env.API_URL)
  return fetch.default
}

/**
 * Get Webinar Private Plans
 * @returns
 */
export async function findPrivatePlanWebinars({
  pageSize,
}: RequestFindAll): Promise<DtoWebinarPrivatePlan> {
  const api = await _axios()

  const query = qs.stringify({
    page: 1,
    pageSize,
  })

  let data = []
  let total = 0
  let message = null
  let isError = false

  try {
    const res = await api.get(`/v1/webinar-private-plan/by-active-batch?${query}`)
    data = res.data.data
    total = res.data.total
  } catch (err) {
    console.log(err)
    message = _.get(err, 'response.data.message', 'Something went wrong')
    isError = true
  }

  return { data, total, message, isError }
}

/**
 *
 * @param values
 * @returns
 */
export async function createTransaction(values: any) {
  const api = await _axios()

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
    const res = await api.post(`/v1/transaction`, formValue)
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
