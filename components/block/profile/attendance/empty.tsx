'use client'

import { IconCalendarCheck } from '@tabler/icons-react'

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

export default function EmptyAttendance() {
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
