'use client'

import { Stack, Text } from '@mantine/core'
import { subMinutes } from 'date-fns'
import _ from 'lodash'
import { useAccount, useChainId, useReadContract } from 'wagmi'
import { getContractByChain } from '~/artifact/contract/attendance'
import Description, { ItemType } from '~/components/description'
import useWebinarLatest from '~/data/query/useWebinarLatest'
import { dateToUnixtime } from '~/lib/date'
import { validate } from '~/lib/validate'

export default function Welcome() {
  const account = useAccount()

  const chainId = useChainId()
  const attendanceContract = getContractByChain(chainId)

  const { data, isLoading, isFetching } = useWebinarLatest(chainId)

  const isFetchingData = isLoading || isFetching
  const start_date = data?.start_date && dateToUnixtime(data?.start_date)

  const result = useReadContract({
    abi: attendanceContract.abi,
    address: attendanceContract.address,
    functionName: 'getAttendance',
    args: [account.address, start_date],
  })

  function greeting() {
    // @ts-expect-error
    const is_attendance = result.data && validate.boolean(result.data[0])

    // @ts-expect-error
    const is_not_attendance = result.data && validate.boolean(result.data[0]) === false

    const sub_30_minutes = subMinutes(new Date(String(data?.start_date)), 30)
    const is_open_attendance = new Date() > sub_30_minutes
    const is_close_attendance = new Date() > new Date(String(data?.end_date))

    if (account.isConnected) {
      if (isFetchingData) {
        return <Text size="lg">Loading...</Text>
      }

      if (is_not_attendance && is_open_attendance && !is_close_attendance) {
        return <Text size="lg">Please check attendance first</Text>
      }

      if (is_attendance && data instanceof Object && !_.isNil(data.id) && !isFetchingData) {
        const details = [
          { key: 'title', title: 'Webinar', type: ItemType.string },
          { key: 'speakers', title: 'Speakers', type: ItemType.string },
          { key: 'start_date', title: 'Schedule', type: ItemType.date },
          { key: 'link', title: 'Link', type: ItemType.link },
        ]

        return (
          <Stack gap={10} mb={16}>
            {details.map((content) => Description<WebinarEntity>({ item: data, content }))}
          </Stack>
        )
      }
    }

    if (account.isDisconnected) {
      return <Text size="lg">To become a great wizard, connect your wallet first.</Text>
    }

    return null
  }

  return greeting()
}
