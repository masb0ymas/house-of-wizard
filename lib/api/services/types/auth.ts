import { AxiosItemResponse } from '@/types/api'

import { RefreshDto, SignInDto } from '../../dtos/auth/schema'
import { RefreshTokenResponse, SignInResponse } from '../../dtos/auth/types'
import { Models } from '../../models'

export type AuthResources = {
  signIn: (reqBody: SignInDto) => Promise<AxiosItemResponse<SignInResponse>>
  signInWithGoogle: () => Promise<AxiosItemResponse<{ targetURL: string }>>
  profile: () => Promise<AxiosItemResponse<Models.User>>
  refresh: (reqBody: RefreshDto) => Promise<AxiosItemResponse<RefreshTokenResponse>>
  signOut: () => Promise<AxiosItemResponse<void>>
}
