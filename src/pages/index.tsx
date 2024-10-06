import { Button, Center, Container, Stack } from "@mantine/core"
import Link from "next/link"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import { injected } from "wagmi/connectors"

export default function IndexPage() {
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const account = useAccount()

  console.log(account)

  function handleConnect() {
    if (account.isConnected) {
      console.log("Account is connected")
      disconnect()
    } else {
      connect({ connector: injected() })
    }
  }

  function renderWebinar() {
    if (account.isConnected) {
      return (
        <Stack gap={0} mb={16} align="center">
          <h1>Welcome to House of Wizard</h1>
          <span>Webinar Link:</span>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            https://www.youtube.com/watch?v=dQw4w9WgXcQ
          </Link>
        </Stack>
      )
    }

    return (
      <Stack gap={0} mb={16} align="center">
        <h1>Welcome to House of Wizard</h1>
      </Stack>
    )
  }

  return (
    <Container mt={250}>
      {renderWebinar()}

      <Center>
        <Button size="lg" radius="lg" onClick={handleConnect}>
          {account.isConnected ? account.address : "Get Access"}
        </Button>
      </Center>
    </Container>
  )
}
