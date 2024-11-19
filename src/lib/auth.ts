import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { env } from '~/config/env'
import AuthRepository from '~/data/repository/auth'

declare module 'next-auth' {
  interface User {
    idToken?: string
  }
  interface Session {
    idToken?: string | undefined
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: String(env.AUTH_GOOGLE_ID),
      clientSecret: String(env.AUTH_GOOGLE_SECRET),
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          scope: 'openid profile email',
          session: {
            strategy: 'jwt',
          },
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
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
      return true
    },
    async jwt({ token, account }) {
      if (account) {
        token.idToken = account.id_token
      }
      return token
    },
    async session({ session, token }) {
      session.idToken = token.idToken as string
      return session
    },
  },
  pages: {
    signIn: '/sign-in',
  },
})
