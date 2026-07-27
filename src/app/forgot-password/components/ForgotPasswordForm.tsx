'use client'

import * as Form from '@radix-ui/react-form'
import { useState } from 'react'

import { forgotPasswordSchema } from '../forgot-password.validation'

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const result = forgotPasswordSchema.safeParse({ email })
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        email: fieldErrors.email?.[0] ?? '',
      })
      return
    }
    setErrors({})
  }

  return (
    <Form.Root onSubmit={handleSubmit}>
      <div>LOGO</div>

      <h1>Forgot your password?</h1>
      <p>Enter your email address and we&apos;ll send you a reset link.</p>

      <Form.Field name="email">
        <Form.Label>Email</Form.Label>
        <Form.Control asChild>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Control>
        {errors.email && <Form.Message>{errors.email}</Form.Message>}
      </Form.Field>

      <Form.Submit asChild>
        <button type="submit">Send reset link</button>
      </Form.Submit>

      <a href="/login">Back to login</a>
    </Form.Root>
  )
}
