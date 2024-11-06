'use client'

import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import axios from 'axios'
import { env } from '~/config/env'
import { WebinarEntity } from '~/data/entity/webinar'

type UseResult = WebinarEntity
type TQueryFnData = UseResult
type TError = any

/**
 *
 * @param options
 * @returns
 */
export default function useWebinarLatest(
  chain_id: number,
  options?: UseQueryOptions<TQueryFnData, TError>
) {
  const endpoint = `${env.API_URL}/v1/webinar/latest?chain_id=${chain_id}`

  const query = useQuery<TQueryFnData, TError>({
    queryKey: ['webinar-latest', endpoint, chain_id],
    queryFn: async () => {
      const res = await axios.get(endpoint)
      return res.data
    },
    enabled: !!chain_id,
    refetchOnWindowFocus: false,
    select: (res: any) => res?.data,
    ...options,
  })

  return {
    ...query,
  }
}
