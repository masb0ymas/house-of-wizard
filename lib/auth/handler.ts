import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { env } from '@/config/env'
import { AuthSession } from '@/types/auth'

import { Models } from '../api/models'
import { AUTH_STORAGE_KEYS } from '../constants/auth'

/**
 * Read the session issued by our own backend.
 *
 * Tokens are stored in cookies (see `token-storage.ts`) so they are sent to
 * the server on every request. Both email/password and Google OAuth flows
 * store tokens the same way.
 */
async function getBackendSession(): Promise<AuthSession | null> {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get(AUTH_STORAGE_KEYS.ACCESS_TOKEN)?.value
  const refreshToken = cookieStore.get(AUTH_STORAGE_KEYS.REFRESH_TOKEN)?.value
  const idToken = cookieStore.get(AUTH_STORAGE_KEYS.ID_TOKEN)?.value

  if (!accessToken) {
    return null
  }

  try {
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/v1/auth/me`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: 'no-store',
    })

    if (!res.ok) {
      return null
    }

    const body = (await res.json()) as Record<string, unknown>
    const user: Models.User = (body?.data ?? body) as Models.User

    return {
      user,
      session: { token: accessToken },
      data: { accessToken, refreshToken, idToken, provider: 'custom' as const },
    }
  } catch (error) {
    console.error('Backend session error:', (error as Error).message)
    return null
  }
}

/**
 * Require authentication and redirect to sign-in if not authenticated.
 */
export async function requireSession(): Promise<AuthSession> {
  const session = await getBackendSession()

  if (!session) {
    throw redirect('/sign-in')
  }

  return session
}

/**
 * Get current session.
 * @returns Session object or null if not authenticated.
 */
export async function getSession(): Promise<AuthSession | null> {
  return getBackendSession()
}

/**
 * Redirect to `href` if the user is already authenticated.
 */
export async function redirectIfAuthenticated(href: string) {
  const session = await getBackendSession()

  if (session) {
    throw redirect(href)
  }
}
