import Head from 'next/head'
import React from 'react'
import Button from '../components/Button'

export default function Home() {
  return (
    <div
      className={
        'flex justify-start items-center w-full h-screen theme-color overflow-x-hidden'
      }
    >
      <Head>
        <title>Gelu Horotan - Frontend Developer</title>
        <meta
          name='description'
          content='Detail-oriented professional and critical thinker
with a flair for creating elegant solutions in the
least amount of time'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://use.typekit.net/lmd6idu.css'
        ></link>
      </Head>
      <div className='flex flex-col w-[45%] p-20'>
        <h1 className=' text-secondary z-20 p-2'>
          Gelu Horotan <br /> Frontend Web Developer
        </h1>
        <Button
          rounded
          className=' bg-amaranth text-secondary z-20 p-2'
          type='button'
        >
          SEE MY PROJECTS
        </Button>
      </div>
      <video
        autoPlay
        muted
        className=' w-[75%] theme-color   absolute -right-28'
      >
        <source src={'/macbook.webm'} type='video/webm'></source>
      </video>
    </div>
  )
}
