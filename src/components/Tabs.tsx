import React from 'react'
import { Tab } from '@headlessui/react'

type Items = {
  items: {
    tab: string
    component: React.ReactNode
  }[]

  setActiveTab: React.Dispatch<React.SetStateAction<number>>
}

const Tabs = ({ items, setActiveTab }: Items) => {
  return (
    <Tab.Group>
      <Tab.List className='flex space-x-1 w-full  '>
        {items.map((category, index) => (
          <Tab
            key={index}
            className={
              'ui-selected:bg-accent_t_2  ui-selected:text-primary_s   bg-accent_s_2   text-secondary   focus:outline-none w-full   font-medium leading-5 p-2  uppercase transition-all ease-in-out duration-250'
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
            <Tab.Panel key={index} className='h-full '>
              {item.component}
            </Tab.Panel>
          )
        })}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Tabs
