import { Tab } from '@headlessui/react'
import React from 'react'
import { MdDashboard } from 'react-icons/md'
import DashboardSidebar from '../../components/DashboardSidebar'

import Dash from '../../components/dashboard/Dash'

import TabList from '../../components/tabs/TabList'
import TabPanel from '../../components/tabs/TabPanel'
import Account from '../../components/dashboard/Account'

function Dashboard() {
   const initialTabs = {
      Dashboard: {
         component: <Dash></Dash>,
         icon: <MdDashboard></MdDashboard>,
      },
      Account: {
         component: <Account />,
         icon: <MdDashboard></MdDashboard>,
      },
   }

   return (
      <div className='container my-20 '>
         <div className='w-full flex  h-full text-primary'>
            <Tab.Group>
               <DashboardSidebar>
                  <TabList
                     list={Object.keys(initialTabs)}
                     icons={Object.values(initialTabs)}
                     column
                  />
               </DashboardSidebar>
               <div className=' w-full flex justify-center items-center h-full '>
                  <TabPanel panels={Object.values(initialTabs)} />
               </div>
            </Tab.Group>
         </div>
      </div>
   )
}

export default Dashboard
