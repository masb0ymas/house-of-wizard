import { UserEntity } from './user'
import { WebinarBatchEntity } from './webinar_batch'
import { WebinarPrivateEntity } from './webinar_private'

export type WebinarPrivateMemberEntity = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  user_id: string
  user: UserEntity
  webinar_batch_id: string
  webinar_batch: WebinarBatchEntity
  webinar_private_id: string | null
  webinar_private: WebinarPrivateEntity | null
  certificate_url: string | null
  start_date: string
  end_date: string | null
  is_alumni: boolean
}
