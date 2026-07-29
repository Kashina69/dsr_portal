/** Types local to the forgot-password module. */

import type { z } from "zod";

import type { forgotPasswordSchema } from "./forgot-password.validation";

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
