import React, { useState, useRef } from 'react'

import Button from '../components/Button'
// import ProjectForm from '../components/form/ProjectForm'
import ModalWrapper from '../components/ModalWrapper'
import HeroIllustration from '../components/svgs/HeroIllustration'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const myRef = useRef<HTMLDivElement>(null)
  const executeScroll = () => {
    if (null !== myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <>
      <div className={'flex  justify-evenly  items-center w-full h-screen  '}>
        <div className='flex flex-col  h-screen justify-center w-1/2 '>
          <h1 className='text-secondary dark:text-primary   p-2'>
            Gelu Horotan <br />
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

        <HeroIllustration />
        {/* <Image src={'/test.jpg'} width={64} height={64}></Image> */}
      </div>
      <div
        ref={myRef}
        className='h-screen bg-red-700 w-full scroll-smooth flex items-center justify-center gap-20'
      >
        <Button type='button' onClick={() => setIsOpen(true)}>
          ADD PROJECT
          <ModalWrapper
            title='Add Project'
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            backgroundColor='bg-secondary'
          >
            {/* <ProjectForm /> */}
          </ModalWrapper>
        </Button>
      </div>
      <div></div>
    </>
  )
}
