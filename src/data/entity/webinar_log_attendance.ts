import { UserEntity } from './user'

export type WebinarLogAttendanceEntity = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  user_id: string
  user: UserEntity
  attendance_at: string
  type: string // mini_course | private
  webinar: {
    title: string
    instructor: string
    category: string
    start_date: string
    end_date: string
  } // json
}
