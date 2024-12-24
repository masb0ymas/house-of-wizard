import { UserEntity } from './user'

export type InstructorEntity = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  user_id: string
  user: UserEntity
  bio: string
  is_active: boolean
  is_verified: boolean
}
