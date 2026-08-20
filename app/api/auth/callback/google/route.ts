import { z } from 'zod'

import { setAuthTokens } from '@/lib/auth/token-storage'
import { AUTH_STORAGE_KEYS } from '@/lib/constants/auth'

const GoogleCallbackSchema = z.object({
  uid: z.string(),
  display_name: z.string(),
  email: z.email(),
  access_token: z.string(),
  refresh_token: z.string(),
  id_token: z.string(),
  expires_at: z.string(),
  expires_in: z.number(),
  role: z.string(),
})

const ACCESS_TOKEN_MAX_AGE = 60 * 60
const REFRESH_TOKEN_MAX_AGE = 60 * 60 * 24 * 30

function setCookieHeader(name: string, value: string, maxAge: number): string {
  return `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax; HttpOnly`
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const encodedData = searchParams.get('data')

    if (!encodedData) {
      return new Response('Missing data parameter', { status: 400 })
    }

    const decoded = atob(encodedData)
    const parsed = GoogleCallbackSchema.parse(JSON.parse(decoded))

    const accessMaxAge = parsed.expires_in ?? ACCESS_TOKEN_MAX_AGE

    const headers = new Headers()
    headers.append('Location', '/webinar')
    headers.append(
      'Set-Cookie',
      setCookieHeader(AUTH_STORAGE_KEYS.ACCESS_TOKEN, parsed.access_token, accessMaxAge)
    )
    headers.append(
      'Set-Cookie',
      setCookieHeader(AUTH_STORAGE_KEYS.REFRESH_TOKEN, parsed.refresh_token, REFRESH_TOKEN_MAX_AGE)
    )
    headers.append(
      'Set-Cookie',
      setCookieHeader(AUTH_STORAGE_KEYS.ID_TOKEN, parsed.id_token, accessMaxAge)
    )

    setAuthTokens({
      accessToken: parsed.access_token,
      refreshToken: parsed.refresh_token,
      idToken: parsed.id_token,
      expiresIn: parsed.expires_in,
    })

    return new Response(null, { status: 302, headers })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(`Invalid callback data: ${error.message}`, { status: 400 })
    }

    return new Response('Internal server error', { status: 500 })
  }
}
