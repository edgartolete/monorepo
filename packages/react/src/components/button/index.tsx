import React from 'react'

import style from './button.module.css'
import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: React.Ref<HTMLButtonElement>
  pill?: boolean
}

export default function Button({ children, pill, className, ...props }: ButtonProps) {
  return (
    <button {...props} className='ui:rounded-lg ui:border-2'>
      {children}
    </button>
  )
}
