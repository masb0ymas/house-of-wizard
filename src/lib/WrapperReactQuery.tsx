"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren } from "react"

type IProps = PropsWithChildren

const queryClient = new QueryClient()

export default function WrapperReactQuery({ children }: IProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
