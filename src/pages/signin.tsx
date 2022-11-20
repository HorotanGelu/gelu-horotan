import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Components
import LoginForm from '../components/form/LoginForm'
import RegisterForm from '../components/form/RegisterForm'
import LoginIllustration from '../components/svgs/LoginIllustration'
import RegisterIllustration from '../components/svgs/RegisterIllustration'

import { useAuth } from '../context/hooks/useAuth'
import Tabs from '../components/Tab'

function Signin() {
   const [activeTab, setActiveTab] = useState<number>(0)
   const router = useRouter()
   const { isAuthenticated } = useAuth()

   useEffect(() => {
      if (isAuthenticated) {
         router.push('/?redirected=true')
      }
   }, [isAuthenticated, router])

   return (
      <div className='container flex gap-20   items-center justify-center  '>
         <div className='  w-11/12 h-3/5 relative   mx-auto bg-primary_t_2 rounded-3xl py-12 px-4   items-center justify-center bg-red-4900  flex gap-20  '>
            <div className='flex flex-col items-center justify-center  gap-8 text-primary_t '>
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
            <div className='w-1/2 flex flex-col h-full   items-center justify-between   '>
               <Tabs
                  headerClassName='absolute top-0   left-0'
                  items={[
                     {
                        tab: 'login',
                        component: <LoginForm className='rounded-b-3xl' />,
                     },
                     {
                        tab: 'register',
                        component: <RegisterForm className='rounded-b-3xl' />,
                     },
                  ]}
                  setActiveTab={setActiveTab}
               />
            </div>
         </div>
      </div>
   )
}

export default Signin
