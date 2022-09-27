import React, { useState } from 'react'

import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarItems = [
    { id: 1, name: 'home', icon: <FaIcons.FaHome size='28' /> },
    { id: 2, name: 'about', icon: <FaIcons.FaAws size='28' /> },
    { id: 3, name: 'projects', icon: <FaIcons.FaBitcoin size='28' /> },
    { id: 4, name: 'contact', icon: <FaIcons.FaAngellist size='28' /> },
  ]

  const handleOpenState = () => setIsOpen(prevState => !prevState)
  return (
    <>
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-full h-screen z-10 bg-black absolute opacity-50  `}
        onClick={handleOpenState}
      ></div>
      <div className=' absolute left-7 z-30 mt-4 md:hidden'>
        <FiIcons.FiBarChart2
          className='rotate-90  text-amaranth'
          size={30}
          onClick={handleOpenState}
        />
      </div>
      <div
        className={`${
          isOpen ? ' translate-x-0' : '-translate-x-full'
        }  w-max z-20 fixed  h-screen  flex gap-3 flex-col bg-gradient-to-r from-primary to-primary_s text-secondary shadow-lg px-4 py-20 ease-in-out   duration-200 `}
      >
        {sidebarItems.map(item => {
          return (
            <SideBarIcon
              key={item.id}
              name={item.name}
              icon={item.icon}
            ></SideBarIcon>
          )
        })}
      </div>
    </>
  )
}

const SideBarIcon = ({ icon, name }) => (
  <div className='sidebar-item-container'>
    <div className='sidebar-icon '>
      {icon}
      {/* &lt;/&gt; */}
    </div>
    <p>{name}</p>
  </div>
)

export default Sidebar
