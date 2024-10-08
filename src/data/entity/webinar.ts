interface WebinarEntity {
  id: string
  created_at: string
  updated_at: string
  deleted_at?: string
  title: string
  description?: string | null
  speakers: string
  category_id: string
  start_date: string
  end_date: string
  link: string
  ipfs_cid: string
}
