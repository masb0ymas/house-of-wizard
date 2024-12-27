'use client'

import _ from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import Loader from '~/components/custom/loader'
import SimpleTable from '~/components/custom/table/simple-table'
import { TableCell, TableRow } from '~/components/ui/table'
import { WebinarAttendanceEntity } from '~/data/entity/webinar_attendance'
import { findWebinarAttendances } from '../action'
import { columns } from './column'

export default function AttendanceTable() {
  const [isFetching, setIsFetching] = useState(true)

  const page = 1
  const pageSize = 20

  const [webinarAttendances, setWebinarAttendances] = useState<WebinarAttendanceEntity[]>([])

  const getWebinarAttendances = useCallback(async () => {
    const { data } = await findWebinarAttendances({ page, pageSize })
    setWebinarAttendances(data)
    setIsFetching(false)
  }, [])

  useEffect(() => {
    getWebinarAttendances()
  }, [getWebinarAttendances])

  if (isFetching) {
    return <Loader />
  }

  return (
    <div className="my-4">
      <SimpleTable data={webinarAttendances} columns={columns} />
    </div>
  )
}

type TableRowCellProps = {
  key: string
  webinarAttendances: WebinarAttendanceEntity[]
}

function TableRowCell({ key, webinarAttendances }: TableRowCellProps) {
  function renderCell(value: string) {
    if (!_.isEmpty(webinarAttendances)) {
      return webinarAttendances.map((webinarAttendance: WebinarAttendanceEntity) => {
        // @ts-expect-error
        return <TableCell key={webinarAttendance.id}>{webinarAttendance[key]}</TableCell>
      })
    }
    return <TableCell>{value}</TableCell>
  }
  return (
    <TableRow>
      {renderCell('title')}
      {renderCell('speakers')}
      {renderCell('schedule')}
      {renderCell('attendance')}
    </TableRow>
  )
}
