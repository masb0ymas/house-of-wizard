import { Container } from '@mantine/core'
import React, { PropsWithChildren } from 'react'
import Layout from '~/components/layouts'

type IProps = PropsWithChildren

export default function WebinarLayout({ children }: IProps) {
  return (
    <Layout>
      <Container size="lg" my={100}>
        {children}
      </Container>
    </Layout>
  )
}
