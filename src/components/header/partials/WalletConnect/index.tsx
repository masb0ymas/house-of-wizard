"use client"

import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  CopyButton,
  Divider,
  Grid,
  Group,
  Modal,
  rem,
  Stack,
  Text,
  Tooltip,
  UnstyledButton,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconCheck, IconCopy, IconUnlink, IconWallet } from "@tabler/icons-react"
import { base } from "viem/chains"
import { useAccount, useConnect, useDisconnect, useEnsName, useSwitchChain } from "wagmi"
import { injected } from "wagmi/connectors"
import { shortText } from "~/lib/string"
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
    const profileAddress = shortText(String(account.address), 22, 6)
    const shortAddress = shortText(String(account.address), 5, 5)
    const address = ens || shortAddress

    console.log("ENS", ens, shortAddress)

    return (
      <>
        <Button
          variant="light"
          radius="lg"
          onClick={open}
          leftSection={<IconWallet stroke={1.5} />}
        >
          {address}
        </Button>

        <Modal
          opened={opened}
          onClose={close}
          size="auto"
          radius="lg"
          centered
          withCloseButton={false}
        >
          <Box>
            <Text component="h2" size="lg" fw={700}>
              Wallet Address
            </Text>

            <Group>
              <Text component="span">{profileAddress}</Text>

              <CopyButton value={String(account.address)} timeout={2000}>
                {({ copied, copy }) => (
                  <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
                    <ActionIcon color={copied ? "teal" : "gray"} variant="subtle" onClick={copy}>
                      {copied ? (
                        <IconCheck style={{ width: rem(16) }} />
                      ) : (
                        <IconCopy style={{ width: rem(16) }} />
                      )}
                    </ActionIcon>
                  </Tooltip>
                )}
              </CopyButton>
            </Group>
          </Box>

          <Divider variant="dashed" my={7} />

          <Box>
            <Text component="h2" fw={600} size="lg">
              Mainnet
            </Text>

            <Grid my={7}>
              {mainnets.map((item) => {
                return (
                  <Grid.Col span={2} key={item.chainId}>
                    <UnstyledButton onClick={() => switchChain({ chainId: item.chainId })}>
                      <Stack gap={0} align="center">
                        <Avatar size="md" src={item.image} alt={item.description} />
                        <Text size="sm">{item.title}</Text>
                      </Stack>
                    </UnstyledButton>
                  </Grid.Col>
                )
              })}
            </Grid>
          </Box>

          <Divider variant="dashed" my={7} />

          <Box>
            <Text component="h2" fw={600} size="lg">
              Testnet
            </Text>

            <Grid my={7}>
              {testnets.map((item) => {
                return (
                  <Grid.Col span={2} key={item.chainId}>
                    <UnstyledButton onClick={() => switchChain({ chainId: item.chainId })}>
                      <Stack gap={0} align="center">
                        <Avatar size="md" src={item.image} alt={item.description} />
                        <Text size="sm">{item.title}</Text>
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
            mt={16}
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
