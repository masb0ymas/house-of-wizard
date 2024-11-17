import { RoleEntity } from './role'
import { UploadEntity } from './upload'

type BaseLoginEntity = {
  fullname?: string | null
  email?: string | null
  password?: string | null
  latitude?: string | null
  longitude?: string | null
}

export type LoginAttributes = BaseLoginEntity & {
  provider: string
  access_token: string
  id_token?: string | null
}

export type WalletLoginAttributes = BaseLoginEntity & {
  wallet_address: string
  wallet_signature: string
}

export type ProfileEntity = {
  id: number
  created_at: string
  updated_at: string
  deleted_at: string | null
  fullname: string
  email: string
  wallet_address?: string | null
  phone: string | null
  address: string | null
  is_active: boolean
  is_blocked: boolean
  role_id: string
  role: RoleEntity
  upload_id: string | null
  upload: UploadEntity | null
}
