'use client'

import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { usePaginationQuery } from '@/hooks/use-pagination-query'
import { queries } from '@/lib/api/queries'

import { AttendanceCard, AttendanceCardSkeleton } from './attendance-card'
import EmptyAttendance from './empty'

export function AttendanceContent() {
  const { offset, limit } = usePaginationQuery({ defaultLimit: 100 })

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
    return (
      <div className="flex flex-col gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <AttendanceCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (attendances.length === 0) {
    return <EmptyAttendance />
  }

  return (
    <div className="flex flex-col gap-3">
      {attendances.map((item) => (
        <AttendanceCard key={item.id} attendance={item} />
      ))}
    </div>
  )
}
