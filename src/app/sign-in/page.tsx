import { Metadata } from 'next'
import { BorderBeam } from '~/components/ui/border-beam'
import { auth } from '~/lib/auth'
import SignInForm from './partials/sign-in-form'
import SignInGoogle from './partials/sign-in-google'
import SignInWeb3 from './partials/sign-in-web3'
import { redirect } from 'next/navigation'
import SparklesText from '~/components/ui/sparkles-text'

export const metadata: Metadata = {
  title: 'Sign In - House of Wizard',
  description: 'Sign In House of Wizard',
  robots: {
    index: false,
    follow: false,
  },
}

export default async function SignInPage() {
  const session = await auth()

  if (session?.user) {
    // redirect("/");
  }

  return (
    <div className="w-full max-w-md">
      <div className="relative rounded-xl">
        <BorderBeam borderWidth={2} />

        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold font-serif text-gray-900">House of Wizard</h1>
            <h3 className="mt-2 text-gray-500">
              To become a great wizard, you need to login with your account first.
            </h3>
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-row gap-2">
            <SignInGoogle />

            <SignInWeb3 />
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500 font-serif">Or continue with</span>
            </div>
          </div>

          <SignInForm />
        </div>
      </div>
    </div>
  )
}
