'use client'

import { IconArrowRight, IconMail } from '@tabler/icons-react'
import { useSession } from 'next-auth/react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { RainbowButton } from '~/components/ui/rainbow-button'
import toast from 'react-hot-toast'
import { getSplitName } from '~/lib/string'
import { createTransaction } from '../action'

type IProps = {
  id: string
}

export default function Checkout({ id }: IProps) {
  const { data: session } = useSession()
  const { firstName, lastName } = getSplitName(session?.user?.name || '')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: firstName || '',
      last_name: lastName || '',
      email: session?.user?.email || '',
      webinar_private_plan_id: id,
    },
    mode: 'onSubmit',
  })

  const onSubmit = useCallback(async (values: any) => {
    const { data: trx, message, isError } = await createTransaction(values)

    if (isError) {
      toast.error(`Failed to create transaction, error: ${message}`, {
        duration: 5000,
      })
      return
    }

    toast.success(message, {
      duration: 5000,
    })

    return window.open(`/webinar/batch/payment/${trx.trx_id}`, '_self')
  }, [])

  return (
    <section
      id="checkout"
      className="max-w-2xl mx-auto bg-white border-purple-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-8"
    >
      <h2 className="text-2xl font-bold font-serif tracking-wide mb-6">Complete Your Enrollment</h2>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-serif tracking-wide">First Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-900/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your first name"
              {...register('first_name')}
              required
            />
            {errors.first_name && (
              <span className="text-red-500">{errors.first_name?.message}</span>
            )}
          </div>

          <div>
            <label className="block mb-2 font-serif tracking-wide">Last Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-900/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your last name"
              {...register('last_name')}
              required
            />
            {errors.last_name && <span className="text-red-500">{errors.last_name?.message}</span>}
          </div>
        </div>

        <div>
          <label className="block mb-2 font-serif tracking-wide">Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <IconMail className="h-5 w-5 text-gray-400" stroke={1.5} />
            </div>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-900/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your email"
              {...register('email')}
              required
            />
          </div>
          {errors.email && <span className="text-red-500">{errors.email?.message}</span>}
        </div>

        <RainbowButton type="submit" className="w-full gap-2">
          <span className="font-serif font-semibold tracking-wider">Complete Enrollment</span>
          <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </RainbowButton>
      </form>
    </section>
  )
}
