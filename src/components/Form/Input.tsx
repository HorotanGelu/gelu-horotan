import React from 'react'
import { motion, useAnimation } from 'framer-motion'

type Props = {
   value: string
   type: string
   name: string
   error: string
   id: string
   label: string
   onChangeHandler: () => void
   onBlurHandler: () => void
}

const Input = ({
   value,
   onChangeHandler,
   onBlurHandler,
   type,
   name,
   error,
   id,
   label,
}: Props) => {
   const controls = useAnimation()
   return (
      <div className='flex flex-col relative '>
         <label htmlFor={name} className=' '>
            {label}
         </label>
         <input
            onFocus={() => {
               controls.set({
                  d: 'M2 2C2 2 15.5 10 52 10C88.5 9.99999 102 2 102 2',
               })
               controls.start({
                  d: 'M0 2.00001C0 2.00001 13.5 2.00001 50 2.00001C86.5 2 100 2.00001 100 2.00001',
               })
            }}
            name={name}
            type={type}
            id={id}
            className={`peer  bg-transparent transition-all duration-200 ease-in-out   p-2 outline-none`}
            value={value}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
         />
         <motion.svg
            preserveAspectRatio='none'
            height='4'
            viewBox='0 0 100 4'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='overflow-visible opacity-80 absolute left-0 bottom-0 w-full'
         >
            <motion.path
               animate={controls}
               d='M0 2.00001C0 2.00001 13.5 2.00001 50 2.00001C86.5 2 100 2.00001 100 2.00001'
               transition={{
                  duration: 1,
                  type: 'spring',
                  stiffness: 70,
                  damping: 8,
                  mass: 0.5,
               }}
               stroke={`${
                  value && !error ? 'green' : error ? 'red' : 'yellow'
               }`}
               strokeWidth='2'
            />
         </motion.svg>

         <span className='text-red-500 -bottom-6 absolute  w-full'>
            {error}
         </span>
      </div>
   )
}

export default Input
