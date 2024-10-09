interface WebinarEntity {
  id: string
  created_at: Date
  updated_at: Date
  deleted_at?: Date
  title: string
  description?: string | null
  speakers: string
  category_id: string
  start_date: Date
  end_date: Date
  link: string
  ipfs_cid: string
}
