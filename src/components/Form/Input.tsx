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
        className=' text-secondary_t_2 cursor-text 
        // peer-focus:text-xs peer-focus:-top-4
         peer-focus:text-purple-600 transition-all'
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className='border-b-2 bg-transparent  p-2 focus:rounded-3xl outline-none focus:border-purple-600 focus:border-b-2 transition-all ease-in-out duration-250  peer :focus:bg-transparent  '
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default Input
