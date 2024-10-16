'use client'

import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  CopyButton,
  Divider,
  Grid,
  Group,
  rem,
  Stack,
  Text,
  Tooltip,
  UnstyledButton,
} from '@mantine/core'
import { IconCheck, IconCopy, IconUnlink } from '@tabler/icons-react'
import { useAccount, useDisconnect, useSwitchChain } from 'wagmi'
import { shortText } from '~/lib/string'
import { mainnets, testnets } from './chains'
import { useStore } from '~/config/zustand'

interface WalletProfileProps {
  close: () => void
}

function Mainnet(props: WalletProfileProps) {
  const { switchChain } = useSwitchChain()

  return (
    <Box>
      <Text component="h2" fw={600} size="lg">
        Mainnet
      </Text>

      <Grid my={7}>
        {mainnets.map((item) => {
          return (
            <Grid.Col span={2} key={item.chainId}>
              <UnstyledButton
                onClick={() => {
                  switchChain({ chainId: item.chainId })
                  props.close()
                }}
              >
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
  )
}

function Testnet(props: WalletProfileProps) {
  const { switchChain } = useSwitchChain()

  return (
    <Box>
      <Text component="h2" fw={600} size="lg">
        Testnet
      </Text>

      <Grid my={7}>
        {testnets.map((item) => {
          return (
            <Grid.Col span={2} key={item.chainId}>
              <UnstyledButton
                onClick={() => {
                  switchChain({ chainId: item.chainId })
                  props.close()
                }}
              >
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
  )
}

export default function WalletProfile(props: WalletProfileProps) {
  const account = useAccount()
  const { disconnect } = useDisconnect()

  const removeEvmWallet = useStore((state) => state.removeEvmWallet)
  const profileAddress = shortText(String(account.address), 22, 6)

  return (
    <>
      <Box>
        <Text component="h2" size="lg" fw={700}>
          Wallet Address
        </Text>

        <Group>
          <Text component="span">{profileAddress}</Text>

          <CopyButton value={String(account.address)} timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
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

      <Mainnet close={props.close} />

      <Divider variant="dashed" my={7} />

      <Testnet close={props.close} />

      <Button
        variant="filled"
        radius="lg"
        onClick={() => {
          disconnect()
          removeEvmWallet()
        }}
        leftSection={<IconUnlink size={18} />}
        fullWidth
        mt={16}
      >
        Disconnect
      </Button>
    </>
  )
}
