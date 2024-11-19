import { RoleEntity } from './role'
import { UploadEntity } from './upload'

export type UserEntity = {
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
