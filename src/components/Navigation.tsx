import React from 'react'
import Link from 'next/link'
import useMediaQuery from '../customHooks/useMediaQuery'
import * as FaIcons from 'react-icons/fa'
import Sidebar from './Sidebar'

const Navigation = () => {
  const isDesktop = useMediaQuery('(min-width: 960px)')
  const navItems = [
    { id: 1, name: 'home' },
    { id: 2, name: 'about' },
    { id: 3, name: 'projects' },
    { id: 4, name: 'contact' },
    { id: 5, name: 'login' },
    { id: 6, name: 'register' },
  ]

  return (
    <>
      <nav
        className={`${
          isDesktop ? 'flex' : 'hidden'
        } flex  flex-row w-full py-3 px-2  justify-between bg-primary_t dark:bg-secondary_s_2  items-center`}
      >
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

      {!isDesktop && <Sidebar />}
    </>
  )
}

export default Navigation
