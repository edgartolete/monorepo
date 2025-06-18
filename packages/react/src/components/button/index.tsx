import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: React.Ref<HTMLButtonElement>
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}
