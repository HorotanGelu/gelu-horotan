import React, { useEffect } from 'react'
import MailVerificationSvg from '../components/svgs/MailVerificationSvg'
import { useRouter } from 'next/router'

// Redux
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { loadUser } from '../store/authSlice'

const Verified = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.auth.user)
  const { name, verified } = user

  useEffect(() => {
    dispatch(loadUser())

    if (
      verified === true &&
      router.pathname === '/verified' &&
      localStorage.token
    ) {
      router.push('/')
    }
  }, [router, localStorage.token, verified])
  return (
    <div className='theme-color min-h-screen flex flex-col justify-center items-center gap-12'>
      <MailVerificationSvg />
      <div className='flex flex-col gap-4'>
        <h1 className='text-center'>
          Thank you for registering,{' '}
          <span className='text-primary_t_2'>{name && name}</span>
        </h1>
        <h5 className='text-center tracking-wide'>
          Before we can proceed to further actions, <br /> please take a look in
          your inbox and confirm your account.
        </h5>
      </div>
    </div>
  )
}

export default Verified
