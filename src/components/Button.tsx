import React from 'react'
import { motion } from 'framer-motion'

type Props = {
   children: React.ReactNode
   className?: string
   rounded?: boolean
   eventName?: string
   onClick?: () => void
   type: 'button' | 'submit' | 'reset'
}

const Button = ({
   children,
   className,
   rounded,

   type,
   ...rest
}: Props) => {
   return (
      <motion.button
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.8 }}
         transition={{ duration: 0.2, ease: 'easeInOut' }}
         type={type}
         className={`${className} ${
            rounded && 'rounded-full'
         } w-max items-center justify-center flex  `}
         {...rest}
      >
         {children}
      </motion.button>
   )
}

export default Button
