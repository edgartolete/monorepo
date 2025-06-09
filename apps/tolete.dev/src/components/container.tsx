import clsx from 'clsx'
import { JSX } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  id?: string
}
export function Container({ children, className, id }: Props): JSX.Element {
  return (
    <div id={id} className={clsx('m-0 md:m-auto w-full max-w-6xl px-5', className)}>
      {children}
    </div>
  )
}
