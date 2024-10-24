'use client'

import { Anchor, Burger, Center, Container, Group, Menu, Paper } from '@mantine/core'
import { useDisclosure, useViewportSize } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import _ from 'lodash'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Brand from '~/components/brand'
import classes from './partials/header.module.css'
import { LinksGroup } from './partials/LinkGroup'
import WalletConnect from './partials/WalletConnect'

const links = [
  { link: '/webinar', label: 'Webinar' },
  { link: '/course', label: 'Course' },
  { link: '/about', label: 'About' },
  {
    link: '#2',
    label: 'Support',
    links: [
      { link: '/faq', label: 'FAQ' },
      { link: '/forums', label: 'Forums' },
      { link: '/term-of-condition', label: 'Term of Condition' },
      { link: '/policy-privacy', label: 'Policy & Privacy' },
    ],
  },
]

export default function Header() {
  const pathname = usePathname()

  const { width } = useViewportSize()
  const [opened, { toggle }] = useDisclosure(false)

  const desktopNavItems = links.map((item) => {
    const link_active = item.link === pathname
    const matchPath = pathname.match(String(item.link))
    const is_active = !_.isEmpty(matchPath) && link_active

    console.log({ matchPath, is_active })

    const menuItems = item.links?.map((sub_item) => {
      const sub_link_active = item.links?.find((x) => x.link === pathname)
      const matchPath = pathname.match(String(item.link))
      const is_active_sub = !_.isEmpty(matchPath) && sub_link_active

      return (
        <Menu.Item
          key={sub_item.link}
          data-active={is_active_sub || undefined}
          color={is_active_sub ? 'blue' : undefined}
        >
          {sub_item.label}
        </Menu.Item>
      )
    })

    if (menuItems) {
      return (
        <Menu key={item.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link href={item.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{item.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <Anchor
        component={Link}
        key={item.label}
        href={item.link}
        className={classes.link}
        data-active={is_active || undefined}
      >
        {item.label}
      </Anchor>
    )
  })

  const mobileNavItems = links.map((item) => <LinksGroup {...item} key={item.label} />)

  return (
    <header className={classes.header}>
      <Container size="lg">
        <div className={classes.inner}>
          <Anchor component={Link} href="/">
            <Brand />
          </Anchor>
          <Group gap={5} visibleFrom="sm">
            {desktopNavItems}

            <WalletConnect />
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>

        {/* mobile version */}
        {width < 780 && opened && (
          <Paper shadow="lg" className={classes.mobile_link}>
            {mobileNavItems}

            <WalletConnect />
          </Paper>
        )}
      </Container>
    </header>
  )
}
