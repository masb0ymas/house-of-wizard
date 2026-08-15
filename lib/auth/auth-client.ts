import { createAuthClient } from 'better-auth/react'

import { AUTH_PROVIDER } from '../constants/auth'
import { clearAuthTokens, getStoredAccessToken } from './token-storage'

export const authClient = createAuthClient()

export const signInWithGoogle = () => {
  return authClient.signIn.social({
    provider: AUTH_PROVIDER.GOOGLE,
    callbackURL: `/dashboard`,
  })
}

export const signOut = () => {
  // Email/password sessions live in your own backend, so clear their tokens too.
  clearAuthTokens()
  return authClient.signOut()
}

export const getAccessToken = async () => {
  // Prefer the token issued by your own backend (email/password sign-in).
  const backendToken = getStoredAccessToken()
  if (backendToken) return backendToken

  const session = await authClient.getSession()

  if (session.data) {
    const { data } = await authClient.getAccessToken({ providerId: AUTH_PROVIDER.GOOGLE })
    return data?.accessToken
  }

  return null
}
