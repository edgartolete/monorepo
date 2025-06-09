'use client'

import { ModalBody, ModalContent, useModal } from '@/components/ui/animated-modal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useMutation } from '@/hooks/swr'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { CreateEmailResponse } from 'resend'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactSchema } from '@/schema/contact'
import { useEffect, useState } from 'react'

type TFormData = {
  firstName: string
  lastName: string
  email: string
  message: string
}

type TFormReq = TFormData

type TFormRes = CreateEmailResponse[]

type WindowWithCaptcha = Window &
  typeof globalThis & {
    onSubmit?: (token: string) => void
    onExpired?: () => void
    onError?: () => void
  }

export default function FormModal() {
  const { setOpen } = useModal()
  const [captchaValid, setCaptchaValid] = useState(false)

  const { trigger, isMutating } = useMutation<TFormRes, TFormReq>('/api/send', {
    onSuccess: ([receiver, sender]) => {
      if (receiver.error || sender.error || !receiver.data?.id || !sender.data?.id) {
        toast.error(
          `Something went wrong, please try again later.Sender: ${sender.error}. Receiver: ${receiver.error}`
        )
        return
      }
      toast.success('Message sent successfully!!! ✉️  🚀 🥳')
      setOpen(false)
    },
    onError: () => {
      toast.error('Something went wrong, please try again later.')
    }
  })
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    },
    resolver: zodResolver(ContactSchema)
  })

  const onSubmit: SubmitHandler<TFormData> = async (data) => {
    trigger(data)
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js'
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    ;(window as WindowWithCaptcha).onSubmit = (token: string) => {
      if (token) setCaptchaValid(true)
    }
    ;(window as WindowWithCaptcha).onExpired = () => {
      setCaptchaValid(false)
      toast.error('Captcha expired, please try again.')
    }
    ;(window as WindowWithCaptcha).onError = () => {
      setCaptchaValid(false)
      toast.error('Captcha error, please try again.')
    }
    return () => {
      const script = document.querySelector(`script[src="https://www.google.com/recaptcha/api.js"]`)
      if (script) {
        script.remove()
      }
      delete (window as WindowWithCaptcha).onSubmit
      delete (window as WindowWithCaptcha).onExpired
      delete (window as WindowWithCaptcha).onError
    }
  }, [setCaptchaValid])

  return (
    <>
      <ModalBody>
        <ModalContent>
          <h4 className='text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8'>
            Let&apos;s get in touch!
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name='firstName'
              control={control}
              render={({ field }) => (
                <Input {...field} type='text' placeholder='First Name' className='mt-4 ' />
              )}
            />
            {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName.message}</p>}
            <Controller
              name='lastName'
              control={control}
              render={({ field }) => (
                <Input {...field} type='text' placeholder='Last Name' className='mt-4 ' />
              )}
            />
            {errors.lastName && <p className='text-red-500 text-sm'>{errors.lastName.message}</p>}
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <Input {...field} type='email' placeholder='Email Address' className='mt-4 ' />
              )}
            />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
            <Controller
              name='message'
              control={control}
              render={({ field }) => (
                <Textarea {...field} placeholder='write your message here...' className='mt-4' />
              )}
            />
            {errors.message && <p className='text-red-500 text-sm'>{errors.message.message}</p>}

            <div
              className='g-recaptcha mt-4'
              data-sitekey='6LexfjIrAAAAAKK85ZYw6ICKWirGefV-97h4txEQ'
              data-callback='onSubmit'
              data-expired-callback='onExpired'
              data-error-callback='onError'
            ></div>
            <Button type='submit' className='mt-4 w-full' disabled={!captchaValid}>
              {isMutating ? 'Loading...' : 'Submit'}
            </Button>
          </form>
        </ModalContent>
      </ModalBody>
    </>
  )
}
