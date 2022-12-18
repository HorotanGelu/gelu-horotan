import React, { useState } from 'react'
import { Tab } from '@headlessui/react'

type Items = {
   headerClassName?: string
   list: string[]
   className?: string
   children: React.ReactElement[]

   setSelectedIndex?: React.Dispatch<React.SetStateAction<number>>
   setActiveTab?: React.Dispatch<React.SetStateAction<number>>
   [key: string]: unknown
}
const Tabs = ({ list, setActiveTab, className, children, ...props }: Items) => {
   return (
      <Tab.Group {...props} as={'div'}>
         <Tab.List className='flex   w-full  '>
            {list.map((item, index) => (
               <Tab
                  key={index}
                  className={`ui-selected:border-b-accent ui-selected:border-b-2 w-full outline-none ${
                     className ? className : ''
                  }     text-secondary   focus:outline-none   font-medium leading-5 p-2  uppercase transition-all ease-in-out duration-250 rounded-t-lg`}
                  onClick={() => {
                     setActiveTab ? setActiveTab(index) : ''
                  }}
               >
                  {item}
               </Tab>
            ))}
         </Tab.List>
         <Tab.Panels className={' h-full mt-2 '}>
            {children.map((item, index) => {
               return (
                  <Tab.Panel key={index} className='h-full  flex items-center'>
                     {item}
                  </Tab.Panel>
               )
            })}
         </Tab.Panels>
      </Tab.Group>
   )
}

export default Tabs
