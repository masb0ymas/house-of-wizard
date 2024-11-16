'use client'

import { Button, Divider, Group, Stack, Text } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { IconAlertCircle, IconReload } from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosRequestConfig } from 'axios'
import { subMinutes } from 'date-fns'
import { is } from 'date-fns/locale'
import _ from 'lodash'
import Link from 'next/link'
import { useState } from 'react'
import { type BaseError } from 'viem'
import { base } from 'viem/chains'
import {
  useAccount,
  useChainId,
  useEnsName,
  useReadContract,
  useVerifyMessage,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'
import { z } from 'zod'
import { getContractByChain } from '~/artifact/contract/attendance'
import classes from '~/components/description/description.module.css'
import { env } from '~/config/env'
import { useStore } from '~/config/zustand'
import useProfile from '~/data/query/useProfile'
import useWebinarAttendanceByUser from '~/data/query/webinar-attendance/useWebinarAttendanceByUser'
import useWebinarLatest from '~/data/query/webinar/useWebinarLatest'
import WebinarAttendanceRepository from '~/data/repository/webinar-attendance'
import webinarAttendanceSchema from '~/data/schema/webinar_attendance'
import { dateToUnixtime } from '~/lib/date'
import { validate } from '~/lib/validate'
import { queryClient } from '~/lib/WrapperReactQuery'

export default function Attendance() {
  const account = useAccount()
  const ens = useEnsName({ address: account.address })

  const { evm_wallet } = useStore()

  const { auth } = useStore()
  const isWeb3 = auth?.provider === 'evm'

  const queryProfile = useProfile()

  const { data: hash, error, isPending, writeContract } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  const chainId = useChainId() || base.id
  const attendanceContract = getContractByChain(chainId)

  const { data } = useWebinarLatest(chainId)
  const queryAttendance = useWebinarAttendanceByUser()

  const isVerified = useVerifyMessage({
    address: account.address,
    message: 'Verify Wallet',
    signature: evm_wallet?.signature,
  })

  const mutation = useMutation({
    // @ts-expect-error
    mutationFn: async (values: z.infer<typeof webinarAttendanceSchema>) => {
      const access_token = _.get(auth, 'access_token', '')
      const options: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${access_token}` },
      }

      return await WebinarAttendanceRepository.markAttendance(values, options)
    },
    onSuccess: (data) => {
      showNotification({
        title: 'Mark Attendance',
        message: data.message,
        color: 'cyan',
        icon: <IconAlertCircle size={18} stroke={1.5} />,
      })
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['webinar-latest', 'webinar-attendance-by-user'] })
    },
  })

  async function markAttendanceWeb2() {
    let title = 'Something went wrong!'
    let message = 'Please check your endpoint API.'

    if (_.isNil(data?.id)) {
      showNotification({
        title: title,
        message: message,
        color: 'red',
        icon: <IconAlertCircle size={18} stroke={1.5} />,
      })
    }

    const formData = {
      webinar_id: data?.id,
      fullname: queryProfile.data?.fullname,
      check_in: new Date(),
      wallet_address: validate.empty(queryProfile?.data?.wallet_address),
      metadata: {
        title: data?.title,
        description: data?.description,
        speakers: data?.speakers,
        date: data?.start_date,
        webinar_url: data?.webinar_url,
      },
    }

    try {
      await mutation.mutateAsync(formData)
    } catch (error: any) {
      console.log(error)

      if (error.response?.data?.message) {
        title = error.response.data.error
        message = error.response.data.message
      }

      showNotification({
        title: title,
        message: message,
        color: 'red',
        icon: <IconAlertCircle size={18} stroke={1.5} />,
      })
    }
  }

  function markAttendanceWeb3() {
    console.log(ens.data, account.address)

    let title = 'Something went wrong!'
    let message = 'Please check your endpoint API.'

    if (_.isNil(data?.id)) {
      showNotification({
        title: title,
        message: message,
        color: 'red',
        icon: <IconAlertCircle size={18} stroke={1.5} />,
      })
    }

    if (!isVerified) {
      title = `Something went wrong!`
      message = `Signature doesn't match, please re-connect your wallet.`

      showNotification({
        title: title,
        message: message,
        color: 'red',
        icon: <IconAlertCircle size={18} stroke={1.5} />,
      })
    }

    const epochTime = data?.start_date && dateToUnixtime(data?.start_date)
    const ipfs_cid = data?.ipfs_cid

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
        webinar_url: data?.webinar_url,
      },
    }

    try {
      writeContract(
        {
          abi: attendanceContract.abi,
          address: attendanceContract.address,
          functionName: 'markAttendance',
          args: [epochTime, true, ipfs_cid],
        },
        {
          onSuccess: async () => await mutation.mutateAsync(formData),
          onError(error, _variables, _context) {
            if (error instanceof Error) {
              title = 'Problem write to contract'
              message = error.message
            }

            showNotification({
              title: title,
              message: message,
              color: 'red',
              icon: <IconAlertCircle size={18} stroke={1.5} />,
            })
          },
        }
      )
    } catch (error: any) {
      console.log(error)

      if (error.response?.data?.message) {
        title = error.response.data.error
        message = error.response.data.message
      }

      showNotification({
        title: title,
        message: message,
        color: 'red',
        icon: <IconAlertCircle size={18} stroke={1.5} />,
      })
    }
  }

  const start_date = data?.start_date && dateToUnixtime(data?.start_date)

  const result = useReadContract({
    abi: attendanceContract.abi,
    address: attendanceContract.address,
    functionName: 'getAttendance',
    args: [account.address, start_date],
  })

  function checkingButton() {
    return (
      <Button size="lg" radius="lg" variant="subtle" disabled>
        Checking...
      </Button>
    )
  }

  function buttonActionWeb2() {
    const sub_30_minutes = subMinutes(new Date(String(data?.start_date)), 30)
    const is_open_attendance = new Date() > sub_30_minutes
    const is_close_attendance = new Date() > new Date(String(data?.end_date))

    const check_attendance = queryAttendance.isLoading || queryAttendance.isFetching
    const is_attendance = !check_attendance && !_.isEmpty(queryAttendance.data?.id)
    const is_not_attendance = !check_attendance && _.isEmpty(queryAttendance.data?.id)

    console.log({
      is_open_attendance,
      is_close_attendance,
      check_attendance,
      is_attendance,
      is_not_attendance,
    })

    if (check_attendance) {
      return checkingButton()
    }

    if (is_attendance && !is_close_attendance) {
      return (
        <Button size="lg" radius="lg" variant="subtle" disabled>
          You are Attendance
        </Button>
      )
    }

    if (is_not_attendance && is_open_attendance && !is_close_attendance) {
      return (
        <>
          <Button size="lg" radius="lg" onClick={markAttendanceWeb2} disabled={mutation.isPending}>
            {mutation.isPending ? 'Confirming...' : 'Attendance'}
          </Button>

          {mutation.isSuccess && (
            <Button
              onClick={() => queryAttendance.refetch()}
              leftSection={<IconReload />}
              radius="lg"
              size="md"
            >
              Refresh
            </Button>
          )}
        </>
      )
    }

    return null
  }

  function buttonActionWeb3() {
    // @ts-expect-error
    const is_attendance = result.data && validate.boolean(result.data[0])

    // @ts-expect-error
    const is_not_attendance = result.data && validate.boolean(result.data[0]) === false

    const sub_30_minutes = subMinutes(new Date(String(data?.start_date)), 30)
    const is_open_attendance = new Date() > sub_30_minutes
    const is_close_attendance = new Date() > new Date(String(data?.end_date))

    if (account.isConnected) {
      if (result.isLoading || result.isFetching) {
        return checkingButton()
      }

      if (is_attendance && !is_close_attendance) {
        return (
          <Button size="lg" radius="lg" variant="subtle" disabled>
            You are Attendance
          </Button>
        )
      }

      if (is_not_attendance && is_open_attendance && !is_close_attendance) {
        return (
          <>
            <Button
              size="lg"
              radius="lg"
              onClick={markAttendanceWeb3}
              disabled={isPending || isConfirming}
            >
              {isPending || isConfirming ? 'Confirming...' : 'Attendance'}
            </Button>

            <Stack gap={10} mt={16} align="center">
              {hash && (
                <>
                  <Group justify="space-between">
                    <Text className={classes.modal_label} size="lg">
                      Trx Hash:
                    </Text>

                    <Link
                      href={`${attendanceContract.explorer}/tx/${hash}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text size="lg">{hash}</Text>
                    </Link>
                  </Group>
                  <Divider variant="dashed" />
                </>
              )}

              {isConfirming && <Text size="lg">Waiting for confirmation...</Text>}
              {isConfirmed && <Text size="lg">Transaction confirmed.</Text>}
              {error && (
                <>
                  <Group justify="space-between">
                    <Text className={classes.modal_label} size="lg">
                      Error:
                    </Text>
                    <Text size="lg">{(error as BaseError).shortMessage || error.message}</Text>
                  </Group>
                  <Divider variant="dashed" />
                </>
              )}

              {isConfirmed && (
                <Button
                  onClick={() => result.refetch()}
                  leftSection={<IconReload />}
                  radius="lg"
                  size="md"
                >
                  Refresh
                </Button>
              )}
            </Stack>
          </>
        )
      }
    }

    return null
  }

  return isWeb3 ? buttonActionWeb3() : buttonActionWeb2()
}
