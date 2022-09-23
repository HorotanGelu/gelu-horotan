import React from 'react'
type Props = {
  children: React.ReactNode
  className?: string
  rounded?: boolean
  eventName?: string
  handler?: () => void
  type: 'button' | 'submit' | 'reset'
}

const Button = ({ children, className, rounded, handler, type }: Props) => {
  return (
    <button
      type={type}
      className={`${className} ${rounded && 'rounded-full'} w-max `}
      onClick={handler}
    >
      {children}
    </button>
  )
}

export default Button
