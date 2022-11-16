import { Tab } from '@headlessui/react'
import React from 'react'

type Props = {
   list: string[]
   icons?: {
      icon: React.ReactNode
   }[]
   column?: boolean
}
const TabList = ({ list, column, icons }: Props) => {
   console.log(list)
   return (
      <Tab.List
         className={`${
            column ? 'flex-col' : ''
         } flex  w-full h-1/5 gap-2 justify-center  items-start p-2  `}
      >
         {list.map((tab: string, index: number) => {
            return (
               <Tab
                  key={index}
                  className={`ui-selected:bg-secondary_s_2 px-6 text-secondary rounded-xl w-full outline-none  `}
               >
                  {icons && (
                     <h5 className='text-left flex gap-4 p-1 items-center'>
                        {' '}
                        {icons[index].icon}{' '}
                     </h5>
                  )}
                  {tab}
               </Tab>
            )
         })}
      </Tab.List>
   )
}

export default TabList
