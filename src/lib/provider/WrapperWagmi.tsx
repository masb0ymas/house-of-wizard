'use client'

import { createAppKit } from '@reown/appkit'
import { PropsWithChildren } from 'react'
import { cookieToInitialState, WagmiProvider } from 'wagmi'
import { env } from '~/config/env'
import { chains, siweConfig, wagmiAdapter } from '../wagmi'
import WrapperReactQuery from './WrapperReactQuery'

type IProps = PropsWithChildren & {
  cookie: string | null
}

const metadata = {
  name: 'House of Wizard',
  description: 'House of Wizard - Wallet Connect',
  url: 'https://house-of-wizard.xyz', // origin must match your domain & subdomain
  icons: ['https://house-of-wizard.xyz/logo-how.png'],
}

const projectId = env.REOWN_PROJECT_ID as string

// Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks: chains,
  projectId,
  siweConfig,
  metadata,
  features: {
    send: false,
    swaps: false,
    onramp: false,
    email: false,
    socials: false,
  },
})

export default function WrapperWagmi({ children, cookie }: IProps) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, cookie)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig} initialState={initialState}>
      <WrapperReactQuery>{children}</WrapperReactQuery>
    </WagmiProvider>
  )
}
