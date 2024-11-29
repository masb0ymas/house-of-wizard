export type WebinarBatchEntity = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  instructor: string
  name: string
  batch: number
  start_date: string
  end_date: string
  duration: string // 16 weeks
  is_active: boolean
}
