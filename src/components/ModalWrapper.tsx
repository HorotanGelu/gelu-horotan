import React from 'react'
import { Dialog } from '@headlessui/react'

// Close Icon
import { IoMdClose } from 'react-icons/io'

type Props = {
   isOpen: boolean
   setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
   children: React.ReactNode
}

const ModalWrapper = ({ isOpen, setIsOpen, children }: Props) => {
   return (
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
         <div className='fixed inset-0 bg-black/60' aria-hidden='true' />
         <div className='fixed inset-0 flex items-center justify-center p-14'>
            <Dialog.Panel
               className={
                  'bg-red-400 w-full h-full p-7 flex flex-col items-center justify-between'
               }
            >
               <div className='self-end'>
                  <IoMdClose
                     size={32}
                     onClick={() => setIsOpen(false)}
                     className='cursor-pointer'
                  ></IoMdClose>
               </div>
               {children}

               <div className='w-full bg-yellow-400 flex items-center justify-center gap-12'>
                  <button onClick={() => setIsOpen(false)}>Deactivate</button>
                  <button onClick={() => setIsOpen(false)}>Cancel</button>
               </div>
            </Dialog.Panel>
         </div>
      </Dialog>
   )
}

export default ModalWrapper
