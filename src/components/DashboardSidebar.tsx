import React, { useState } from 'react'
import { MdDashboard } from 'react-icons/md'
import Separator from './Separator'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
  children?: React.ReactNode
}

const DashboardSidebar = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const basePath = '/dashboard'
  const dashboardSidebarItems = [
    {
      id: 1,
      name: 'Dashboard',
      icon: <MdDashboard size='24' className='text-secondary ' />,
      to: basePath,
    },
    {
      id: 2,
      name: 'Edit profile',
      icon: <MdDashboard size='24' className='text-secondary ' />,
      to: basePath + '/editprofile',
    },
    {
      id: 3,
      name: 'Support',
      icon: <MdDashboard size='24' className='text-secondary ' />,
      to: basePath + '/support',
    },
  ]

  return (
    <motion.div className='h-full  transition-all duration-200 ease-in-out flex  gap-2 px-4   '>
      <div className='  flex flex-col justify-start  gap-2'>
        {dashboardSidebarItems.map(item => {
          return (
            <Link href={item.to} key={item.id}>
              <div className=' py-2 px-4 flex  items-center gap-2 '>
                <div>{item.icon}</div>

                <p className='flex text-left text-secondary w-full'>
                  {item.name}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
      <Separator />
    </motion.div>
  )
}

export default DashboardSidebar
