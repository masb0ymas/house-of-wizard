"use client"

import { Stack, Text } from "@mantine/core"
import Link from "next/link"
import { useMemo } from "react"
import { useAccount } from "wagmi"

export default function Welcome() {
  const account = useAccount()

  const gretting = useMemo(() => {
    if (account.isConnected) {
      return (
        <Stack gap={0} mb={16} align="center">
          <h1>Welcome to House of Wizard</h1>
          <Text fw={500}>Webinar Link:</Text>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
            https://www.youtube.com/watch?v=dQw4w9WgXcQ
          </Link>
        </Stack>
      )
    } else {
      return (
        <Stack gap={0} mb={16} align="center">
          <h1>Welcome to House of Wizard</h1>
        </Stack>
      )
    }
  }, [account.isConnected])

  return gretting
}
