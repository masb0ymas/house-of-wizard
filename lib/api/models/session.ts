import { ISO8601DateString } from '@/types/time'

export interface Session {
  id: string
  user_id: string
  token: string
  ip_address: string | null
  device: string | null
  platform: string | null
  user_agent: string | null
  latitude: string | null
  longitude: string | null
  expires_at: ISO8601DateString
  expires_in: number
  created_at: ISO8601DateString
  updated_at: ISO8601DateString
  deleted_at: ISO8601DateString | null
}
