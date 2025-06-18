import React from 'react'

import styles from './style.module.css'
import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: React.Ref<HTMLButtonElement>
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={clsx(styles.button, className)}>
      {children}
    </button>
  )
}
export const val = 'button'
