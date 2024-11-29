import { UserEntity } from "./user"

export type TransactionEntity = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  user_id: string
  provider: string
  voucher_code: string | null
  voucher_nominal: number
  uniq_code: string
  total: number
  payment_id: string | null
  payment_method: string | null
  payment_type: string | null
  payment_status: string | null
  payment_date: Date | null
  payment_url: string | null
  payment_token: string | null
  payment_callback: string | null
  user: UserEntity | null
}
