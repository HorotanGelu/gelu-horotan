import React, { useState } from 'react'
import Link from 'next/link'

import * as FaIcons from 'react-icons/fa'
import Sidebar from './Sidebar'
import Modal from './Modal'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  // const isDesktop = useMediaQuery('(min-width: 960px)')
  const navItems = [
    { id: 1, name: 'home' },
    { id: 2, name: 'about' },
    { id: 3, name: 'projects' },
    { id: 4, name: 'contact' },
    { id: 5, name: 'sign in' },
  ]
  function toggleModal() {
    setIsOpen(prevState => !prevState)
  }

  return (
    <>
      <nav
        className={
          ' flex flex-row  w-full py-3 px-2  justify-between  bg-gradient-to-r from-byz_s_2 to-byz_t  z-30 items-center'
        }
      >
        <FaIcons.FaApplePay size='28' />
        <ul className='flex flex-row w-1/2 justify-around items-center'>
          {navItems?.map(item => {
            return (
              <li key={item.id} className='navigation-item '>
                {item.name === 'sign in' && <Modal modalTitle={'SIGN IN'} />}
                {item.name !== 'sign in' && (
                  <Link href={`/${item.name === 'home' ? '' : item.name}`}>
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      <Sidebar />
    </>
  )
}

export default Navigation
