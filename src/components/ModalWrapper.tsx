import React from 'react'
import { Dialog } from '@headlessui/react'

// Close Icon
import { IoMdClose } from 'react-icons/io'

type Props = {
  isOpen: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
  title: string
  backgroundColor?: string
  className?: string
}

const ModalWrapper = ({
  isOpen,
  setIsOpen,
  children,
  className,
  title,
  backgroundColor,
}: Props) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className='fixed inset-0 bg-black/60' aria-hidden='true' />
      <div className='fixed inset-0 flex items-center justify-center'>
        <Dialog.Panel
          className={`${
            !backgroundColor ? 'bg-primary_t' : backgroundColor
          } w-max h-max p-7  rounded-[3rem]   flex flex-col items-center justify-between`}
        >
          <div className='flex items-center justify-between  w-full'>
            <h5 className='text-secondary'>{title} </h5>
            <IoMdClose
              size={32}
              onClick={() => setIsOpen(false)}
              className='cursor-pointer self-end'
            />
          </div>

          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default ModalWrapper
