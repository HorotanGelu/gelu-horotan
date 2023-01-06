import React from 'react'
import DashboardSidebar from '../DashboardSidebar'

type Props = {
  children: React.ReactNode
}

const DashLayout = ({ children }: Props) => {
  return (
    <div className='flex mt-12 items-center justify-center w-full h-[81.6vh] '>
      <DashboardSidebar />
      <div className='w-full h-full  flex items-center justify-center p-12 '>
        {children}
      </div>
    </div>
  )
}

export default DashLayout
