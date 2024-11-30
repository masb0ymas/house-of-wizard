'use client'

import { IconCalendar, IconClock, IconWorld } from '@tabler/icons-react'
import _ from 'lodash'
import { MonitorPlay } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { Skeleton } from '~/components/ui/skeleton'
import { WebinarPrivatePlanEntity } from '~/data/entity/webinar_private_plan'
import { formatLocalDate } from '~/lib/date'
import { getWebinarPrivatePlanByTrxId } from '../action'

type IProps = {
  id: string
}

export default function CourseDetail({ id }: IProps) {
  const [webinarPlan, setWebinarPlan] = useState<WebinarPrivatePlanEntity | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const getWebinarPlan = useCallback(async () => {
    const { data } = await getWebinarPrivatePlanByTrxId(id)
    setWebinarPlan(data)
    setIsLoading(false)
  }, [id])

  useEffect(() => {
    getWebinarPlan()
  }, [getWebinarPlan])

  const webinar = {
    name: _.get(webinarPlan, 'webinar_batch.name', ''),
    instructor: _.get(webinarPlan, 'webinar_batch.instructor', ''),
    start_date: _.get(webinarPlan, 'webinar_batch.start_date', ''),
    end_date: _.get(webinarPlan, 'webinar_batch.end_date', ''),
    duration: _.get(webinarPlan, 'webinar_batch.duration', ''),
    batch: _.get(webinarPlan, 'webinar_batch.batch', ''),
    type: 'Live Online Course',
  }

  function renderContent() {
    if (isLoading) {
      return (
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <Skeleton className="h-4 w-[350px]" />
            <Skeleton className="h-4 w-[150px]" />

            <div className="grid grid-cols-2 gap-4 mt-4">
              {[1, 2, 3, 4].map((index) => (
                <div className="flex flex-row items-center gap-2" key={index}>
                  <Skeleton className="h-4 w-[30px]" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{webinar.name}</h2>
        <p className="text-gray-600 mb-4">
          Instructor: <u>{webinar.instructor}</u>
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <IconCalendar className="w-4 h-4" />
            <span className="text-sm">
              {webinar.start_date && formatLocalDate(webinar.start_date, 'dd MMM yyyy')}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <IconClock className="w-4 h-4" />
            <span className="text-sm">
              {webinar.end_date && formatLocalDate(webinar.end_date, 'dd MMM yyyy')}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MonitorPlay className="w-4 h-4" />
            <span className="text-sm">{webinar.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <IconWorld className="w-4 h-4" />
            <span className="text-sm">{webinar.type}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200">
      <div className="flex gap-6">
        {isLoading ? (
          <Skeleton className="w-36 h-36" />
        ) : (
          <Image
            src="/logo-how.png"
            alt={webinar.name}
            className="w-36 h-36 object-cover rounded-lg"
            width={144}
            height={144}
          />
        )}

        {renderContent()}
      </div>
    </div>
  )
}
