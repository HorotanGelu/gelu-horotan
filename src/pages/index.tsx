import Head from 'next/head'
import React from 'react'
import Button from '../components/Button'

export default function Home() {
  return (
    <div
      className={
        'flex justify-center items-center w-full h-screen theme-color '
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
      <div className='flex flex-col text-primaryTint uppercase'>
        <h1>HOME</h1>
        <div className='bg-gradient-to-r from-accent to-secAccent'>G1</div>
        <h2>HOME</h2>
        <h3>HOME</h3>
        <h4>HOME</h4>
        <h5>HOME</h5>
        <h6>HOME</h6>
      </div>
      {/* <p className='bg-400  p-10 border border-solid rounded-full'>TEST P</p>
      <div className='bg-400  p-10 border border-solid rounded-full'>
        ACTIVATE
      </div>
      <Button
        className='hover:first-letter:text-blue-300 bg-primary'
        type='button'
      >
        TEST
      </Button> */}
      {/* <video controls src={'../../public/macbook.webm'} /> */}
      {/* <video autoPlay loop muted>
        <source src={'/macbook.webm'} type='video/webm'></source>
      </video> */}
    </div>
  )
}
