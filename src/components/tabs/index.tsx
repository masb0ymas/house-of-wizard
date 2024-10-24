'use client'

import { rem, Tabs } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { IconHome2 } from '@tabler/icons-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

interface TabListEntity {
  key: string
  title: string
  icon: typeof IconHome2
  children: React.ReactNode
}

interface IProps {
  baseURL: string
  defaultValue: string
  data: TabListEntity[]
}

export default function MyTabs(props: IProps) {
  const { baseURL, defaultValue, data } = props

  const router = useRouter()
  const searchParams = useSearchParams()
  const tabs = searchParams.get('tabs') as string

  const { width } = useViewportSize()
  const iconStyle = { width: rem(18), height: rem(18) }
  const mobile_device = width < 780

  return (
    <Tabs
      keepMounted={false}
      variant="pills"
      radius="md"
      orientation={mobile_device ? 'horizontal' : 'vertical'}
      value={tabs || defaultValue}
      onChange={(value) => router.push(`${baseURL}?tabs=${value}`)}
    >
      <Tabs.List
        w={!mobile_device ? 150 : undefined}
        grow={mobile_device ? true : false}
        pb={mobile_device ? 16 : undefined}
      >
        {data.map((item) => (
          <Tabs.Tab
            key={item.key}
            value={item.key}
            leftSection={<item.icon style={iconStyle} stroke={1.5} />}
          >
            {item.title}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {data.map((item) => (
        <Tabs.Panel value={item.key} pl={!mobile_device ? 20 : undefined} key={item.key}>
          {item.children}
        </Tabs.Panel>
      ))}
    </Tabs>
  )
}
