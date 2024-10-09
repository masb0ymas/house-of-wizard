"use client"

import { Button } from "@mantine/core"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { useAccount, useEnsName, useReadContract, useWriteContract } from "wagmi"
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

  const { writeContract } = useWriteContract()
  const [visible, setVisible] = useState(false)

  const { data } = useWebinarLatest()
  const attendanceContract = getContractByChain()

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

  console.log(result.data, start_date)

  function checkingButton() {
    return (
      <Button size="lg" radius="lg" variant="subtle" disabled>
        Checking...
      </Button>
    )
  }

  function buttonAction() {
    // account connected with checking attendance
    if (account.isConnected && (result.isLoading || result.isFetching)) {
      return checkingButton()
    }

    // account connect with attendance
    // @ts-expect-error
    if (result.data && validate.boolean(result.data[0])) {
      return (
        <Button size="lg" radius="lg" variant="subtle" disabled>
          You are Attendance
        </Button>
      )
    }

    // account connect without attendance
    // @ts-expect-error
    if (account.isConnected && result.data && validate.boolean(result.data[0]) === false) {
      return (
        <Button
          size="lg"
          radius="lg"
          onClick={() => {
            setVisible(true)

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

            setVisible(false)
          }}
          loading={visible}
        >
          Attendance
        </Button>
      )
    }

    // checking
    return checkingButton()
  }

  return <>{buttonAction()}</>
}
