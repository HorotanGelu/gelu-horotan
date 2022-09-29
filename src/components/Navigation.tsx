import React from 'react'
import Link from 'next/link'
import Sidebar from './Sidebar'
import Modal from './Modal'
import DarkMode from './DarkMode'
import LoginForm from './Form/LoginForm'
import RegisterForm from './Form/RegisterForm'
import Logo from './svgs/Logo'

import { useAppSelector } from '../store/hooks'
import Dropdown from './Dropdown'
import { ddProfileData } from '../utils/dropdownData'
import Avatar from './Avatar'

const Navigation = () => {
  const auth = useAppSelector(state => state.auth)
  const { isAuthenticated } = auth
  // const isDesktop = useMediaQuery('(min-width: 960px)')
  const navItems = [
    { id: 1, name: 'home' },
    { id: 2, name: 'about' },
    { id: 3, name: 'projects' },
    { id: 4, name: 'contact' },
  ]

  return (
    <>
      <nav
        className={
          ' flex flex-row fixed w-full py-3 px-8  justify-between bg-primary dark:bg-secondary   items-center'
        }
      >
        <ul className='flex flex-row w-1/2 justify-between items-center'>
          <Logo size={36} />
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
        <ul className='flex w-1/5 items-center justify-between'>
          {!isAuthenticated ? (
            <li className='navigation-item '>
              {' '}
              <Link href='/signin'>SIGN IN</Link>
            </li>
          ) : (
            <Dropdown data={ddProfileData} header={`${auth.user?.email}`}>
              <span className='text-secondary dark:text-primary'>
                {auth.user?.firstName}&nbsp;
                {auth.user?.lastName}
              </span>
              <Avatar
                letters={
                  auth.user?.firstName.slice(0, 1) +
                  auth.user?.lastName.slice(0, 1)
                }
              />
            </Dropdown>
          )}
          <li>
            <DarkMode />
          </li>
        </ul>
      </nav>

      <Sidebar />
    </>
  )
}

export default Navigation
