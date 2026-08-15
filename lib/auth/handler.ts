import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { env } from '@/config/env'
import { AuthSession } from '@/types/auth'

import { Models } from '../api/models'
import { AUTH_PROVIDER, AUTH_STORAGE_KEYS } from '../constants/auth'
import { auth } from './auth-server'

/**
 * Read the email/password session issued by our own backend.
 *
 * These tokens are stored in cookies (see `token-storage.ts`) so they are sent to
 * the server on every request. google is unaware of them, which is why
 * `auth.api.getSession` returns `null` for email/password logins.
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
 * Map a google user into our backend `Models.User` shape so both auth
 * paths (email/password backend and google) return a consistent
 * `AuthSession`.
 */
function mapBetterAuthUser(user: {
  id: string
  createdAt: Date
  updatedAt: Date
  email: string
  emailVerified: boolean
  name: string
  image?: string | null
}): Models.User {
  return {
    id: user.id,
    created_at: user.createdAt.toISOString(),
    updated_at: user.updatedAt.toISOString(),
    deleted_at: null,
    fullname: user.name,
    email: user.email,
    phone: null,
    token_verify: null,
    address: null,
    is_active: user.emailVerified,
    is_blocked: false,
    role_id: '',
    role: {
      id: '',
      name: '',
      created_at: user.createdAt.toISOString(),
      updated_at: user.updatedAt.toISOString(),
      deleted_at: null,
    },
  }
}

/**
 * Require authentication and redirect to home page if not authenticated
 */
export async function requireSession(): Promise<AuthSession> {
  // Email/password session (our own backend) lives in cookies.
  const backend = await getBackendSession()
  if (backend) {
    return backend
  }

  const google = await getAccessToken()

  // Remove this comment to get Access Token
  // console.log(google)

  if (!google?.accessToken) {
    await auth.api.signOut({
      headers: await headers(),
    })

    throw redirect('/sign-in')
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    throw redirect('/sign-in')
  }

  return {
    user: mapBetterAuthUser(session.user),
    session: { token: session.session.token },
    data: {
      accessToken: google.accessToken,
      idToken: google.idToken,
      provider: 'google',
    },
  }
}

/**
 * Get current session
 * @returns Session object or null if not authenticated
 */
export async function getSession(): Promise<AuthSession | null> {
  // Email/password session (our own backend) lives in cookies.
  const backend = await getBackendSession()
  if (backend) {
    return backend
  }

  const google = await getAccessToken()

  if (!google) {
    return null
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return null
  }

  return {
    user: mapBetterAuthUser(session.user),
    session: { token: session.session.token },
    data: {
      accessToken: google.accessToken,
      idToken: google.idToken,
      provider: 'google',
    },
  }
}

/**
 * Get access token for Cognito provider
 * @returns Access token object with provider information or null if token is invalid
 */
export async function getAccessToken() {
  try {
    let google = await auth.api.getAccessToken({
      body: { providerId: AUTH_PROVIDER.GOOGLE },
      headers: await headers(),
    })

    if (!google?.accessToken) {
      const refreshToken = await auth.api.refreshToken({
        headers: await headers(),
        body: {
          providerId: AUTH_PROVIDER.GOOGLE,
        },
      })

      if (!refreshToken?.accessToken) {
        return null
      }

      google = {
        accessToken: refreshToken.accessToken,
        accessTokenExpiresAt: refreshToken.accessTokenExpiresAt,
        scopes: [],
        idToken: refreshToken.idToken ?? undefined,
      }
    }

    return { ...google, provider: AUTH_PROVIDER.GOOGLE }
  } catch (error: unknown) {
    console.error('Auth Error:', (error as Error).message)
    return null
  }
}

export async function redirectIfAuthenticated(href: string) {
  // Email/password session (our own backend) lives in cookies.
  const backend = await getBackendSession()
  if (backend) {
    throw redirect(href)
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session?.session) {
    throw redirect(href)
  }
}
