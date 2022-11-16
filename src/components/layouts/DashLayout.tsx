import React from 'react'

type Props = {
   children: React.ReactNode
}

const DashLayout = ({ children }: Props) => {
   return (
      <div className='w-full h-full  flex items-center justify-center px-12'>
         {children}
      </div>
   )
}

export default DashLayout
