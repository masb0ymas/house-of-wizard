import { GoogleIcon } from '~/components/icon/google'
import { Button } from '~/components/ui/button'
import { signIn } from '~/lib/auth'

export default function SignInGoogle() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('google', { redirectTo: '/webinar' })
      }}
      className="w-full"
    >
      <Button variant={'outline'} className="w-full" radius={'lg'} type="submit">
        <GoogleIcon />
        <span className="font-medium font-serif">Google</span>
      </Button>
    </form>
  )
}
