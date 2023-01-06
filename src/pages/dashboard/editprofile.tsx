import React, { ReactElement } from 'react'
import UpdatePasswordForm from '../../components/form/UpdatePasswordForm'
import UpdateProfileForm from '../../components/form/UpdateProfileForm'
import DashLayout from '../../components/layouts/DashLayout'

const Editprofile = () => {
  return (
    <div className='w-full h-full flex gap-8 items-center justify-center  '>
      <UpdateProfileForm></UpdateProfileForm>
      <UpdatePasswordForm></UpdatePasswordForm>
    </div>
  )
}

Editprofile.getLayout = (page: ReactElement) => {
  return <DashLayout>{page}</DashLayout>
}

export default Editprofile
