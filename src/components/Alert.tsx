import React, { useRef, useState } from 'react'
import { motion, useMotionValue, AnimatePresence } from 'framer-motion'
import { MdTaskAlt, MdErrorOutline, MdClose } from 'react-icons/md'
import { useAlert } from '../context/hooks/useAlert'

type Props = {
   id: string
   message: string
   isSuccess: boolean
}

const Alert = ({ id, message, isSuccess }: Props) => {
   const { deleteAlert } = useAlert()

   const [constrained] = useState<boolean>(true)
   const [direction, setDirection] = useState<string>()

   const alertElem = useRef(null)
   const x = useMotionValue(0)

   const getDirection = () => {
      return x.getVelocity() >= 1
         ? 'right'
         : x.getVelocity() <= -1
         ? 'left'
         : undefined
   }

   const getTrajectory = () => {
      setDirection(getDirection())
   }
   console.log(x.getVelocity())
   const flyAway = (min: number, id: string) => {
      if (direction && Math.abs(x.getVelocity()) > min) {
         console.log(x.getVelocity(), 'DELETE')
         deleteAlert(id)
      }
   }

   return (
      <AnimatePresence>
         <motion.div
            layout
            key={id}
            transition={spring}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 5000, opacity: 0 }}
            dragConstraints={
               constrained && { left: 0, right: 0, top: 0, bottom: 0 }
            }
            dragElastic={1}
            drag='x'
            ref={alertElem}
            style={{ x }}
            onDrag={getTrajectory}
            onDragEnd={() => flyAway(500, id)}
            className=' bg-secondary text-primary  h-16 p-2 relative rounded-xl   cursor-pointer '
         >
            <div className='flex items-center justify-between   h-full w-full '>
               <div className='flex  items-center  gap-2   justify-center'>
                  {isSuccess ? (
                     <MdTaskAlt size={24} className={'text-success'} />
                  ) : (
                     <MdErrorOutline size={24} className={'text-error'} />
                  )}

                  <p className='text-base text-primary'>{message}</p>
               </div>
               <div className='h-full  flex items-start'>
                  <MdClose size={16} className=' text-primary' />
               </div>
            </div>

            <motion.div
               animate={{ width: 0 }}
               initial={{ width: '100%' }}
               transition={{ ease: 'linear', duration: 5 }}
               className={`h-1 ${
                  isSuccess ? 'bg-success' : 'bg-error'
               } bottom-0 left-0 absolute rounded-xl  `}
            />
         </motion.div>
      </AnimatePresence>
   )
}

const spring = {
   type: 'spring',
   stiffness: 700,
   damping: 15,
}

export default Alert
