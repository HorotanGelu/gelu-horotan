import React from 'react'
import Link from 'next/link'
import Sidebar from './Sidebar'
import Logo from './svgs/Logo'

import Dropdown from './Dropdown'
import Avatar from './Avatar'
import { useAuth } from '../context/hooks/useAuth'
import DarkMode from './DarkMode'

const Navigation = () => {
   const { isAuthenticated, user, logout } = useAuth()

   const navItems = [
      { id: 1, name: 'home' },
      { id: 2, name: 'about' },
      { id: 3, name: 'projects' },
      { id: 4, name: 'contact' },
   ]

   const dropdownData = {
      header: 'Signed in as',
      items: [
         {
            name: 'Profile',
            to: '/dashboard',
            id: 1,
         },
         {
            name: 'Settings',
            to: '/about',
            id: 2,
         },

         {
            name: 'Report a bug',
            to: '/about',
            id: 3,
         },

         {
            name: 'Log out',
            to: '#',
            isNew: true,
            id: 4,
            action: logout,
         },
      ],
   }

   return (
      <>
         <nav
            className={
               ' flex flex-row  w-full py-3 px-14   justify-between bg-primary dark:bg-secondary   items-center'
            }
         >
            <ul className='flex flex-row w-1/2 justify-between items-center  '>
               <Logo size={36} />
               {navItems?.map(item => {
                  return (
                     <li key={item.id} className='navigation-item '>
                        <Link
                           href={`/${item.name === 'home' ? '' : item.name}`}
                        >
                           {item.name}
                        </Link>
                     </li>
                  )
               })}
            </ul>
            <ul className='flex gap-12  items-center justify-between'>
               {!isAuthenticated ? (
                  <li className='navigation-item '>
                     {' '}
                     <Link href='/signin'>SIGN IN</Link>
                  </li>
               ) : (
                  <Dropdown data={dropdownData} title={`${user.email}`}>
                     <span className='text-secondary dark:text-primary'>
                        {user.firstName}&nbsp;
                        {user.lastName}
                     </span>
                     <Avatar size='small' />
                  </Dropdown>
               )}
               <DarkMode />
            </ul>
         </nav>

         <Sidebar />
      </>
   )
}

export default Navigation
