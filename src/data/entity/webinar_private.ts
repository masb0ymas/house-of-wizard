import { InstructorEntity } from './instructor'

export type WebinarPrivateEntity = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  webinar_batch_id: string
  instructor_id: string
  instructor: InstructorEntity
  title: string
  slug: string
  description: string
  category_id: string
  start_date: string
  end_date: string
  webinar_url: string // for live webinar
  recording_url: string | null // for recorded webinar
  recording_price: number
  recording_period: string | null
  is_active: boolean
  is_practice: boolean
  chain_id: string
}
