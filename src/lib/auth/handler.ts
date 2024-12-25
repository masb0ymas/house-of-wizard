import { SIWESession } from '@reown/appkit-siwe'
import NextAuth from 'next-auth'
import AuthRepository from '~/data/repository/auth'
import { GoogleCredentials } from './google-credentials'
import { SiweCredentials } from './siwe-credentials'

declare module 'next-auth' {
  interface User {
    idToken?: string
    provider?: string
    address?: string
  }
  interface Session extends SIWESession {
    idToken?: string
    provider?: string
    address?: string
    chainId?: number
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GoogleCredentials, SiweCredentials],
  callbacks: {
    async signIn({ user, account }) {
      console.log('SIGN IN', user, account)

      if (account?.provider === 'google') {
        const formValue = {
          fullname: user.name,
          email: user.email,
          password: '',
          provider: account?.provider,
          access_token: account?.access_token,
          id_token: account?.id_token,
          expires_at: account?.expires_at,
          latitude: null,
          longitude: null,
        }

        await AuthRepository.signIn(formValue)
      }

      return true
    },
    async jwt({ token, user, account }) {
      console.log('JWT', token, user, account)

      if (account) {
        if (account.provider === 'google') {
          token.idToken = account.id_token
        }

        if (account.provider === 'siwe') {
          token.idToken = token.sub
          token.address = user.address
        }

        token.provider = account.provider
      }

      return token
    },
    async session({ session, token }) {
      console.log('SESSION', session, token)

      session.idToken = token.idToken as string
      session.provider = token.provider as string

      if (!token.sub) {
        return session
      }

      const [, chainId, address] = token.sub.split(':')
      if (chainId && address) {
        session.address = address
        session.chainId = parseInt(chainId, 10)
        session.provider = 'siwe'
        session.idToken = token.sub as string
      }

      return session
    },
  },
  pages: {
    signIn: '/sign-in',
  },
})
