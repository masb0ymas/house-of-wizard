import { z } from 'zod'

const login = z.object({
  email: z
    .string({
      required_error: 'email is required',
      invalid_type_error: 'email must be a string',
    })
    .email({ message: 'email invalid email format' })
    .min(2, `email can't be empty`),
})

const authSchema = { login }
export default authSchema