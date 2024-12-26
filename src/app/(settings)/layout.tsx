import { redirect } from 'next/navigation'
import React, { PropsWithChildren } from 'react'
import Layout from '~/components/layout'
import { Separator } from '~/components/ui/separator'
import { auth } from '~/lib/auth/handler'
import { menus } from './partials/nav-menu'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem } from './partials/sidebar'

type IProps = PropsWithChildren

export default async function SettingLayout({ children }: IProps) {
  const session = await auth()

  const baseUrl = '/settings'

  if (!session?.user) {
    redirect(`/sign-in?callbackUrl=${encodeURIComponent(baseUrl)}`)
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-36 pb-24">
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
                            return (
                              <SidebarMenuItem
                                key={item.href}
                                href={item.href}
                                icon={item.icon}
                                text={item.name}
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

            <div className="w-full flex-1 max-lg:space-y-6">{children}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
