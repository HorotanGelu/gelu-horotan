import React from 'react'
import UpdatePasswordForm from '../form/UpdatePasswordForm'

import UpdateProfileForm from '../form/UpdateProfileForm'

const Account = () => {
   return (
      <div className='flex flex-col  items-start gap-12 justify-center   w-full h-full'>
         <h1 className='text-secondary '>Edit profile</h1>
         <UpdateProfileForm />
         <h2 className='text-secondary '>Change password</h2>
         <UpdatePasswordForm />
      </div>
   )
}

export default Account
