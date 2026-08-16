'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Field, FieldGroup } from '@/components/ui/field'
import { useAppForm } from '@/hooks/form'
import { SignInSchema } from '@/lib/api/dtos/auth/schema'
import { signInWithEmail } from '@/lib/auth/email-auth'

interface SignInEmailFormProps {
  title: string
}

export default function SignInEmailForm({ title }: SignInEmailFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const form = useAppForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onSubmit: SignInSchema,
      onChange: SignInSchema,
    },
    onSubmit: async ({ value }) => {
      setLoading(true)

      try {
        await signInWithEmail(value)
        router.push('/webinar')
      } catch (error) {
        const message = error instanceof Error ? error.message : 'An error occurred'
        toast.error(message)
      } finally {
        setLoading(false)
        form.reset()
      }
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="font-serif text-2xl font-bold">{title}</h1>
          <p className="text-muted-foreground text-balance">Login to your account</p>
        </div>

        <form.AppField
          name="email"
          children={(field) => <field.TextField label="Email" placeholder="type your email" />}
        />

        <form.AppField
          name="password"
          children={(field) => (
            <field.PasswordField label="Password" placeholder="type your password" />
          )}
        />

        <Field>
          <Button type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Login'}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
