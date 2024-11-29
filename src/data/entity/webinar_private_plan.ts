import { WebinarBatchEntity } from "./webinar_batch"

export type WebinarPrivatePlanEntity = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  webinar_batch_id: string
  title: string
  description: string
  discount: number
  price: number
  features: any[]
  is_active: boolean
  webinar_batch: WebinarBatchEntity | null
}