'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Mail } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import authSchema from '~/data/schema/auth'

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authSchema.login),
    mode: 'onSubmit',
  })

  return (
    <>
      {/* Email Form */}
      <form onSubmit={handleSubmit((data) => console.log(data))} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>

          <div className="mt-1 relative">
            <Input id="email" type="email" placeholder="Enter your email" {...register('email')} />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message?.toString()}</span>
          )}
        </div>

        <Button
          variant={'secondary'}
          className="w-full font-medium font-serif"
          radius={'lg'}
          type="submit"
        >
          Continue with Email
        </Button>
      </form>

      {/* Terms */}
      <p className="text-center text-sm text-gray-500">
        By continuing, you agree to our{' '}
        <Link href="/term-of-service" className="font-medium text-indigo-600 hover:text-indigo-500">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="/privacy-policy" className="font-medium text-indigo-600 hover:text-indigo-500">
          Privacy Policy
        </Link>
      </p>
    </>
  )
}
