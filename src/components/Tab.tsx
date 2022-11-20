import React from 'react'
import { Tab } from '@headlessui/react'

type Items = {
   headerClassName?: string
   items: {
      tab: string
      component: React.ReactNode
   }[]

   setActiveTab: React.Dispatch<React.SetStateAction<number>>
}

const Tabs = ({ items, setActiveTab }: Items) => {
   return (
      <Tab.Group>
         <Tab.List className='flex   w-full  '>
            {items.map((category, index) => (
               <Tab
                  key={index}
                  className={
                     'ui-selected:border-b-accent ui-selected:border-b-2 w-full outline-none     text-secondary   focus:outline-none   font-medium leading-5 p-2  uppercase transition-all ease-in-out duration-250 rounded-t-lg'
                  }
                  onClick={() => {
                     setActiveTab(index)
                  }}
               >
                  {category.tab}
               </Tab>
            ))}
         </Tab.List>
         <Tab.Panels className={' h-full mt-2 '}>
            {items.map((item, index) => {
               return (
                  <Tab.Panel key={index} className='h-full  flex items-center'>
                     {item.component}
                  </Tab.Panel>
               )
            })}
         </Tab.Panels>
      </Tab.Group>
   )
}

export default Tabs
