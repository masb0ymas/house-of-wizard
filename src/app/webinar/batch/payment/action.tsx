'use server'

import _ from 'lodash'
import { env } from '~/config/env'
import createFetchApi from '~/lib/fetcher'

async function _axios() {
  const fetch = await createFetchApi(env.API_URL)
  return fetch.default
}

/**
 * Get Webinar Private Plan By Trx Id
 * @param trx_id
 * @returns
 */
export async function findPrivatePlanWebinarByTrxId(trx_id: string) {
  const api = await _axios()

  let data = null
  let message = null
  let isError = false

  try {
    const res = await api.get(`/v1/webinar-private-plan/by-transaction/${trx_id}`)
    data = res.data.data
  } catch (err) {
    console.log(err)
    message = _.get(err, 'response.data.message', 'Something went wrong')
    isError = true
  }

  return { data, message, isError }
}

/**
 * Get Transaction By Id
 * @param trx_id
 * @returns
 */
export async function findTransactionById(trx_id: string) {
  const api = await _axios()

  let data = null
  let message = null
  let isError = false

  try {
    const res = await api.get(`/v1/transaction/${trx_id}`)
    data = res.data.data
  } catch (err) {
    console.log(err)
    message = _.get(err, 'response.data.message', 'Something went wrong')
    isError = true
  }

  return { data, message, isError }
}
