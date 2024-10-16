'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

type IProps = PropsWithChildren

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
})

export default function WrapperReactQuery({ children }: IProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
