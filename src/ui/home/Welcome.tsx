"use client"

import { Center, Divider, Group, Stack, Text } from "@mantine/core"
import { formatDate } from "date-fns"
import { id } from "date-fns/locale"
import _ from "lodash"
import Link from "next/link"
import { base } from "viem/chains"
import { useAccount, useReadContract } from "wagmi"
import { getContractByChain } from "~/artifact/contract/attendance"
import classes from "~/components/description/description.module.css"
import useWebinarLatest from "~/data/query/useWebinarLatest"
import { dateToUnixtime } from "~/lib/date"
import { validate } from "~/lib/validate"

export default function Welcome() {
  const account = useAccount()

  const { data, isLoading, isFetching } = useWebinarLatest()
  const attendanceContract = getContractByChain(base.id)

  const isFetchingData = isLoading || isFetching
  const start_date = data?.start_date && dateToUnixtime(data?.start_date)

  const result = useReadContract({
    abi: attendanceContract.abi,
    address: attendanceContract.address,
    functionName: "getAttendance",
    args: [account.address, start_date],
  })

  function gretting() {
    // @ts-expect-error
    const is_attendance = result.data && validate.boolean(result.data[0])

    // @ts-expect-error
    const is_not_attendance = result.data && validate.boolean(result.data[0]) === false

    console.log(is_attendance, is_not_attendance)

    if (account.isConnected) {
      if (isFetchingData) {
        return <Text>Loading...</Text>
      }

      if (is_not_attendance) {
        return (
          <Stack gap={0} mb={16} align="center">
            <h1>Welcome to House of Wizard</h1>
            <Text>Please check attendance first</Text>
          </Stack>
        )
      }

      if (is_attendance && data instanceof Object && !_.isNil(data.id) && !isFetchingData) {
        return (
          <Stack gap={10} mb={16}>
            <Center>
              <h1>Welcome to House of Wizard</h1>
            </Center>

            <>
              <Group justify="space-between">
                <Text className={classes.modal_label} size="sm">
                  Webinar
                </Text>
                <Text size="sm">{data.title}</Text>
              </Group>
              <Divider variant="dashed" />
            </>

            <>
              <Group justify="space-between">
                <Text className={classes.modal_label} size="sm">
                  Speakers
                </Text>
                <Text size="sm">{data.speakers}</Text>
              </Group>
              <Divider variant="dashed" />
            </>

            <>
              <Group justify="space-between">
                <Text className={classes.modal_label} size="sm">
                  Schedule
                </Text>
                <Text size="sm">
                  {data.start_date &&
                    `${formatDate(new Date(data.start_date), "dd MMM yyyy HH:mm", {
                      locale: id,
                    })} WIB`}
                </Text>
              </Group>
              <Divider variant="dashed" />
            </>

            <>
              <Group justify="space-between">
                <Text className={classes.modal_label} size="sm">
                  Link
                </Text>

                <Link href={data.link} target="_blank" rel="noreferrer">
                  <Text size="sm">{data.link}</Text>
                </Link>
              </Group>
              <Divider variant="dashed" />
            </>
          </Stack>
        )
      }
    }

    return (
      <Stack gap={0} mb={16} align="center">
        <h1>Welcome to House of Wizard</h1>
      </Stack>
    )
  }

  return gretting()
}
