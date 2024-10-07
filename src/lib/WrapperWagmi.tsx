"use client"

import { PropsWithChildren } from "react"
import { WagmiProvider } from "wagmi"
import { config } from "~/config/wagmi"

type IProps = PropsWithChildren

export default function WrapperWagmi({ children }: IProps) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>
}
