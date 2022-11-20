import React, { createContext, useState } from 'react'
import short from 'short-uuid'

type Alerts = {
   message: string
   type: string
   id: string
}[]

type State = {
   alerts: {
      message: string
      isSuccess: boolean
      id: string
   }[]
   createAlert: (msg: string, isSuccess: boolean) => void
   deleteAlert: (id: string) => void
   setAlerts: React.Dispatch<React.SetStateAction<Alerts | undefined>>
}

type Props = {
   children: React.ReactNode
}

export const AlertContext = createContext<State>({} as State)

export const AlertProvider = ({ children }: Props) => {
   const [alerts, setAlerts] = useState([])

   const deleteAlert = (id: string) => {
      setAlerts(prevState => prevState.filter(alert => alert.id !== id))
   }

   const createAlert = async (
      msg: string,
      isSuccess: boolean,
      timeout = 5000
   ) => {
      const uuid = short.generate()

      const newAlert = {
         message: msg,
         id: uuid,
         isSuccess: isSuccess,
      }

      setAlerts(prevState => [...prevState, newAlert])

      setTimeout(() => {
         return deleteAlert(newAlert.id)
      }, timeout)
   }

   return (
      <AlertContext.Provider
         // displayName='Alert Context'
         value={{
            alerts,
            createAlert,
            setAlerts,
            deleteAlert,
         }}
      >
         {children}
      </AlertContext.Provider>
   )
}
