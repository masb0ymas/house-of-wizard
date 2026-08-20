'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Field } from '@/components/ui/field'
import { signInWithGoogle } from '@/lib/auth/email-auth'

import { Icons } from '../common/icons'

export default function SignInWithGoogle() {
  const handleSignInWithGoogle = async () => {
    try {
      const url = await signInWithGoogle()
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred'
      toast.error(message)
    }
  }

  return (
    <Field className="w-full">
      <Button
        variant="outline"
        type="button"
        className="w-full h-10 text-base"
        onClick={handleSignInWithGoogle}
      >
        <Icons.googleColorful className="size-6" />
        <span>Login with Google</span>
      </Button>
    </Field>
  )
}
