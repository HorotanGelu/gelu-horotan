import React from 'react'
import Link from 'next/link'
import * as FaIcons from 'react-icons/fa'

const Navigation = () => {
  const navItems = [
    { id: 1, name: 'home' },
    { id: 2, name: 'about' },
    { id: 3, name: 'projects' },
    { id: 4, name: 'contact' },
    { id: 5, name: 'login' },
    { id: 6, name: 'register' },
  ]
  return (
    <nav className='flex flex-row w-full py-3 px-2  justify-between bg-primaryTint text-white  items-center'>
      <FaIcons.FaApplePay size='28' />
      <ul className='flex flex-row w-1/2 justify-around items-center'>
        {navItems?.map(item => {
          return (
            <li key={item.id} className='navigation-item '>
              <Link href={`/${item.name === 'home' ? '' : item.name}`}>
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
