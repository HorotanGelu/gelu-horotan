import React from 'react'

import getInputIcon from '../../utils/getInputIcon'

type Props = {
   value: string
   type: string
   name: string
   error: string
   id: string
   labelColor?: string
   label: string

   placeholder?: string
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
   placeholder,
   labelColor,
}: Props) => {
   return (
      <div className='flex flex-col relative gap-1  '>
         <label
            htmlFor={name}
            className={`${labelColor ? labelColor : 'text-secondary'}`}
         >
            {label}
         </label>
         {/* <span className='text-red-500 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4   w-full'>
            {error}
         </span> */}
         <div className=' relative w-full '>
            <input
               placeholder={placeholder ? placeholder : ''}
               name={name}
               type={type}
               id={id}
               className={`peer relative transition-all bg-secondary_s rounded-lg duration-200 w-full ease-in-out  py-2 ${
                  getInputIcon(id, error) ? 'px-8' : 'px-2'
               } outline-none`}
               value={value}
               onChange={onChangeHandler}
               onBlur={onBlurHandler}
            />
            {getInputIcon(id, error) && (
               <div className=' absolute top-2/4 left-2 -translate-y-2/4 '>
                  {getInputIcon(id, error)}
               </div>
            )}
         </div>
      </div>
   )
}

export default Input
