"use client"

import { Button, Stack, Text } from "@mantine/core"
import { IconReload } from "@tabler/icons-react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import _ from "lodash"
import Link from "next/link"
import { type BaseError } from "viem"
import { base } from "viem/chains"
import {
  useAccount,
  useEnsName,
  useReadContract,
  useSwitchChain,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi"
import { z } from "zod"
import { getContractByChain } from "~/artifact/contract/attendance"
import { env } from "~/config/env"
import useWebinarLatest from "~/data/query/useWebinarLatest"
import webinarAttendanceSchema from "~/data/schema/webinar_attendance.schema"
import { dateToUnixtime } from "~/lib/date"
import { validate } from "~/lib/validate"
import { queryClient } from "~/lib/WrapperReactQuery"

export default function Attendance() {
  const account = useAccount()
  const ens = useEnsName({ address: account.address })

  const { data: hash, error, isPending, writeContract } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  const defaultChainId = base.id
  const { switchChain } = useSwitchChain()

  const { data } = useWebinarLatest()
  const attendanceContract = getContractByChain(defaultChainId)

  const mutation = useMutation({
    // @ts-expect-error
    mutationFn: async (values: z.infer<typeof webinarAttendanceSchema>) => {
      const url = `${env.API_URL}/v1/webinar-attendance`
      return await axios.post(url, values)
    },
    onSuccess: () => {
      console.log("Data saved successfully")
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["webinar-latest"] })
    },
  })

  async function markAttendance() {
    console.log(ens.data, account.address)

    const formData = {
      webinar_id: data?.id,
      fullname: ens.data || account.address,
      check_in: new Date(),
      wallet_address: account.address,
      metadata: {
        title: data?.title,
        description: data?.description,
        speakers: data?.speakers,
        date: data?.start_date,
        link: data?.link,
      },
    }

    try {
      await mutation.mutateAsync(formData)
    } catch (error) {
      console.log(error)
    }
  }

  const start_date = data?.start_date && dateToUnixtime(data?.start_date)

  const result = useReadContract({
    abi: attendanceContract.abi,
    address: attendanceContract.address,
    functionName: "getAttendance",
    args: [account.address, start_date],
  })

  // console.log(result.data, result.isLoading, result.isFetching, start_date, data, chains)

  function checkingButton() {
    return (
      <Button size="lg" radius="lg" variant="subtle" disabled>
        Checking...
      </Button>
    )
  }

  function buttonAction() {
    // @ts-expect-error
    const is_attendance = result.data && validate.boolean(result.data[0])

    // @ts-expect-error
    const is_not_attendance = result.data && validate.boolean(result.data[0]) === false

    if (account.isConnected) {
      if (!data) {
        return <Text size="lg">There are no webinars at this time</Text>
      }

      if (result.isLoading || result.isFetching) {
        return checkingButton()
      }

      if (_.isNil(result.data) && (!result.isLoading || !result.isFetching)) {
        return (
          <Button size="lg" radius="lg" onClick={() => switchChain({ chainId: defaultChainId })}>
            Switch to Base
          </Button>
        )
      }

      if (is_attendance) {
        return (
          <Button size="lg" radius="lg" variant="subtle" disabled>
            You are Attendance
          </Button>
        )
      }

      if (is_not_attendance) {
        return (
          <>
            <Button
              size="lg"
              radius="lg"
              onClick={() => {
                const epochTime = data?.start_date && dateToUnixtime(data?.start_date)
                const ipfs_cid = data?.ipfs_cid

                console.log("Save to DB")
                markAttendance()

                console.log("Mark Attendance to Contract", epochTime)
                writeContract({
                  abi: attendanceContract.abi,
                  address: attendanceContract.address,
                  functionName: "markAttendance",
                  args: [epochTime, true, ipfs_cid],
                })
              }}
              disabled={isPending || isConfirming}
            >
              {isPending || isConfirming ? "Confirming..." : "Attendance"}
            </Button>

            <Stack gap={10} mt={16} align="center">
              {hash && (
                <Text>
                  Transaction Hash:{" "}
                  <Link
                    href={`${attendanceContract.explorer}/tx/${hash}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {hash}
                  </Link>
                </Text>
              )}
              {isConfirming && <Text>Waiting for confirmation...</Text>}
              {isConfirmed && <Text>Transaction confirmed.</Text>}
              {error && <Text>Error: {(error as BaseError).shortMessage || error.message}</Text>}

              {isConfirmed && (
                <Button
                  onClick={() => result.refetch()}
                  leftSection={<IconReload />}
                  radius="lg"
                  size="md"
                >
                  Refresh
                </Button>
              )}
            </Stack>
          </>
        )
      }
    }

    return null
  }

  return buttonAction()
}
