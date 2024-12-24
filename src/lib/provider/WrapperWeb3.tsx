'use client'

import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { PropsWithChildren } from 'react'
import { base, mainnet, sepolia } from 'viem/chains'
import { WagmiProvider } from 'wagmi'
import { env } from '~/config/env'
import WrapperReactQuery from './WrapperReactQuery'

type IProps = PropsWithChildren

const config = getDefaultConfig({
  appName: 'House of Wizard',
  projectId: env.WALLETCONNECT_PROJECT_ID as string,
  chains: [base, sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
})

export default function WrapperWeb3({ children }: IProps) {
  return (
    <WagmiProvider config={config}>
      <WrapperReactQuery>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </WrapperReactQuery>
    </WagmiProvider>
  )
}
