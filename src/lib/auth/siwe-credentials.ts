import { getAddressFromMessage, getChainIdFromMessage, verifySignature } from '@reown/appkit-siwe'
import Credentials from 'next-auth/providers/credentials'
import { env } from '~/config/env'

const projectId = env.REOWN_PROJECT_ID as string

export const SiweCredentials = Credentials({
  id: 'siwe',
  name: 'siwe',
  credentials: {
    message: { label: 'Message', type: 'text' },
    signature: { label: 'Signature', type: 'text' },
  },
  async authorize(credentials) {
    try {
      if (!credentials?.message) {
        throw new Error('SiweMessage is undefined')
      }

      const { message, signature } = credentials
      const address = getAddressFromMessage(String(message))
      const chainId = getChainIdFromMessage(String(message))

      const isValid = await verifySignature({
        address,
        message: String(message),
        signature: String(signature),
        chainId,
        projectId,
      })

      if (isValid) {
        return {
          id: `${chainId}:${address}`,
          address,
          chainId,
        }
      }

      return null
    } catch (e) {
      console.log(e)
      return null
    }
  },
})
