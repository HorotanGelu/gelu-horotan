import React from 'react'

import Separator from './Separator'

type Props = {
   children: React.ReactNode
}

const DashboardSidebar = ({ children }: Props) => {
   return (
      <div className='w-max h-full flex    '>
         {children}
         <Separator />
      </div>
   )
}

export default DashboardSidebar
