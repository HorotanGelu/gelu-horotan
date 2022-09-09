import React from 'react'
type Props = {
  children: React.ReactNode
  className?: string
  rounded?: boolean
  type: 'button' | 'submit' | 'reset'
}

const Button = ({ children, className, rounded, type }: Props) => {
  return (
    <button
      type={type}
      className={`${className} ${rounded && 'rounded-full'}  `}
    >
      {children}
    </button>
  )
}

export default Button
