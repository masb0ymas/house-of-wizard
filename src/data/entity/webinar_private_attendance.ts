import { WebinarPrivateMemberEntity } from './webinar_private_member'

export type WebinarPrivateAttendanceEntity = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  webinar_private_member_id: string
  webinar_private_member: WebinarPrivateMemberEntity
  is_attendance: boolean
  attendance_date: string
}
