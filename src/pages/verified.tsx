import React from 'react'
import MailVerificationSvg from '../components/svgs/MailVerificationSvg'
import { GetStaticProps } from 'next'

const Verified = () => {
  return (
    <div className='theme-color min-h-screen flex flex-col justify-center items-center gap-12'>
      <MailVerificationSvg />
      <div className='flex flex-col gap-4'>
        <h1 className='text-center'>
          Thank you for registering,{' '}
          <span className='text-primary_t_2'>
            {/* {firstName}&nbsp;{lastName} */}
          </span>
        </h1>
        <h5 className='text-center tracking-wide'>
          Before we can proceed to further actions, <br /> please take a look in
          your inbox and confirm your account.
        </h5>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => ({ props: {} })

export default Verified
