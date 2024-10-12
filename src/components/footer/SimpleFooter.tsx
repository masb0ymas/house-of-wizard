"use client"

import { ActionIcon, Anchor, Container, Group, rem } from "@mantine/core"
import { IconBrandGithub, IconBrandTelegram, IconBrandTwitter } from "@tabler/icons-react"
import Link from "next/link"
import Brand from "../brand"
import classes from "./partials/simpleFooter.module.css"

const links = [
  { link: "#", label: "Blog" },
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Term Conditions" },
]

export default function SimpleFooter() {
  const listIcons = [
    {
      name: "Github",
      link: "https://github.com/masb0ymas",
      icon: IconBrandGithub,
    },
    {
      name: "Twitter",
      link: "https://x.com/pitilanKorek",
      icon: IconBrandTwitter,
    },
    {
      name: "Telegram",
      link: "https://t.me/+qbdfWdi3uYM0ODc1",
      icon: IconBrandTelegram,
    },
  ]

  const items = links.map((link) => (
    <Anchor c="dimmed" component={Link} key={link.label} href={link.link} lh={1} size="sm">
      {link.label}
    </Anchor>
  ))

  return (
    <div className={classes.footer}>
      <Container size="lg">
        <div className={classes.inner}>
          <Brand />

          <Group className={classes.links}>{items}</Group>

          <Group gap="xs" justify="flex-end" wrap="nowrap">
            {listIcons.map((item) => (
              <ActionIcon
                size="lg"
                variant="subtle"
                c={"#705C53"}
                radius="xl"
                key={item.name}
                component={Link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon style={{ width: rem(18), height: rem(18) }} stroke={2} />
              </ActionIcon>
            ))}
          </Group>
        </div>
      </Container>
    </div>
  )
}
