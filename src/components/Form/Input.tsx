import React from 'react'

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
  return (
    <div className='flex flex-col relative '>
      <label htmlFor={name} className=' '>
        {label}
      </label>
      <input
        name={name}
        type={type}
        id={id}
        className={`peer bg-primary_t   p-2 outline-none    ${
          error
            ? 'border-b-red-600 border-b-2 '
            : !error && value
            ? 'border-b-green-600 border-b-2 '
            : ''
        }`}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />

      <span className='text-red-500 -bottom-6 absolute  w-full'>{error}</span>
    </div>
  )
}

export default Input
