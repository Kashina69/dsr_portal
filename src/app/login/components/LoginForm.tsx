'use client'

import { useState } from 'react'
import * as Form from '@radix-ui/react-form'
import { loginSchema, getPasswordStrength } from '../login.validation'
import { PasswordStrengthIndicator } from './PasswordStrength'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const strength = getPasswordStrength(password)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const result = loginSchema.safeParse({ email, password })
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        email: fieldErrors.email?.[0] ?? '',
        password: fieldErrors.password?.[0] ?? '',
      })
      return
    }
    setErrors({})
  }

  return (
    <Form.Root onSubmit={handleSubmit}>
      <div>LOGO</div>

      <h1>Login to your account</h1>
      <p>Enter your email address and password to access the panel.</p>

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

      <Form.Field name="password">
        <Form.Label>Password</Form.Label>
        <Form.Control asChild>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Control>
        {errors.password && <Form.Message>{errors.password}</Form.Message>}
      </Form.Field>

      <PasswordStrengthIndicator strength={strength} />

      <a href="#">Forgot password?</a>

      <Form.Submit asChild>
        <button type="submit">Login</button>
      </Form.Submit>
    </Form.Root>
  )
}
