import { z } from 'zod'

const ContactSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .min(2, { message: 'First name must be at least 2 letters.' })
    .max(20, { message: 'First name should be maximum 20 letters' })
    .regex(/^[a-zA-Z]+$/, 'First name must contain only letters'),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .min(2, { message: 'Last name must be at least 2 letters.' })
    .max(20, { message: 'Last name should be maximum 20 letters' })
    .regex(/^[a-zA-Z]+$/, 'Last name must contain only letters'),
  email: z
    .string({ required_error: 'Email is required' })
    .min(5, { message: 'Email must be at least 5 characters long' })
    .max(50, { message: 'Email should be maximum 50 characters' })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: 'Email is not valid'
    })
    .email({ message: 'Email is not valid' }),
  message: z
    .string({
      required_error: 'Message is required'
    })
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(500, { message: 'Message should be maximum 500 characters' })
})

export { ContactSchema }
