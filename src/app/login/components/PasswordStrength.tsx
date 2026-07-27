import type { PasswordStrength } from '../login.validation'

export function PasswordStrengthIndicator({
  strength,
}: {
  strength: PasswordStrength
}) {
  if (!strength) return null

  return <div>Password strength: {strength}</div>
}
