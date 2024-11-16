'use client'

import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import axios, { AxiosRequestConfig } from 'axios'
import _ from 'lodash'
import { env } from '~/config/env'
import { useStore } from '~/config/zustand'
import { WebinarEntity } from '~/data/entity/webinar'

type UseResult = WebinarEntity
type TQueryFnData = UseResult
type TError = any

export default function useWebinarAttendanceByUser(
  options?: UseQueryOptions<TQueryFnData, TError>
) {
  const { auth } = useStore()
  const access_token = _.get(auth, 'access_token', '')
  const endpoint = `${env.API_URL}/v1/webinar-attendance/by-user`

  const query = useQuery<TQueryFnData, TError>({
    queryKey: ['webinar-attendance-by-user', endpoint, access_token],
    queryFn: async () => {
      const axiosConfig: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${access_token}` },
      }

      const result = await axios.get(endpoint, axiosConfig)
      return result.data
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    select: (res: any) => res?.data,
    ...options,
  })

  return {
    ...query,
  }
}
