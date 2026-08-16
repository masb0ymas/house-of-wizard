import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Field, FieldDescription, FieldGroup, FieldSeparator } from '@/components/ui/field'
import { ASSETS } from '@/lib/constants/assets'
import { cn } from '@/lib/utils'

import { Icons } from '../common/icons'
import SignInEmailForm from './email-form'

interface LoginFormProps extends React.ComponentProps<'div'> {
  title: string
}

export default function LoginForm({ title, className, ...props }: LoginFormProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="overflow-hidden rounded-lg p-0 shadow-none">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="flex flex-col gap-6 p-6 md:p-8">
            <SignInEmailForm title={title} />

            <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
              Or continue with
            </FieldSeparator>

            <FieldGroup>
              <Field className="grid grid-cols-3 gap-4">
                <Button variant="outline" type="button">
                  <Icons.github className="size-4.5" />
                  <span className="sr-only">Login with Github</span>
                </Button>
                <Button variant="outline" type="button">
                  <Icons.googleColorful className="size-6" />
                  <span className="sr-only">Login with Google</span>
                </Button>
                <Button variant="outline" type="button">
                  <Icons.twitter className="size-4" />
                  <span className="sr-only">Login with Twitter</span>
                </Button>
              </Field>
              <FieldDescription className="text-center">
                Don&apos;t have an account? <a href="#">Sign up</a>
              </FieldDescription>
            </FieldGroup>
          </div>

          <div className="bg-muted relative hidden md:block">
            <img
              src={ASSETS.LOGIN_IMAGE}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <Link href="/terms">Terms of Service</Link> and{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  )
}
