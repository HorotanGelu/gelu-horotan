import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Components
import LoginForm from '../components/form/LoginForm'
import RegisterForm from '../components/form/RegisterForm'
import LoginIllustration from '../components/svgs/LoginIllustration'
import RegisterIllustration from '../components/svgs/RegisterIllustration'

import { useAuth } from '../context/hooks/useAuth'
import { Tab } from '@headlessui/react'
import TabPanel from '../components/tabs/TabPanel'
import TabList from '../components/tabs/TabList'

function Signin() {
   const [activeTab, setActiveTab] = useState<number>(0)
   const router = useRouter()
   const { isAuthenticated } = useAuth()

   const initialTabs = {
      Login: {
         component: <LoginForm></LoginForm>,
      },
      Register: {
         component: <RegisterForm />,
      },
   }

   useEffect(() => {
      if (isAuthenticated) {
         router.push('/?redirected=true')
      }
   }, [isAuthenticated, router])

   return (
      <Tab.Group>
         <div className='container flex gap-20   items-center justify-center  '>
            <div className='  w-11/12 h-3/5 relative   mx-auto bg-primary_t_2 rounded-3xl     items-center justify-center  flex flex-col  gap-20  '>
               <TabList list={Object.keys(initialTabs)} />
               <div className='flex items-center justify-evenly w-full '>
                  <div className='flex  items-center justify-center  gap-8 text-primary_t '>
                     {activeTab === 0 && (
                        <LoginIllustration
                           size={400}
                           fillClassName='fill-primary_t_2'
                           secClassName='fill-accent dark:fill-secondary_s_2'
                        />
                     )}
                     {activeTab === 1 && (
                        <RegisterIllustration
                           fillClassName='fill-primary_t '
                           secClassName='fill-primary_t dark:fill-secondary_s_2'
                           size={400}
                        />
                     )}
                  </div>

                  <div className='w-1/2 flex flex-col '>
                     <TabPanel panels={Object.values(initialTabs)} />
                  </div>
               </div>
            </div>
         </div>
      </Tab.Group>
   )
}

export default Signin
