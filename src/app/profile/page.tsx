'use client'

import { signOut } from 'next-auth/react'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { Button } from '~/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'

export default function ProfilePage() {
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleSignOut = useCallback(async () => {
    setIsLoggingOut(true)
    toast.loading('Signing out...', { duration: 1000 })

    await signOut()

    setIsLoggingOut(false)
    toast.success('Signed out successfully')
    return (window.location.href = '/')
  }, [])

  const tabs = [
    {
      label: 'Account',
      value: 'account',
      children: (
        <>
          <h2 className="text-2xl font-bold mb-4 font-serif tracking-wider">Account</h2>
          <p>Manage your account settings and preferences here.</p>
        </>
      ),
    },
    {
      label: 'Password',
      value: 'password',
      children: (
        <>
          <h2 className="text-2xl font-bold mb-4 font-serif tracking-wider">Password</h2>
          <p>Change your password and manage security settings.</p>
        </>
      ),
    },
    {
      label: 'Transaction',
      value: 'transaction',
      children: (
        <>
          <h2 className="text-2xl font-bold mb-4 font-serif tracking-wider">Transaction</h2>
          <p>Manage your transaction history and details here.</p>
        </>
      ),
    },
    {
      label: 'Settings',
      value: 'settings',
      children: (
        <>
          <h2 className="text-2xl font-bold mb-4 font-serif tracking-wider">Settings</h2>
          <p>Customize your application settings and preferences.</p>
        </>
      ),
    },
    {
      label: 'Logout',
      value: 'logout',
      children: (
        <>
          <h2 className="text-2xl font-bold mb-4 font-serif tracking-wider">Logout</h2>
          <p>Are you sure you want to log out?</p>
          <Button
            variant={'destructive'}
            radius={'xl'}
            className="mt-4"
            onClick={handleSignOut}
            disabled={isLoggingOut}
          >
            {isLoggingOut ? 'Logging out...' : 'Logout'}
          </Button>
        </>
      ),
    },
  ]

  return (
    <section className="max-w-7xl px-4 sm:px-6 lg:px-8">
      <Tabs defaultValue="account" orientation="vertical" className="w-full rounded-xl">
        <div className="flex w-[320px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
          <TabsList className="flex-col h-auto justify-start p-2 bg-transparent gap-4">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="justify-start">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-1 ml-4">
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                {tab.children}
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </section>
  )
}
