import React from 'react'

type Props = {
  letters: string
}

const Avatar = ({ letters }: Props) => {
  return (
    <div className='rounded-full drop-shadow-lg bg-gradient-to-r from-pink-400 to-pink-600 w-12 h-12 flex items-center justify-center'>
      <span className='drop-shadow-lg'>{letters}</span>
    </div>
  )
}

export default Avatar
