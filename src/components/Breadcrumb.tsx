import React from 'react'
import BreadcrumbItem from './BreadcrumbItem'
import useBreadcrumbs from '../customHooks/useBreadcrumbs'
import { FaHome } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'

const Breadcrumb = () => {
   const [breadcrumbs] = useBreadcrumbs()

   if (breadcrumbs && breadcrumbs.length !== 0)
      return (
         <nav className=' my-20 px-14 absolute w-full'>
            <ol className='flex divide-x-4  justify-start items-center   w-1/2 bg-secondary_t_2  rounded-xl '>
               <BreadcrumbItem className='   rounded-l-lg  py-2 px-4 ' href='/'>
                  <FaHome className='text-primary ' />
               </BreadcrumbItem>

               {breadcrumbs &&
                  breadcrumbs.map(breadcrumb => (
                     <>
                        <IoIosArrowForward />

                        <BreadcrumbItem
                           className='py-2 px-2  text-xs text-primary  cursor-pointer   '
                           key={breadcrumb.href}
                           href={breadcrumb.href}
                        >
                           {breadcrumb.label.toUpperCase()}
                        </BreadcrumbItem>
                     </>
                  ))}
            </ol>
         </nav>
      )
}

export default Breadcrumb
