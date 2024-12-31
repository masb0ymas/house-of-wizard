'use client'

import { ColumnDef } from '@tanstack/react-table'
import { formatDistance } from 'date-fns'
import { WebinarLogAttendanceEntity } from '~/data/entity/webinar_log_attendance'
import { formatLocalDate } from '~/lib/date'
import { capitalizeFirstLetter } from '~/lib/string'

export const columns: ColumnDef<WebinarLogAttendanceEntity>[] = [
  {
    accessorKey: 'webinar.title',
    header: 'Title',
    cell: ({ row }) => {
      return <div className="w-[250px]">{row.original.webinar.title}</div>
    },
  },
  {
    accessorKey: 'webinar.instructor',
    header: 'Speakers',
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => {
      return <div className="w-[110px]">{capitalizeFirstLetter(row.original.type)}</div>
    },
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
    accessorKey: 'attendance_at',
    header: 'Attendance',
    cell: ({ row }) => {
      if (row.original.attendance_at) {
        return <div className="w-[120px]">{formatLocalDate(row.original.attendance_at)}</div>
      }

      return '-'
    },
  },
  {
    accessorKey: 'note',
    header: 'Note',
    cell: ({ row }) => {
      const start_date = new Date(row.original.webinar.start_date)
      const attendance = new Date(row.original.attendance_at)

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
