import React, { useRef } from 'react'
import Button from '../components/Button'

export default function Home() {
  const myRef = useRef<HTMLDivElement>(null)
  const executeScroll = () => {
    if (null !== myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <>
      <div
        className={
          'flex  justify-start items-center w-full h-screen theme-color '
        }
      >
        <div className='flex flex-col w-[45%] p-20'>
          <h1 className=' text-primary_t_2  p-2'>
            <span className='text-secondary dark:text-primary'>
              {' '}
              Gelu Horotan
            </span>{' '}
            <br /> Frontend Web Developer
          </h1>
          <Button
            rounded
            className=' bg-amaranth text-secondary  p-2'
            type='button'
            handler={executeScroll}
          >
            SEE MY PROJECTS
          </Button>
        </div>

        {/* <video
          autoPlay
          muted
          className=' w-[75%] theme-color   absolute -right-28'
        >
          <source src={'/macbook.webm'} type='video/webm'></source>
        </video> */}
      </div>
      <div
        ref={myRef}
        className='h-screen bg-red-400 w-full scroll-smooth flex items-center justify-center gap-4'
      >
        <div className='w-60 h-96 bg-primary'></div>
        <div className='w-60  h-96  bg-primary'></div>
        <div className='w-60  h-96 bg-primary'></div>
      </div>
      <div className='h-screen bg-yellow-400 w-full'>RECOMM</div>
      <div className='h-screen bg-blue-400 w-full'>MEETINGS</div>
    </>
  )
}
