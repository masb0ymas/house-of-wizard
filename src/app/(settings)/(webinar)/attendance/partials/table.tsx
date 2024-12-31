'use client'

import { useCallback, useEffect, useState } from 'react'
import Loader from '~/components/custom/loader'
import SimpleTable from '~/components/custom/table/simple-table'
import { WebinarLogAttendanceEntity } from '~/data/entity/webinar_log_attendance'
import { findLogAttendances } from '../action'
import { columns } from './column'

export default function AttendanceTable() {
  const [isFetching, setIsFetching] = useState(true)

  const page = 1
  const pageSize = 20

  const [logAttendances, setLogAttendances] = useState<WebinarLogAttendanceEntity[]>([])

  const getLogAttendances = useCallback(async () => {
    const { data } = await findLogAttendances({ page, pageSize })
    setLogAttendances(data)
    setIsFetching(false)
  }, [])

  useEffect(() => {
    getLogAttendances()
  }, [getLogAttendances])

  if (isFetching) {
    return <Loader />
  }

  return (
    <div className="my-4">
      <SimpleTable data={logAttendances} columns={columns} />
    </div>
  )
}
