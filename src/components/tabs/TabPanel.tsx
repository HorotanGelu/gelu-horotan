import { Tab } from '@headlessui/react'
import React from 'react'
import DashLayout from '../layouts/DashLayout'

type Props = {
   panels: {
      component: React.ReactNode
      icon?: React.ReactNode
   }[]
}

const TabPanel = ({ panels }: Props) => {
   return (
      <Tab.Panels className={'w-full h-full'}>
         {panels.map((panel, index: number) => {
            return (
               <Tab.Panel
                  className={`flex justify-center items-center w-full h-full  `}
                  key={index}
               >
                  <DashLayout>{panel.component}</DashLayout>
               </Tab.Panel>
            )
         })}
      </Tab.Panels>
   )
}

export default TabPanel
