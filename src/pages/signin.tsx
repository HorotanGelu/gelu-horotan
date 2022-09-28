import React from 'react'
import LoginForm from '../components/Form/LoginForm'
import RegisterForm from '../components/Form/RegisterForm'
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

      {/* <div className='flex items-center justify-center gap-8 text-primary_t'>
        <h1>Login</h1>
      </div> */}
    </div>
  )
}

export default Signin
