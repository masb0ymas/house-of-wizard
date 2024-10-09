"use client"

import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import axios from "axios"
import { env } from "~/config/env"

type UseResult = WebinarEntity
type TQueryFnData = UseResult
type TError = any

/**
 *
 * @param options
 * @returns
 */
export default function useWebinarLatest(options?: UseQueryOptions<TQueryFnData, TError>) {
  const query = useQuery<TQueryFnData, TError>({
    queryKey: ["webinar-latest"],
    queryFn: async () => {
      const url = `${env.API_URL}/v1/webinar/latest`
      const res = await axios.get(url)
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
