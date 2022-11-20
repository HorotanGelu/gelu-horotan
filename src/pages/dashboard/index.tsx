import React, { ReactElement } from 'react'

import { AiFillEye, AiFillLike } from 'react-icons/ai'

import { MdVerified } from 'react-icons/md'
import { GoUnverified } from 'react-icons/go'

import DashLayout from '../../components/layouts/DashLayout'
import Image from 'next/image'

import { useAuth } from '../../context/hooks/useAuth'
import Avatar from '../../components/Avatar'

function Dashboard() {
   const { user } = useAuth()

   return (
      <div className='w-full h-full flex items-center justify-center  '>
         <>
            <div className='text-secondary grid grid-cols-2    gap-8      w-full h-full'>
               <div className='w-full h-full bg-secondary rounded-3xl  flex flex-col items-center justify-evenly px-2   '>
                  <h2 className='text-primary  '>
                     <span className=' font-semibold'> Hi,</span>{' '}
                     {user?.firstName}!
                  </h2>
                  <section className='flex flex-col items-center justify-center gap-4'>
                     <Avatar size='large' />

                     <div className='text-primary flex items-center gap-4'>
                        <h6>
                           {user?.firstName}&nbsp;{user?.lastName}
                        </h6>

                        <div className='flex items-center gap-4'>
                           {user?.verified ? (
                              <MdVerified size={24} color={'blue'} />
                           ) : (
                              <GoUnverified size={24} color={'blue'} />
                           )}
                        </div>
                     </div>
                     <h6 className='text-primary'> {user?.email}</h6>
                  </section>

                  <section className='flex flex-col items-center justify-center gap-4'>
                     <h5 className='text-primary font-bold  w-full text-right'>
                        Your last blog posts
                     </h5>
                     <div className='text-primary font-medium    w-full grid grid-col-1 gap-y-4 '>
                        <div className=' flex justify-center gap-8 items-center rounded-xl bg-secondary_s px-4 py-2 '>
                           <Image
                              src={'/256.png'}
                              className='rounded-xl'
                              alt={'blog'}
                              width={64}
                              height={64}
                           />

                           <div className='flex flex-col w-full  '>
                              <h5 className='font-semibold'>
                                 React is Awesome!
                              </h5>
                              <div className='flex items-center justify-start gap-4'>
                                 <div className='flex flex-col items-center justify-center '>
                                    <AiFillEye /> 120
                                 </div>
                                 <div className='flex flex-col items-center justify-center '>
                                    <AiFillLike /> 120
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className='flex justify-center  gap-8 items-center rounded-xl bg-secondary_s px-4 py-2 hover:scale-105 duration-200 ease-in-out '>
                           <Image
                              src={'/256.png'}
                              className='rounded-xl'
                              alt={'blog'}
                              width={64}
                              height={64}
                           />
                           <div className='flex flex-col w-full  '>
                              <h5 className='font-semibold'>
                                 NodeJS is Awesome!
                              </h5>
                              <div className='flex items-center justify-start gap-4'>
                                 <div className='flex flex-col items-center justify-center '>
                                    <AiFillEye /> 120
                                 </div>
                                 <div className='flex flex-col items-center justify-center '>
                                    <AiFillLike /> 120
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className=' flex justify-center gap-8 items-center rounded-xl bg-secondary_s px-4 py-2  '>
                           <Image
                              src={'/256.png'}
                              className='rounded-xl'
                              alt={'blog'}
                              width={64}
                              height={64}
                           />

                           <div className='flex flex-col  w-full'>
                              <h5 className='font-semibold'>
                                 Ii trag la mue lui Alex!
                              </h5>
                              <div className='flex items-center justify-start gap-4'>
                                 <div className='flex flex-col items-center justify-center '>
                                    <AiFillEye /> 120
                                 </div>
                                 <div className='flex flex-col items-center justify-center '>
                                    <AiFillLike /> 120
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </section>
               </div>
            </div>
         </>
      </div>
   )
}

Dashboard.getLayout = (page: ReactElement) => {
   return <DashLayout>{page}</DashLayout>
}

export default Dashboard
