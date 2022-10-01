import React, { useState, useEffect } from 'react'

type Props = {
  name: string
  onChangeHandler: () => React.ChangeEvent<HTMLInputElement>
  type: string
  errorMsg?: string
  label: string
  pattern?: string
}
type Patterns = {
  firstName: string
  lastName: string
  email: string
  password: string
  formType: string
}

const Input = ({
  name,
  onChangeHandler,
  type,
  errorMsg,
  label,
  pattern,
}: Props) => {
  const [activePattern, setActivePattern] = useState<string>('')

  const patterns: Patterns = {
    firstName: "([A-z]{3,16}$)+(.?[a-zA-Z]{3,16}$)*('?[a-zA-Z]{3,16}$)*",
    lastName: "([A-z]{3,16}$)+(.?[a-zA-Z]{3,16}$)*('?[a-zA-Z]{3,16}$)*",
    email: '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$',
    password: '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,24}$',
  }

  useEffect(() => {
    Object.entries(patterns).map(([key, value]) => {
      if (key === name) {
        setActivePattern(() => value)
      }
    })
  }, [])

  return (
    <div className='flex flex-col'>
      <label
        htmlFor={name}
        className=' text-secondary dark:text-primary cursor-text 
       '
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        id={name}
        autoComplete='off'
        className='text-secondary dark:text-primary border-b-2 border-secondary dark:border-primary bg-transparent  p-2  outline-none  peer  transition-all ease-in-out duration-250  '
        onChange={onChangeHandler}
        // pattern={`${
        //   !pattern ? activePattern : name === 'password2' ? pattern : ''
        // }`}
        required
      />
      <span className='text-xs text-red-600 hidden peer-focus:peer-invalid:block peer '>
        {errorMsg}
      </span>
    </div>
  )
}

export default Input
