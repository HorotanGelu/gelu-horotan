import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Components
import LoginForm from '../components/form/LoginForm'
import RegisterForm from '../components/form/RegisterForm'
import SigninIllustration from '../components/svgs/SigninIllustration'

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

  const tabList = ['login', 'register']

  return (
    <div className='container flex gap-20   items-center justify-center  '>
      <div className='w-full flex  h-full    items-center justify-center   '>
        <Tabs list={tabList} setActiveTab={setActiveTab}>
          <LoginForm className='rounded-b-3xl' />
          <RegisterForm className='rounded-b-3xl' />
        </Tabs>
        <SigninIllustration />
      </div>
    </div>
  )
}

export default Signin
