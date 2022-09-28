import React from 'react'
import LoginForm from '../components/Form/LoginForm'
import RegisterForm from '../components/Form/RegisterForm'
import Login from '../components/svgs/Login'
import RegisterIllustration from '../components/svgs/RegisterIllustration'
import Tabs from '../components/Tabs'

const Signin = () => {
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
      />

      <div className='flex flex-col items-center justify-center gap-8 text-primary_t'>
        {/* <Login size={600}></Login> */}
        <RegisterIllustration color='#232629' size={600}></RegisterIllustration>
      </div>
    </div>
  )
}

export default Signin
