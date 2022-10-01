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
    <div className='w-1/3    px-2   sm:px-0 '>
      <Tab.Group>
        <Tab.List className='flex space-x-1 w-full  '>
          {items.map((category, index) => (
            <Tab
              key={index}
              className={
                'ui-selected:bg-accent_t_2 ui-selected:text-primary_s   bg-accent_s_2   text-secondary   focus:outline-none w-full   py-2.5 font-medium leading-5  uppercase transition-all ease-in-out duration-250'
              }
              onClick={() => {
                setActiveTab(index)
              }}
            >
              {category.tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className={'mt-2'}>
          {items.map((item, index) => {
            return <Tab.Panel key={index}>{item.component}</Tab.Panel>
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Tabs
