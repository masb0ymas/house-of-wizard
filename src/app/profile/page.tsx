'use client'

import { signOut } from 'next-auth/react'
import { useCallback } from 'react'
import { Button } from '~/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'

export default function ProfilePage() {
  const handleSignOut = useCallback(async () => {
    await signOut()
    window.location.href = '/'
  }, [])

  return (
    <section className="max-w-7xl px-4 sm:px-6 lg:px-8">
      <Tabs defaultValue="account" orientation="vertical" className="w-full rounded-xl">
        <div className="flex w-[320px] md:w-[768px] lg:w-[1024px]">
          <TabsList className="flex-col h-auto justify-start p-2 bg-transparent gap-4">
            <TabsTrigger value="account" className="justify-start">
              Account
            </TabsTrigger>
            <TabsTrigger value="password" className="justify-start">
              Password
            </TabsTrigger>
            <TabsTrigger value="settings" className="justify-start">
              Settings
            </TabsTrigger>
            <TabsTrigger value="logout" className="justify-start">
              Logout
            </TabsTrigger>
          </TabsList>
          <div className="flex-1 ml-4">
            <TabsContent value="account">
              <h2 className="text-2xl font-bold mb-4">Account</h2>
              <p>Manage your account settings and preferences here.</p>
            </TabsContent>
            <TabsContent value="password">
              <h2 className="text-2xl font-bold mb-4">Password</h2>
              <p>Change your password and manage security settings.</p>
            </TabsContent>
            <TabsContent value="settings">
              <h2 className="text-2xl font-bold mb-4">Settings</h2>
              <p>Customize your application settings and preferences.</p>
            </TabsContent>
            <TabsContent value="logout">
              <h2 className="text-2xl font-bold mb-4">Logout</h2>
              <p>Are you sure you want to log out?</p>
              <Button
                variant={'destructive'}
                radius={'xl'}
                className="mt-4"
                onClick={handleSignOut}
              >
                Logout
              </Button>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  )
}
