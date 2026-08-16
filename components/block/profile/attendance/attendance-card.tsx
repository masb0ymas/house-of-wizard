'use client'

import type { Models } from '@/lib/api/models'

import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { formatDate } from '@/lib/date'
import { capitalizeFirstLetter } from '@/lib/string'

interface AttendanceCardProps {
  attendance: Models.WebinarLogAttendance
}

enum AttendanceType {
  MINI_COURSE = 'MINI_COURSE',
  PRIVATE = 'PRIVATE',
}

function getTypeColor(type: AttendanceType) {
  switch (type) {
    case AttendanceType.MINI_COURSE:
      return 'secondary'
    case AttendanceType.PRIVATE:
      return 'info'
    default:
      return 'info'
  }
}

export function AttendanceCard({ attendance }: AttendanceCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
      <div className="flex flex-col gap-1">
        <p className="truncate text-sm font-medium text-gray-900">{attendance.webinar?.title}</p>
        <p className="text-xs text-gray-500">
          {formatDate(new Date(attendance.attendance_at), 'dd/MM/yyyy')}
        </p>
      </div>

      <Badge
        variant={getTypeColor(attendance.type as AttendanceType)}
        appearance="outline"
        className="ml-3 shrink-0"
      >
        <span className="text-xs tracking-wide">{capitalizeFirstLetter(attendance.type)}</span>
      </Badge>
    </div>
  )
}

export function AttendanceCardSkeleton() {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
      <div className="flex flex-1 flex-col gap-1.5">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-3 w-24" />
      </div>
      <Skeleton className="ml-3 h-5 w-16 shrink-0 rounded-full" />
    </div>
  )
}
