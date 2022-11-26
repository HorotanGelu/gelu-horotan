import Image from 'next/image'
import React, { useState, useRef } from 'react'

import Button from '../components/Button'
import ModalWrapper from '../components/ModalWrapper'
import Logo from '../components/svgs/Logo'

export default function Home() {
   const [isOpen, setIsOpen] = useState(true)
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
                  onClick={executeScroll}
               >
                  SEE MY PROJECTS
               </Button>
            </div>

            {/* <Image src={'/test.jpg'} width={64} height={64}></Image> */}
         </div>
         <div
            ref={myRef}
            className='h-screen bg-red-700 w-full scroll-smooth flex items-center justify-center gap-20'
         >
            <Button type='button' onClick={() => setIsOpen(true)}>
               ADD PROJECT
               <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
                  <div className='h-full bg-blue-200 flex items-center justify-center w-full'>
                     TEST
                  </div>
               </ModalWrapper>
            </Button>
         </div>
         <div className='h-screen bg-yellow-400 w-full'>RECOMM</div>
         <div className='h-screen bg-blue-400 w-full'>MEETINGS</div>
      </>
   )
}
