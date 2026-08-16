'use client'

import type { Models } from '@/lib/api/models'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldContent, FieldLabel, FieldTitle } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'

interface GeneralContentProps {
  user: Models.User | null
  loading: boolean
}

export function GeneralContent({ user, loading }: GeneralContentProps) {
  if (loading) {
    return <GeneralContentSkeleton />
  }

  if (!user) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-gray-500">
          Unable to load profile data.
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif text-xl tracking-wide">General Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <Field orientation="vertical">
            <FieldLabel>
              <FieldTitle>Full Name</FieldTitle>
            </FieldLabel>
            <FieldContent>
              <Input defaultValue={user.fullname} placeholder="Your full name" />
            </FieldContent>
          </Field>

          <Field orientation="vertical">
            <FieldLabel>
              <FieldTitle>Email</FieldTitle>
            </FieldLabel>
            <FieldContent>
              <Input defaultValue={user.email} disabled />
            </FieldContent>
          </Field>

          <Field orientation="vertical">
            <FieldLabel>
              <FieldTitle>Phone</FieldTitle>
            </FieldLabel>
            <FieldContent>
              <Input defaultValue={user.phone ?? ''} placeholder="Your phone number" />
            </FieldContent>
          </Field>

          <Field orientation="vertical">
            <FieldLabel>
              <FieldTitle>Address</FieldTitle>
            </FieldLabel>
            <FieldContent>
              <Input defaultValue={user.address ?? ''} placeholder="Your address" />
            </FieldContent>
          </Field>

          <div className="flex justify-end">
            <Button variant="primary" className="font-serif font-semibold tracking-wide">
              Save Changes
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function GeneralContentSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-7 w-48" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
          <div className="flex justify-end">
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
