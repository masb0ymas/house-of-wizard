"use client"

import { Button } from "@mantine/core"
import { IconUnlink } from "@tabler/icons-react"
import { base } from "viem/chains"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import { injected } from "wagmi/connectors"

export default function WalletConnect() {
  const account = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()

  function handleConnect() {
    if (account.isConnected) {
      disconnect()
    } else {
      connect({ connector: injected(), chainId: base.id })
    }
  }

  return (
    <Button
      variant={account.isConnected ? "subtle" : "filled"}
      size="lg"
      radius="lg"
      onClick={handleConnect}
      leftSection={account.isConnected ? <IconUnlink stroke={2} /> : undefined}
    >
      {account.isConnected ? "Disconnect" : "Connect Wallet"}
    </Button>
  )
}
