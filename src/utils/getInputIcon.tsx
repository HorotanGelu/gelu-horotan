import React from 'react'
import { AiFillMail, AiFillLock } from 'react-icons/ai'
import { ImMan } from 'react-icons/im'

const getInputIcon = (id: string, error: string) => {
   const props = {
      className: `${error ? 'text-error' : 'text-success'}`,
   }
   switch (id) {
      case 'email':
         return <AiFillMail {...props}></AiFillMail>
      case 'firstName':
         return <ImMan {...props}></ImMan>
      case 'lastName':
         return <ImMan {...props}></ImMan>
      case 'password':
         return <AiFillLock {...props}></AiFillLock>
      case 'password2':
         return <AiFillLock {...props}></AiFillLock>
      case 'oldPassword':
         return <AiFillLock {...props}></AiFillLock>

      default:
         return null
   }
}

export default getInputIcon
