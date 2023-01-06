import React from 'react'
import useDarkMode from '../customHooks/useDarkMode'
import useMount from '../customHooks/useMount'
import { motion } from 'framer-motion'
import { HiOutlineLightBulb, HiOutlineMoon } from 'react-icons/hi'

const DarkMode: React.FC = () => {
  const [colorTheme, setTheme] = useDarkMode()
  const [isMounted] = useMount()

  if (isMounted)
    return (
      <div className='flex items-center gap-4'>
        <HiOutlineLightBulb
          className='text-secondary dark:text-primary'
          size={24}
        />
        <div
          className={`w-12 h-6 bg-secondary_s_2 rounded-full  p-1 cursor-pointer flex items-center ${
            colorTheme === 'light' && isMounted
              ? 'justify-start'
              : colorTheme === 'dark' && isMounted
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
        </div>

        <HiOutlineMoon className='text-secondary dark:text-primary' size={24} />
      </div>
    )
}

export default DarkMode
