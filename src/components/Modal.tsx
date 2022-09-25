import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({ tabs, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div
        onClick={openModal}
        className='rounded-md bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
      >
        SIGN IN
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='fixed z-10' onClose={closeModal}>
          <div className='fixed inset-0 bg-black/50' aria-hidden='true' />
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex  min-h-screen items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full   min-h-full bg-white max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900 justify-center flex m-8'
                  >
                    {children}
                    {/* Become a member */}
                  </Dialog.Title>
                  <Tabs.Root defaultValue='tab1' orientation='vertical'>
                    <Tabs.List
                      aria-label='tabs example'
                      className='flex w-full justify-center  '
                    >
                      {tabs &&
                        tabs.map((tab, index) => {
                          return (
                            <Tabs.Trigger
                              value={`tab${index + 1}`}
                              key={index}
                              className='odd:rounded-tl-xl even:rounded-tr-xl px-8 py-1 relative'
                              onClick={() => {
                                setActiveTab(index)
                              }}
                            >
                              {tab.title}
                              <AnimatePresence>
                                <motion.span
                                  initial={{ scaleX: 0 }}
                                  animate={{
                                    scaleX: `${activeTab === index ? 1 : 0}`,
                                  }}
                                  exit={{ scaleX: 0, originX: 0.5 }}
                                  transition={{
                                    duration: 1,
                                    ease: 'easeInOut',
                                  }}
                                  className='absolute my-0 mx-auto bottom-0 left-0 w-full  h-0.5 bg-black transition-scale ease-in-out '
                                />
                              </AnimatePresence>
                            </Tabs.Trigger>
                          )
                        })}
                    </Tabs.List>
                    {tabs &&
                      tabs.map((tab, index) => {
                        return (
                          <Tabs.Content value={`tab${index + 1}`} key={index}>
                            {tab.component}
                          </Tabs.Content>
                        )
                      })}
                  </Tabs.Root>

                  {/* <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal
