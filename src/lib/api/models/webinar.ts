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
