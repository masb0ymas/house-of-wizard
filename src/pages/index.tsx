import { Button, Container, Stack, Text } from "@mantine/core"
import { IconCurrencyEthereum, IconUnlink } from "@tabler/icons-react"
import Link from "next/link"
import { base } from "viem/chains"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import { injected } from "wagmi/connectors"

export default function IndexPage() {
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const account = useAccount()

  function handleConnect() {
    if (account.isConnected) {
      disconnect()
    } else {
      connect({ connector: injected(), chainId: base.id })
    }
  }

  function renderWebinar() {
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
    }

    return (
      <Stack gap={0} mb={16} align="center">
        <h1>Welcome to House of Wizard</h1>
      </Stack>
    )
  }

  return (
    <Container mt={200}>
      {renderWebinar()}

      <Stack align="center" gap={16}>
        {account.isConnected && (
          <Button size="lg" radius="lg" onClick={() => console.log("Sign Transaction")}>
            Sign Transaction
          </Button>
        )}

        <Button
          variant={account.isConnected ? "subtle" : "filled"}
          size="lg"
          radius="lg"
          onClick={handleConnect}
          leftSection={
            account.isConnected ? <IconUnlink stroke={2} /> : <IconCurrencyEthereum stroke={2} />
          }
        >
          {account.isConnected ? "Disconnect" : "Connect Wallet"}
        </Button>
      </Stack>
    </Container>
  )
}
