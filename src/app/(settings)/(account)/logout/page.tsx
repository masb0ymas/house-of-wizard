'use client'

import { signOut } from 'next-auth/react'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { Button } from '~/components/ui/button'

export default function LogoutPage() {
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleSignOut = useCallback(async () => {
    setIsLoggingOut(true)
    toast.loading('Signing out...', { duration: 1000 })

    await signOut()

    setIsLoggingOut(false)
    toast.success('Signed out successfully')
    return (window.location.href = '/')
  }, [])

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 font-serif tracking-wide">Logout</h2>
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
    </div>
  )
}
