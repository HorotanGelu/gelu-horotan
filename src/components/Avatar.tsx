import React from 'react'

type Props = {
   letters: string
}

const Avatar = ({ letters }: Props) => {
   return (
      <div className='rounded-full drop-shadow-lg bg-gradient-to-r from-accent_s_2 to-accent_t_2 h-8 w-8 flex items-center justify-center'>
         <span className='drop-shadow-lg text-primary_s'>{letters}</span>
      </div>
   )
}

export default Avatar
