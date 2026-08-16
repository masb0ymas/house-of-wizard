'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldContent, FieldLabel, FieldTitle } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export function SecurityContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif text-xl tracking-wide">Change Password</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <Field orientation="vertical">
            <FieldLabel>
              <FieldTitle>Current Password</FieldTitle>
            </FieldLabel>
            <FieldContent>
              <Input type="password" placeholder="Enter current password" />
            </FieldContent>
          </Field>

          <Field orientation="vertical">
            <FieldLabel>
              <FieldTitle>New Password</FieldTitle>
            </FieldLabel>
            <FieldContent>
              <Input type="password" placeholder="Enter new password" />
            </FieldContent>
          </Field>

          <Field orientation="vertical">
            <FieldLabel>
              <FieldTitle>Confirm New Password</FieldTitle>
            </FieldLabel>
            <FieldContent>
              <Input type="password" placeholder="Confirm new password" />
            </FieldContent>
          </Field>

          <div className="flex justify-end">
            <Button variant="primary" className="font-serif font-semibold tracking-wide">
              Update Password
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
