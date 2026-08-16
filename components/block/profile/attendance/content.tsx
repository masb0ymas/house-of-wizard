'use client'

import { IconCalendarCheck } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { Skeleton } from '@/components/ui/skeleton'
import { usePaginationQuery } from '@/hooks/use-pagination-query'
import { queries } from '@/lib/api/queries'
import { formatDate } from '@/lib/date'

export function AttendanceContent() {
  const { offset, limit } = usePaginationQuery()

  const { data: attendanceResponse, isLoading } = useQuery(
    queries.webinar.logAttendance.list({ offset, limit })
  )

  const attendances = useMemo(() => {
    if (attendanceResponse?.data && attendanceResponse.data.length > 0) {
      return attendanceResponse.data
    }
    return []
  }, [attendanceResponse])

  if (isLoading) {
    return <AttendanceContentSkeleton />
  }

  if (attendances.length === 0) {
    return (
      <Empty>
        <EmptyMedia>
          <IconCalendarCheck className="h-12 w-12 text-gray-400" />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle>No Attendances Yet</EmptyTitle>
          <EmptyDescription>
            Your webinar attendance history will appear here once you join a webinar session.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent />
      </Empty>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {attendances.map((attendance) => (
        <div
          key={attendance.id}
          className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="flex flex-col gap-1">
            <span className="font-medium text-gray-900">
              {attendance.webinar?.title ?? 'Unknown Webinar'}
            </span>
            <span className="text-sm text-gray-500">
              {formatDate(new Date(attendance.attendance_at), 'dd/MM/yyyy HH:mm')} WIB
            </span>
          </div>
          <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 capitalize">
            {attendance.type}
          </span>
        </div>
      ))}
    </div>
  )
}

export function AttendanceContentSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      ))}
    </div>
  )
}
