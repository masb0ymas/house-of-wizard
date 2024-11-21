import { UserEntity } from './user'
import { WebinarEntity } from './webinar'

export type WebinarAttendanceEntity = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  webinar_id: string
  user_id: string
  fullname: string
  check_in: string
  wallet_address?: string | null
  metadata: string
  user: UserEntity
  webinar: WebinarEntity
}
