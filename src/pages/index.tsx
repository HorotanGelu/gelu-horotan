import React, { useRef } from 'react'
import Button from '../components/Button'
import Logo from '../components/svgs/Logo'
import { useAuth } from '../context/hooks/useAuth'

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
            <div className='flex flex-col w-1/2 p-20'>
               <h1 className='text-secondary dark:text-primary   p-2'>
                  Gelu Horotan
                  <span className='text-accent_s'> Software Developer</span>
               </h1>
               <Button
                  rounded
                  className=' bg-accent text-secondary  p-2'
                  type='button'
                  handler={executeScroll}
               >
                  SEE MY PROJECTS
               </Button>
            </div>

            <Logo size={256}></Logo>
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
