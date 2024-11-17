import { z } from 'zod'

const create = z.object({
  webinar_id: z
    .string({
      required_error: 'webinar_id is required',
      invalid_type_error: 'webinar_id must be a string',
    })
    .uuid({ message: 'webinar_id invalid uuid format' })
    .min(2, `webinar_id can't be empty`),

  fullname: z
    .string({
      required_error: 'fullname is required',
      invalid_type_error: 'fullname must be a string',
    })
    .min(2, `fullname can't be empty`),

  check_in: z.date({
    required_error: 'check_in is required',
    invalid_type_error: 'check_in must be a date',
  }),

  wallet_address: z
    .string({
      required_error: 'wallet_address is required',
      invalid_type_error: 'wallet_address must be a string',
    })
    .nullable(),

  metadata: z
    .any({
      required_error: 'metadata is required',
      invalid_type_error: 'metadata must be a any',
    })
    .nullable(),
})

const webinarAttendanceSchema = { create, update: create }

export default webinarAttendanceSchema
