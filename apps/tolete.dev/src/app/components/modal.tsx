'use client'
import { useModal } from '@/components/ui/animated-modal'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const FormModal = dynamic(() => import('./form'), { ssr: false })

export function ContactModal() {
  const { open } = useModal()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return open ? <FormModal /> : null
}
