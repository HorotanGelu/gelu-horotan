import { useContext } from 'react'
import { AlertContext } from '../providers/AlertProvider'

export const useAlert = () => {
   return useContext(AlertContext)
}
