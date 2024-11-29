'use server'

import axios from 'axios'
import _ from 'lodash'
import { env } from '~/config/env'

/**
 * Get Webinar Private Plan By Trx Id
 * @param trx_id
 * @returns
 */
export async function getWebinarPrivatePlanByTrxId(trx_id: string) {
  let data = null
  let error = null

  try {
    const res = await axios.get(`${env.API_URL}/v1/webinar-private-plan/by-transaction/${trx_id}`)
    data = res.data.data
  } catch (err) {
    console.log(err)
    error = _.get(err, 'response.data.message', 'Something went wrong')
  }

  return { data, error }
}

/**
 * Get Transaction By Id
 * @param trx_id 
 * @returns 
 */
export async function getTransactionById(trx_id: string) {
  let data = null
  let error = null

  try {
    const res = await axios.get(`${env.API_URL}/v1/transaction/${trx_id}`)
    data = res.data.data
  } catch (err) {
    console.log(err)
    error = _.get(err, 'response.data.message', 'Something went wrong')
  }

  return { data, error }
}