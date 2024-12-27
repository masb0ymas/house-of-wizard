'use client'

import { ColumnDef } from '@tanstack/react-table'
import { formatDistance } from 'date-fns'
import { WebinarAttendanceEntity } from '~/data/entity/webinar_attendance'
import { formatLocalDate } from '~/lib/date'

export const columns: ColumnDef<WebinarAttendanceEntity>[] = [
  {
    accessorKey: 'webinar.title',
    header: 'Title',
    cell: ({ row }) => {
      return <div className="w-[250px]">{row.original.webinar.title}</div>
    },
  },
  {
    accessorKey: 'webinar.speakers',
    header: 'Speakers',
  },
  {
    accessorKey: 'webinar.start_date',
    header: 'Schedule',
    cell: ({ row }) => {
      if (row.original.webinar.start_date) {
        return <div className="w-[120px]">{formatLocalDate(row.original.webinar.start_date)}</div>
      }

      return '-'
    },
  },
  {
    accessorKey: 'check_in',
    header: 'Attendance',
    cell: ({ row }) => {
      if (row.original.check_in) {
        return <div className="w-[120px]">{formatLocalDate(row.original.check_in)}</div>
      }

      return '-'
    },
  },
  {
    accessorKey: 'note',
    header: 'Note',
    cell: ({ row }) => {
      const start_date = new Date(row.original.webinar.start_date)
      const attendance = new Date(row.original.check_in)

      let note = ''

      if (start_date > attendance) {
        const diff = formatDistance(start_date, attendance)
        note = `Early ${diff}`
      }

      if (start_date < attendance) {
        const diff = formatDistance(attendance, start_date)
        note = `Late ${diff}`
      }

      return <span>{note}</span>
    },
  },
]
