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
          ' flex flex-row  w-full py-3 px-8  justify-between bg-primary dark:bg-secondary border border-b-primary_t_2 dark:border-b-secondary_s_2 z-30 items-center'
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
            <Modal
              tabs={[
                {
                  title: 'Account',
                  component: <LoginForm></LoginForm>,
                },
                {
                  title: 'Register',
                  component: <RegisterForm></RegisterForm>,
                },
              ]}
            >
              <li className='navigation-item '>SIGN IN</li>
            </Modal>
          ) : (
            <Dropdown>
              <li className='navigation-item'>{auth?.user?.name}</li>
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
