import { queryOptions } from '@tanstack/react-query'

import { services } from '../services'

const getProfile = () =>
  queryOptions({
    queryKey: ['profile'],
    queryFn: async () => {
      const res = await services.auth.profile()
      return res.data
    },
  })

export const authQueries = {
  profile: getProfile,
} as const
