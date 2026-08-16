import type { Metadata } from 'next'

import LoginForm from '@/components/block/auth/login-form'
import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'Sign In | House of Wizard',
}

export default function SignInPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-linear-to-br from-indigo-100 via-white to-purple-100 p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm title="House of Wizard" />
      </div>
    </div>
  )
}
