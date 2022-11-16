import React from 'react'
import { useAuth } from '../context/hooks/useAuth'

type Props = {
   size: string
}

const Avatar = ({ size }: Props) => {
   const { user } = useAuth()
   return (
      <div
         className={`rounded-full drop-shadow-lg bg-gradient-to-r from-accent_s_2 to-accent_t_2 ${
            size === 'small'
               ? 'h-8 w-8'
               : size === 'medium'
               ? 'h-16 w-16'
               : size === 'large'
               ? 'w-32 h-32'
               : 'h-8 w-8'
         } flex items-center justify-center`}
      >
         <span
            className={`drop-shadow-lg ${
               size === 'small'
                  ? 'text-lg'
                  : size === 'medium'
                  ? 'text-2xl'
                  : size === 'large'
                  ? 'text-4xl'
                  : ''
            } text-primary_s`}
         >
            {user?.firstName.slice(0, 1) + user?.lastName.slice(0, 1)}
         </span>
      </div>
   )
}

export default Avatar
