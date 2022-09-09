import React from 'react'
import * as FaIcons from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-max flex flex-col bg-primary   text-secondary shadow-lg p-4 '>
      <SideBarIcon icon={<FaIcons.FaHome size='28' />} />
      <SideBarIcon icon={<FaIcons.FaAws size='28' />} />
      <SideBarIcon icon={<FaIcons.FaBitcoin size='28' />} />
      <SideBarIcon icon={<FaIcons.FaAngellist size='28' />} />
      <SideBarIcon icon={<FaIcons.FaApplePay size='28' />} />
    </div>
  )
}

const SideBarIcon = ({ icon }) => <div className='sidebar-icon '>{icon}</div>

export default Sidebar
