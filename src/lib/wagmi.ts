import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import {
  createSIWEConfig,
  formatMessage,
  SIWECreateMessageArgs,
  SIWESession,
  SIWEVerifyMessageArgs,
} from '@reown/appkit-siwe'
import { AppKitNetwork, base, sepolia } from '@reown/appkit/networks'
import { getCsrfToken, getSession, signIn, signOut } from 'next-auth/react'
import { getAddress } from 'viem'
import { cookieStorage, createStorage } from 'wagmi'
import { env } from '~/config/env'

const projectId = env.REOWN_PROJECT_ID as string
export const chains: [AppKitNetwork, ...AppKitNetwork[]] = [base, sepolia]

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  networks: chains,
  projectId,
  ssr: true,
})

// Normalize the address (checksum)
const normalizeAddress = (address: string): string => {
  try {
    const splitAddress = address.split(':')
    const extractedAddress = splitAddress[splitAddress.length - 1]
    const checksumAddress = getAddress(extractedAddress)
    splitAddress[splitAddress.length - 1] = checksumAddress
    const normalizedAddress = splitAddress.join(':')

    return normalizedAddress
  } catch (error) {
    console.log(error)
    return address
  }
}

export const siweConfig = createSIWEConfig({
  getMessageParams: async () => ({
    domain: typeof window !== 'undefined' ? window.location.host : '',
    uri: typeof window !== 'undefined' ? window.location.origin : '',
    chains: chains.map((chain: AppKitNetwork) => parseInt(chain.id.toString())),
    statement: 'Please sign with your account',
  }),
  createMessage: ({ address, ...args }: SIWECreateMessageArgs) =>
    formatMessage(args, normalizeAddress(address)),
  getNonce: async () => {
    const nonce = await getCsrfToken()
    if (!nonce) {
      throw new Error('Failed to get nonce!')
    }

    return nonce
  },
  getSession: async () => {
    const session = await getSession()
    if (!session) {
      return null
    }

    // Validate address and chainId types
    if (typeof session.address !== 'string' || typeof session.chainId !== 'number') {
      return null
    }

    return {
      address: session.address,
      chainId: session.chainId,
    } satisfies SIWESession
  },
  verifyMessage: async ({ message, signature }: SIWEVerifyMessageArgs) => {
    try {
      const success = await signIn('siwe', {
        message,
        signature,
        redirect: false,
        callbackUrl: '/protected',
      })

      return Boolean(success?.ok)
    } catch (error) {
      console.log(error)
      return false
    }
  },
  signOut: async () => {
    try {
      await signOut({
        redirect: false,
      })

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  },
})
