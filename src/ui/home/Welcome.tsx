"use client"

import { Stack, Text } from "@mantine/core"
import { formatDate } from "date-fns"
import _ from "lodash"
import Link from "next/link"
import { useAccount, useReadContract } from "wagmi"
import { getContractByChain } from "~/artifact/contract/attendance"
import useWebinarLatest from "~/data/query/useWebinarLatest"
import { dateToUnixtime } from "~/lib/date"
import { id } from "date-fns/locale"

export default function Welcome() {
  const account = useAccount()

  const { data, isLoading, isFetching } = useWebinarLatest()
  const attendanceContract = getContractByChain()

  const isFetchingData = isLoading || isFetching
  const start_date = data?.start_date && dateToUnixtime(data?.start_date)

  const result = useReadContract({
    abi: attendanceContract.abi,
    address: attendanceContract.address,
    functionName: "getAttendance",
    args: [account.address, start_date],
  })

  return (
    <>
      {account.isConnected && !_.isEmpty(data) && !isFetchingData ? (
        <Stack gap={10} mb={16} align="center">
          <h1>Welcome to House of Wizard</h1>
          <Text fw={500}>Webinar Link:</Text>
          <Link href={data?.link} target="_blank" rel="noreferrer">
            {data?.link}
          </Link>
          <Text fw={500}>Webinar Date:</Text>
          <Text fw={500}>{formatDate(data.start_date, "dd MMM yyyy HH:mm", { locale: id })}</Text>
        </Stack>
      ) : (
        <Stack gap={0} mb={16} align="center">
          <h1>Welcome to House of Wizard</h1>
        </Stack>
      )}
    </>
  )
}
