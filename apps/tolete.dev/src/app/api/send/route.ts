import { CreateEmailOptions, Resend } from 'resend'

export type ResendPayload = {
  email: string
  firstName: string
  lastName?: string
  message: string
}

const allowedOrigins = ['https://tolete.dev', 'https://www.tolete.dev']

export async function POST(req: Request) {
  const data = await req.json()

  const origin = req.headers.get('origin') ?? ''

  if (!allowedOrigins.includes(origin)) {
    const error = { error: 'Cross origin not allow' }
    return Response.json([error, error])
  }

  const { email: senderEmail, firstName, lastName, message } = data

  const resend = new Resend(process.env.RESEND_API_KEY)

  const providerEmail = process.env.PROVIDER_EMAIL

  const recipientEmail = process.env.RECIPIENT_EMAIL || []

  const receiverPayload: CreateEmailOptions = {
    from: `Tolete Web Development Services<${providerEmail}>`,
    to: recipientEmail,
    subject: 'New message from your website',
    html: `<p>email: ${senderEmail}</p>
          <p>First Name: ${firstName}</p>
          <p>Last Name: ${lastName}</p>
          <p>Message: ${message}</p>`
  }

  const senderPayload: CreateEmailOptions = {
    from: `Tolete Web Development Services<${providerEmail}>`,
    to: [senderEmail],
    subject: 'Here is a copy of your message to Tolete Web Development Services',
    html: `<p>email: ${senderEmail}</p>
          <p>First Name: ${firstName}</p>
          <p>Last Name: ${lastName}</p>
          <p>Message: ${message}</p>`
  }

  const res = await Promise.all([
    resend.emails.send(receiverPayload),
    resend.emails.send(senderPayload)
  ])

  return Response.json(res)
}
