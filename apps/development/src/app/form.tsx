'use client'

import { useRef } from 'react'

export function CrossSiteAuthRedirect() {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.value = 'my-token2'
    }
  }

  return (
    <form
      action='http://localhost:3000/api/redirect?a=text&b=123'
      method='POST'
      className='flex gap-2 items-center'
    >
      <input ref={inputRef} type='hidden' name='token' />
      <button
        type='submit'
        className='bg-blue-950 text-white px-4 py-2 rounded'
        onClick={handleClick}
      >
        Go!!!
      </button>
    </form>
  )
}
