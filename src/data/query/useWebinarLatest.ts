'use client'

import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import axios from 'axios'
import { env } from '~/config/env'

type UseResult = WebinarEntity
type TQueryFnData = UseResult
type TError = any

/**
 *
 * @param options
 * @returns
 */
export default function useWebinarLatest(options?: UseQueryOptions<TQueryFnData, TError>) {
  const endpoint = `${env.API_URL}/v1/webinar/latest`

  const query = useQuery<TQueryFnData, TError>({
    queryKey: ['webinar-latest', endpoint],
    queryFn: async () => {
      const res = await axios.get(endpoint)
      return res.data
    },
    refetchOnWindowFocus: false,
    select: (res: any) => res?.data,
    ...options,
  })

  return {
    ...query,
  }
}
