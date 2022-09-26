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
        className=' text-gray-600 cursor-text 
        // peer-focus:text-xs peer-focus:-top-4
         peer-focus:text-purple-600 transition-all'
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className='border-b py-1 outline-none focus:border-purple-600 focus:border-b-2 transition-colors bg-none peer  '
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default Input
