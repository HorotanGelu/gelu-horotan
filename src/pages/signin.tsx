import React, { useState } from 'react'
import LoginForm from '../components/Form/LoginForm'
import RegisterForm from '../components/Form/RegisterForm'
import LoginIllustration from '../components/svgs/LoginIllustration'
import RegisterIllustration from '../components/svgs/RegisterIllustration'
import Tabs from '../components/Tabs'

const Signin = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <div className='container flex gap-20  items-center justify-center'>
      <Tabs
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

      <div className='flex flex-col items-center justify-center gap-8 text-primary_t'>
        {activeTab === 0 && (
          <LoginIllustration
            size={600}
            fillClassName='fill-primary_t_2'
            secClassName='fill-accent dark:fill-secondary_s_2'
          />
        )}
        {activeTab === 1 && (
          <RegisterIllustration
            fillClassName='fill-primary_t_2 '
            secClassName='fill-primary_t dark:fill-secondary_s_2'
            size={600}
          />
        )}
      </div>
    </div>
  )
}

export default Signin
