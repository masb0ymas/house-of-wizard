"use client"

import { Burger, Center, Container, Group, Menu, Paper } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"
import Link from "next/link"
import Brand from "../brand"
import { LinksGroup } from "./partials/LinkGroup"
import classes from "./partials/simpleHeader.module.css"
import WalletConnect from "./partials/WalletConnect"

const links = [
  { link: "/", label: "Webinar" },
  { link: "/", label: "Course" },
  { link: "/about", label: "About" },
  {
    link: "#2",
    label: "Support",
    links: [
      { link: "/faq", label: "FAQ" },
      { link: "/forums", label: "Forums" },
      { link: "/term-of-condition", label: "Term of Condition" },
      { link: "/policy-privacy", label: "Policy & Privacy" },
    ],
  },
]

export default function SimpleHeader() {
  const [opened, { toggle }] = useDisclosure(false)

  const desktopNavItems = links.map((link) => {
    const menuItems = link.links?.map((item) => <Menu.Item key={item.link}>{item.label}</Menu.Item>)

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Link>
    )
  })

  const mobileNavItems = links.map((item) => <LinksGroup {...item} key={item.label} />)

  return (
    <header className={classes.header}>
      <Container size="lg">
        <div className={classes.inner}>
          <Brand />
          <Group gap={5} visibleFrom="sm">
            {desktopNavItems}

            <WalletConnect />
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>

        {/* mobile version */}
        {opened && (
          <Paper shadow="lg" className={classes.mobile_link}>
            {mobileNavItems}

            <WalletConnect />
          </Paper>
        )}
      </Container>
    </header>
  )
}
