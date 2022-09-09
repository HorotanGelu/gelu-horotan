import React from 'react'

const Navigation = () => {
  return (
    <nav className='flex flex-row w-full py-3 px-2  justify-between bg-slate-600 items-center'>
      <p>LOGO</p>
      <ul className='flex flex-row w-1/2 justify-around items-center'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>LOGIN</li>
        <li>REGISTER</li>
      </ul>
    </nav>
  )
}

export default Navigation
