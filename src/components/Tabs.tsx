import React from 'react'
import { Tab } from '@headlessui/react'

type Items = {
  items: {
    tab: string
    component: React.ReactNode
  }[]
}

const Tabs = ({ items }: Items) => {
  return (
    <div className='w-1/3    px-2   sm:px-0 '>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-t-3xl w-full  '>
          {items.map((category, index) => (
            <Tab
              key={index}
              className={
                'ui-selected:bg-blue-400 ui-selected:text-secondary hover:bg-secondary_t_2 bg-secondary_s_2 hover:text-primary_t_2 focus:outline-none w-full   py-2.5 text-sm odd:rounded-tl-3xl even:rounded-tr-3xl font-medium leading-5 text-primary uppercase transition-all ease-in-out duration-250'
              }
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
