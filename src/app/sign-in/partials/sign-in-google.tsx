import { GoogleIcon } from '~/components/icon/google'
import { Button } from '~/components/ui/button'
import { signIn } from '~/lib/auth/handler'

type IProps = {
  callbackUrl: string | undefined
}

export default function SignInGoogle({ callbackUrl }: IProps) {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('google', { redirectTo: callbackUrl || '/webinar' })
      }}
      className="w-full"
    >
      <Button variant={'outline'} className="w-full h-10" radius={'lg'} type="submit">
        <GoogleIcon />
        <span className="font-medium font-serif tracking-wider">Google</span>
      </Button>
    </form>
  )
}
