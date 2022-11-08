import React, { useState, useEffect } from 'react'
import useDarkMode from '../customHooks/useDarkMode'
import { motion } from 'framer-motion'
import { HiOutlineLightBulb, HiOutlineMoon } from 'react-icons/hi'

const DarkMode: React.FC = props => {
   const [colorTheme, setTheme] = useDarkMode()
   const [mounted, setMounted] = useState<boolean>()

   useEffect(() => {
      setMounted(true)
   }, [])

   return (
      <div className='flex items-center gap-4'>
         <HiOutlineLightBulb
            className='text-secondary dark:text-primary'
            size={24}
         />
         <span
            className={`w-12 h-6 bg-secondary_s_2 rounded-full  p-1 cursor-pointer flex items-center ${
               colorTheme === 'light' && mounted
                  ? 'justify-start'
                  : colorTheme === 'dark' && mounted
                  ? 'justify-end'
                  : ''
            }  `}
            onClick={() =>
               colorTheme === 'light' ? setTheme('light') : setTheme('dark')
            }
         >
            <motion.span
               layout
               transition={{
                  type: 'spring',
                  stiffness: 700,
                  damping: 30,
               }}
               className='rounded-full w-4 h-4 bg-secondary_t_2 '
            />
         </span>

         <HiOutlineMoon
            className='text-secondary dark:text-primary'
            size={24}
         />
      </div>
   )
}

export default DarkMode
