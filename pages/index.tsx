import Head from 'next/head'
import React from 'react'
import Button from '../components/Button'

export default function Home() {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-primary-light '>
      <Head>
        <title>Gelu Horotan - Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <p className='bg-400  p-10 border border-solid rounded-full'>TEST P</p>
      <Button
        className='hover:first-letter:text-blue-300 bg-primary'
        type='button'
      >
        TEST BUTTON
      </Button>
    </div>
  )
}
