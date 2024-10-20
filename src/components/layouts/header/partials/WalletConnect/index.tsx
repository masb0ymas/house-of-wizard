'use client'

import { Button, Group, Modal, Tooltip, UnstyledButton } from '@mantine/core'
import { useDisclosure, useViewportSize } from '@mantine/hooks'
import { IconWallet } from '@tabler/icons-react'
import _ from 'lodash'
import { base } from 'viem/chains'
import { useAccount, useChainId, useConnect, useEnsName, useSignMessage } from 'wagmi'
import { injected } from 'wagmi/connectors'
import MyImage from '~/components/image'
import { useStore } from '~/config/zustand'
import { shortText } from '~/lib/string'
import { listChains } from './chains'
import WalletProfile from './WalletProfile'

export default function WalletConnect() {
  const account = useAccount()
  const { connect } = useConnect()
  const chainId = useChainId()
  const { signMessage } = useSignMessage()

  const { width } = useViewportSize()
  const [opened, { open, close }] = useDisclosure(false)

  const setEvmWallet = useStore((state) => state.setEvmWallet)

  const resultEns = useEnsName({ address: account.address })
  const ens = resultEns.data

  if (account.isConnected) {
    const shortAddress = shortText(String(account.address), 5, 5)
    const address = ens || shortAddress

    console.log('ENS', ens, shortAddress)

    // @ts-expect-error
    function activeChain() {
      const chain = listChains.find((item) => item.chainId === chainId)

      if (_.isNil(chain)) {
        return (
          <Tooltip
            label="Unsupported chain"
            withArrow
            position="bottom"
            transitionProps={{ transition: 'pop', duration: 300 }}
          >
            <UnstyledButton onClick={open}>
              <MyImage
                src="/static/question-mark.png"
                alt="Unsupported chain"
                width="30px"
                height="30px"
              />
            </UnstyledButton>
          </Tooltip>
        )
      }

      return (
        <Tooltip
          label={chain.title}
          withArrow
          position="bottom"
          transitionProps={{ transition: 'pop', duration: 300 }}
        >
          <UnstyledButton onClick={open}>
            <MyImage src={chain.image} alt={chain.description} width="30px" height="30px" />
          </UnstyledButton>
        </Tooltip>
      )
    }

    return (
      <>
        <Group my={width < 480 ? 'xs' : undefined} mx={width < 480 ? 'md' : undefined}>
          {activeChain()}

          <Tooltip
            label="Click to view"
            withArrow
            position="bottom"
            transitionProps={{ transition: 'pop', duration: 300 }}
          >
            <Button
              variant="light"
              radius="lg"
              onClick={open}
              leftSection={<IconWallet stroke={1.5} />}
              style={width < 480 ? { width: '80%' } : undefined}
            >
              {address}
            </Button>
          </Tooltip>
        </Group>

        <Modal
          opened={opened}
          onClose={close}
          size="auto"
          radius="lg"
          centered
          withCloseButton={false}
        >
          <WalletProfile close={close} />
        </Modal>
      </>
    )
  }

  function connectWallet() {
    // connect wallet
    connect(
      { connector: injected(), chainId: base.id },
      {
        onSuccess: () => {
          // sign wallet address
          signMessage(
            { account: account.address, message: 'Verify Wallet' },
            {
              onSuccess: (signature) => {
                setEvmWallet({ signature })
              },
            }
          )
        },
      }
    )

    close()
  }

  return (
    <>
      <Tooltip
        label="Connect Wallet"
        withArrow
        position="bottom"
        transitionProps={{ transition: 'pop', duration: 300 }}
      >
        <Button radius="lg" onClick={connectWallet}>
          Connect Wallet
        </Button>
      </Tooltip>
    </>
  )
}
