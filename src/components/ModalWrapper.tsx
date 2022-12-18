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
         <div className='fixed inset-0 flex items-center justify-center'>
            <Dialog.Panel
               className={
                  'bg-secondary w-1/2 h-1/2 rounded-[3rem]   p-7 flex flex-col items-center justify-between'
               }
            >
               <IoMdClose
                  size={32}
                  onClick={() => setIsOpen(false)}
                  className='cursor-pointer self-end'
               />

               {children}

               {/* <div className='w-full bg-yellow-400 flex items-center justify-center gap-12'>
                  <button onClick={() => setIsOpen(false)}>Deactivate</button>
                  <button onClick={() => setIsOpen(false)}>Cancel</button>
               </div> */}
            </Dialog.Panel>
         </div>
      </Dialog>
   )
}

export default ModalWrapper
