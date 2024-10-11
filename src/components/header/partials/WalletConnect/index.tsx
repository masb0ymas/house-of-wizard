"use client"

import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Modal,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconUnlink } from "@tabler/icons-react"
import { base } from "viem/chains"
import { useAccount, useConnect, useDisconnect, useEnsName, useSwitchChain } from "wagmi"
import { injected } from "wagmi/connectors"
import { mainnets, testnets } from "./chains"

export default function WalletConnect() {
  const account = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { switchChain } = useSwitchChain()

  const [opened, { open, close }] = useDisclosure(false)

  const resultEns = useEnsName({ address: account.address })
  const ens = resultEns.data

  if (account.isConnected) {
    const firstAddress = account.address?.slice(0, 5)
    const lastAddress = account.address?.slice(-5)
    const shortAddress = `${firstAddress}...${lastAddress}`
    const address = ens || shortAddress

    console.log("ENS", ens, shortAddress)

    return (
      <>
        <Button variant="light" radius="lg" onClick={open}>
          {address}
        </Button>

        <Modal
          opened={opened}
          onClose={close}
          size="xs"
          radius="lg"
          centered
          withCloseButton={false}
        >
          <Box mb="lg">
            <Text component="h2" fw={600} size="lg">
              Mainnet
            </Text>
            <Divider variant="dashed" my={7} />

            <Grid my={7}>
              {mainnets.map((item) => {
                return (
                  <Grid.Col span={2} key={item.chainId}>
                    <UnstyledButton onClick={() => switchChain({ chainId: item.chainId })}>
                      <Stack gap={0} align="center">
                        <Avatar size="md" src={item.image} alt={item.description} />
                        <Text size="sm" fw={600}>
                          {item.title}
                        </Text>
                      </Stack>
                    </UnstyledButton>
                  </Grid.Col>
                )
              })}
            </Grid>
          </Box>

          <Box mb="lg">
            <Text component="h2" fw={600} size="lg">
              Testnet
            </Text>
            <Divider variant="dashed" my={7} />

            <Grid my={7}>
              {testnets.map((item) => {
                return (
                  <Grid.Col span={2} key={item.chainId}>
                    <UnstyledButton onClick={() => switchChain({ chainId: item.chainId })}>
                      <Stack gap={0} align="center">
                        <Avatar size="md" src={item.image} alt={item.description} />
                        <Text size="sm" fw={600}>
                          {item.title}
                        </Text>
                      </Stack>
                    </UnstyledButton>
                  </Grid.Col>
                )
              })}
            </Grid>
          </Box>

          <Button
            variant="filled"
            radius="lg"
            onClick={() => disconnect()}
            leftSection={<IconUnlink size={18} />}
            fullWidth
          >
            Disconnect
          </Button>
        </Modal>
      </>
    )
  }

  return (
    <>
      <Button radius="lg" onClick={() => connect({ connector: injected(), chainId: base.id })}>
        Connect Wallet
      </Button>
    </>
  )
}
