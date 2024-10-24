'use client'

import { Anchor, Box, Collapse, Group, rem, UnstyledButton } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import _ from 'lodash'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import classes from './linkGroup.module.css'

interface LinksGroupProps {
  label: string
  initiallyOpened?: boolean
  links?: { label: string; link: string }[]
}

export function LinksGroup({ label, initiallyOpened, links }: LinksGroupProps) {
  const pathname = usePathname()

  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)

  const items = (hasLinks ? links : []).map((item) => {
    const link_active = item.link === pathname
    const matchPath = pathname.match(String(item.link))
    const is_active = !_.isEmpty(matchPath) && link_active

    return (
      <Anchor
        component={Link}
        className={classes.link}
        href={item.link}
        key={item.label}
        data-active={is_active || undefined}
      >
        {item.label}
      </Anchor>
    )
  })

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Box>{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}
