import React from 'react'

import Select from 'react-select'

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

const FormikSelect = ({
   value,
   onChangeHandler,
   onBlurHandler,

   name,
   error,
   id,
   label,

   labelColor,
   ...props
}: Props) => {
   return (
      <div className='flex flex-col relative gap-1  '>
         <label
            htmlFor={name}
            className={`${labelColor ? labelColor : 'text-secondary'}`}
         >
            {label}
         </label>
         <span className='text-red-500   w-full'>{error}</span>
         <div className=' relative w-full '>
            <Select
               name={name}
               {...props}
               id={id}
               className={`peer relative transition-all  rounded-lg duration-200 w-full ease-in-out  py-2  outline-none`}
               onChange={onChangeHandler}
               onBlur={onBlurHandler}
            />
         </div>
      </div>
   )
}

export default FormikSelect
