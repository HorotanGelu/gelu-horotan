import React from 'react'

// type Props = {
//   name: string
//   onChangeHandler: () => React.ChangeEvent<HTMLInputElement>
//   type: string
// }

const Input = ({ name, onChangeHandler, type }) => {
  return (
    <div className='flex flex-col'>
      <label
        htmlFor={name}
        className=' text-secondary dark:text-primary cursor-text 
        // peer-focus:text-xs peer-focus:-top-4
         peer-focus:text-purple-600 transition-all'
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        autoComplete='off'
        className='text-secondary dark:text-primary border-b-2 border-secondary dark:border-primary bg-transparent  p-2  outline-none focus:border-amaranth_s_2  transition-all ease-in-out duration-250  peer :focus:bg-transparent  '
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default Input
