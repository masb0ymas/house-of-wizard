'use client'

import { IconCheck } from '@tabler/icons-react'
import clsx from 'clsx'
import _ from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import { Skeleton } from '~/components/ui/skeleton'
import { WebinarPrivatePlanEntity } from '~/data/entity/webinar_private_plan'
import { formatCurrencyIDR } from '~/lib/number'
import { validate } from '~/lib/validate'
import { getWebinarPrivatePlanByTrxId } from '../action'

type IProps = {
  id: string
}

export default function PriceDetail({ id }: IProps) {
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

  const description = _.get(webinarPlan, 'description', '')
  const features = _.get(webinarPlan, 'features', [])
  const price = _.get(webinarPlan, 'price', 0)

  const new_price = formatCurrencyIDR(price)
  const admin_fee = formatCurrencyIDR(5000)
  const platform_fee = formatCurrencyIDR(10000)
  const uniq_code = formatCurrencyIDR(123)
  const total = validate.number(price) + 0 + 123

  const checkFeatures = features && features?.length > 0

  const calculateSection = [
    {
      label: 'Subtotal',
      value: new_price,
      skeleton: 'h-4 w-[170px]',
      is_strike: false,
    },
    {
      label: 'Platform Fee',
      value: platform_fee,
      skeleton: 'h-4 w-[120px]',
      is_strike: true,
    },
    {
      label: 'Admin Fee',
      value: admin_fee,
      skeleton: 'h-4 w-[120px]',
      is_strike: true,
    },
    {
      label: 'Unique Code',
      value: uniq_code,
      skeleton: 'h-4 w-[90px]',
      is_strike: false,
    },
  ]

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="mb-6">
        <div className="flex justify-between items-baseline mb-2">
          <span className="text-gray-600">Price</span>
          <div className="text-right">
            {isLoading ? (
              <Skeleton className="h-4 w-[170px]" />
            ) : (
              <>
                <span className="text-2xl font-bold text-gray-900">{new_price}</span>
                <span className="text-gray-500 text-2xl ml-1">,-</span>
              </>
            )}
          </div>
        </div>
        {isLoading ? (
          <Skeleton className="h-4 w-[250px]" />
        ) : (
          <div className="text-sm text-gray-500">{description}</div>
        )}
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">What&apos;s included:</h3>
        {isLoading ? (
          <>
            {[1, 2, 3, 4, 5, 6].map((_item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Skeleton className="h-4 w-[30px]" />
                <Skeleton className={clsx('h-4 w-[250px]', index % 2 === 0 && 'w-[300px]')} />
              </div>
            ))}
          </>
        ) : (
          <>
            {checkFeatures &&
              features?.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{item.text}</span>
                </div>
              ))}
          </>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        {calculateSection.map((item, index) => (
          <div key={index} className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">{item.label}</span>
            {isLoading ? (
              <Skeleton className={item.skeleton} />
            ) : (
              <span className={clsx('font-medium', item.is_strike && 'text-red-400 line-through')}>
                {item.value}
              </span>
            )}
          </div>
        ))}

        <div className="flex justify-between text-base font-medium mt-4 pt-4 border-t border-gray-200">
          <span>Total</span>
          {isLoading ? (
            <Skeleton className="h-4 w-[170px]" />
          ) : (
            <span>{total && formatCurrencyIDR(total)}</span>
          )}
        </div>
      </div>
    </div>
  )
}
