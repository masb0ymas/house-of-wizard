'use client'

import { IconHome } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { PropsWithChildren } from 'react'
import { Button } from '~/components/ui/button'
import { Separator } from '~/components/ui/separator'
import { menus } from './nav-menu'

type IProps = PropsWithChildren

export function Sidebar({ children }: IProps) {
  const pathname = usePathname()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex gap-12">
        <div className="w-[13.75rem] max-lg:hidden">
          <nav className="isolate space-y-4 divide-y">
            <SidebarGroup>
              {menus.map((menu, index) => {
                return (
                  <React.Fragment key={menu.group}>
                    <SidebarMenu key={menu.group}>
                      <SidebarGroupLabel>{menu.group}</SidebarGroupLabel>
                      {menu.items.map((item) => {
                        const isActive = pathname.startsWith(item.href)
                        return (
                          <SidebarMenuItem
                            key={item.href}
                            href={item.href}
                            icon={item.icon}
                            text={item.name}
                            active={isActive}
                          />
                        )
                      })}
                    </SidebarMenu>

                    {index !== menus.length - 1 && <Separator className="my-4" />}
                  </React.Fragment>
                )
              })}
            </SidebarGroup>
          </nav>
        </div>

        <div className="w-full flex-1 max-lg:space-y-6 mt-3.5">{children}</div>
      </div>
    </div>
  )
}

export function SidebarGroup({ children }: IProps) {
  return <section className="pt-6 first:pt-0">{children}</section>
}

export function SidebarGroupLabel({ children }: IProps) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
      {children}
    </div>
  )
}

export function SidebarMenu({ children }: IProps) {
  return <div className="mt-3.5 space-y-1">{children}</div>
}

type SidebarMenuItemProps = {
  href: string
  icon: typeof IconHome
  text: string
  active?: boolean
}

export function SidebarMenuItem(props: SidebarMenuItemProps) {
  const isActive = props.active || false

  return (
    <Button variant="ghost" className="w-full justify-start" asChild>
      <Link
        href={props.href}
        className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-200/80 aria-[current=page]:bg-gray-300 aria-[current=page]:text-gray-900 hover:text-gray-900"
        aria-current={isActive ? 'page' : undefined}
      >
        <props.icon className="h-5 w-5" />
        {props.text}
      </Link>
    </Button>
  )
}
