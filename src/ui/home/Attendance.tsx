"use client"

import { Button } from "@mantine/core"
import React, { useMemo } from "react"
import { useAccount } from "wagmi"

export default function Attendance() {
  const account = useAccount()

  const checkAttendance = useMemo(() => {
    if (account.isConnected) {
      return (
        <Button size="lg" radius="lg" onClick={() => console.log("Sign Transaction")}>
          Attendance
        </Button>
      )
    } else {
      return null
    }
  }, [account.isConnected])

  return checkAttendance
}
