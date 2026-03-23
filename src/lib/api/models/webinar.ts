import type { ISO8601DateString } from '~/types/time'

export type Webinar = {
  id: string
  created_at: ISO8601DateString
  updated_at: ISO8601DateString
  deleted_at: ISO8601DateString | null
  title: string
  slug: string
  description: string
  speakers: string
  category_id: string
  start_date: ISO8601DateString
  end_date: ISO8601DateString
  webinar_url: string
  recording_url: string
  ipfs_cid: string
  is_active: boolean
  is_premium: boolean
  chain_id: string
  total_participant: number
}

export type WebinarBatchEntity = {
  id: string
  created_at: ISO8601DateString
  updated_at: ISO8601DateString
  deleted_at: ISO8601DateString | null
  instructor: string
  name: string
  batch: number
  type: string // private | exclusive | express
  start_date: ISO8601DateString
  end_date: ISO8601DateString
  duration: string // 16 weeks
  is_active: boolean
}

export type WebinarPrivatePlan = {
  id: string
  created_at: ISO8601DateString
  updated_at: ISO8601DateString
  deleted_at: ISO8601DateString | null
  webinar_batch_id: string
  title: string
  description: string
  discount: number
  price: number
  features: { text: string }[]
  is_active: boolean
  webinar_batch: WebinarBatchEntity | null
}
