'use client'

import {
  Button,
  Container,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
  Tooltip,
} from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import _ from 'lodash'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { GoogleButton } from '~/components/icon/google'
import WalletConnect from '~/components/layouts/header/partials/WalletConnect'
import VerifyPage from '~/components/verify-page'
import { firebaseAuth } from '~/config/firebase'
import { useStore } from '~/config/zustand'
import { LoginAttributes } from '~/data/entity/auth'
import useProfile from '~/data/query/useProfile'
import AuthRepository from '~/data/repository/auth'
import authSchema from '~/data/schema/auth'

export default function Login() {
  const router = useRouter()
  const [visible, setVisible] = useState(false)

  const { data, isLoading, isFetching } = useProfile()
  const setAuthSession = useStore((state) => state.setAuthSession)

  const form = useForm({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      latitude: null,
      longitude: null,

      // google provider
      provider: 'email',
      access_token: '',
      id_token: '',
    },
    validate: zodResolver(authSchema.login),
  })

  const postLogin = useMutation({
    mutationFn: (data: LoginAttributes) => AuthRepository.signIn(data),
  })

  function onFormSubmit(values: typeof form.values) {
    console.log(values)
  }

  async function signInWithGoogle() {
    setVisible(true)

    const provider = new GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')

    try {
      const result = await signInWithPopup(firebaseAuth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(result)

      const response = await postLogin.mutateAsync({
        fullname: String(result.user.displayName),
        email: String(result.user.email),
        password: '',
        provider: String(credential?.providerId),
        access_token: String(credential?.accessToken),
        id_token: String(credential?.idToken),
        latitude: null,
        longitude: null,
      })

      console.log({ result, credential })

      const message = _.get(response, 'data.message', '') as string
      const accessToken = _.get(response, 'data.access_token', {}) as string

      // save session
      setAuthSession({
        provider: String(credential?.providerId),
        access_token: accessToken,
        email: result.user.email,
        wallet_address: null,
      })

      // show notif
      showNotification({
        title: `Sign in with Google`,
        message,
        color: 'green',
        withCloseButton: false,
        icon: <IconCheck size={16} />,
      })

      router.push('/')
    } catch (error) {
      const errMessage = _.get(error, 'response.data.message', '')
      console.log(error, errMessage)

      showNotification({
        title: `Login failed`,
        message: errMessage,
        color: 'red',
        withCloseButton: true,
        icon: <IconX size={16} />,
      })
    } finally {
      setVisible(false)
    }
  }

  const fetchingData = isLoading || isFetching

  if (fetchingData) {
    return <VerifyPage loading={fetchingData} />
  }

  // @ts-expect-error
  if (!_.isEmpty(data) || !_.isNil(data?.email)) {
    router.push('/')
    return
  }

  return (
    <Container size={420} my={40} mt={100}>
      <Title ta="center" c={'#705C53'}>
        House of Wizard
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        To become a great wizard, login with your account first.
      </Text>

      <Paper shadow="lg" p={30} mt={30} radius="lg" withBorder>
        <Group grow>
          <GoogleButton radius="xl" onClick={() => signInWithGoogle()} loading={visible}>
            Google
          </GoogleButton>

          <WalletConnect />
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(onFormSubmit)}>
          <Stack gap={10}>
            <TextInput
              placeholder="hello@mantine.dev"
              radius="lg"
              {...form.getInputProps('email')}
            />

            <Tooltip
              label="Login with Email"
              withArrow
              position="bottom"
              radius="md"
              transitionProps={{ transition: 'pop', duration: 300 }}
            >
              <Button type="submit" disabled radius="xl">
                Login
              </Button>
            </Tooltip>
          </Stack>
        </form>
      </Paper>
    </Container>
  )
}
