import { IconHome } from '@tabler/icons-react'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Button } from '~/components/ui/button'

type IProps = PropsWithChildren

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
