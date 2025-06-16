import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: React.Ref<HTMLButtonElement>
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
      {children}
    </button>
  )
}
