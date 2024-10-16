"use client"

import { ActionIcon, Anchor, Container, Group, rem, Text } from "@mantine/core"
import {
  IconBrandGithub,
  IconBrandTelegram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react"
import Link from "next/link"
import Brand from "~/components/brand"
import classes from "./partials/footer.module.css"

const links = [
  { link: "#", label: "Blog" },
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Term Conditions" },
]

export default function Footer() {
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
      name: "Youtube",
      link: "https://www.youtube.com/@gulalijawa5870",
      icon: IconBrandYoutube,
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

  const dateNow = new Date()
  const year = dateNow.getFullYear()

  return (
    <div className={classes.footer}>
      <Container size="lg">
        <div className={classes.inner}>
          <Text component="span" size="sm">
            &copy; {year} -{" "}
            <Text component="span" size="sm" fw={600}>
              House of Wizard.
            </Text>{" "}
            All rights reserved.
          </Text>

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
