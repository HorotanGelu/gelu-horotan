import React, { createContext, useEffect, useState } from 'react'

// API
import axios from 'axios'

type Props = {
   children: React.ReactNode
}

type Callbacks = {
   onAuthSuccess: () => void
}

type User = {
   avatar?: string
   email: string
   firstName: string
   lastName: string
   verified: boolean
   _id: string
   __v: number
}

type State = {
   isLoading: boolean
   isAuthenticated: boolean | undefined
   user?: User
   error?: Error
   setError: React.Dispatch<React.SetStateAction<Error | undefined>>
   login: (credentials: LoginCredentials) => Promise<Error | undefined>
   register: (credentials: RegisterCredentials) => Promise<Error | undefined>
   fetchUser: () => Promise<Error | undefined>
   logout: () => Promise<void>

   setCallbacks: React.Dispatch<React.SetStateAction<Callbacks | undefined>>
}

export type LoginCredentials = {
   email: string
   password: string
}
type RegisterCredentials = {
   firstName: string
   lastName: string
   email: string
   password: string
}

export const AuthContext = createContext<State>({} as State)

export const AuthProvider = ({ children }: Props) => {
   const [user, setUser] = useState()
   const [error, setError] = useState<Error>()
   const [isLoading, setIsLoading] = useState(true)
   const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
      undefined
   )

   const [callbacks, setCallbacks] = useState<Callbacks>()
   useEffect(() => {
      if (isAuthenticated) {
         callbacks?.onAuthSuccess()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isAuthenticated])

   useEffect(() => {
      const token = localStorage.getItem('token')
      if (token) {
         setIsAuthenticated(true)

         // Test the current stored token
         const fetchCurrentUser = async () => {
            try {
               const res = await axios.get('http://localhost:5000/api/auth', {
                  headers: {
                     'Content-Type': 'application/json',
                     'x-auth-token': `${localStorage.getItem('token')}`,
                  },
               })
               localStorage.setItem('user', JSON.stringify(res.data))
               setIsLoading(false)
               return res.data
            } catch (error) {
               console.error(error)
               await logout()
               return error
            }
         }
         fetchCurrentUser()
      } else {
         setIsAuthenticated(false)
         setIsLoading(false)
      }

      const storedUser = localStorage.getItem('user')
      if (storedUser) {
         setUser(JSON.parse(storedUser))
      }
      window.addEventListener('logout', async () => {
         await logout()
      })
   }, [])

   const register = async ({
      firstName,
      lastName,
      email,
      password,
   }: RegisterCredentials) => {
      const body = JSON.stringify({ firstName, lastName, email, password })

      const config = {
         headers: {
            'Content-Type': 'application/json',
         },
      }

      setIsLoading(true)

      try {
         const res = await axios.post('/backend/users', body, config)
         localStorage.setItem('token', JSON.stringify(res.data.token))

         setError(undefined)
         setIsAuthenticated(false)
         setIsLoading(false)
      } catch (err) {
         setError(error)
         setIsLoading(false)
         return error
      }
   }

   const login = async ({ email, password }: LoginCredentials) => {
      const body = { email, password }
      setIsLoading(true)

      try {
         const res = await axios.post('/backend/auth', body)

         localStorage.setItem('token', res.data.token)

         await fetchUser()
         setError(undefined)

         setIsLoading(false)
         return res.data
      } catch (error) {
         await logout()
         console.error(error)
         setIsLoading(false)
         return error
      }
   }
   const logout = async () => {
      setIsLoading(true)

      localStorage.removeItem('token')
      localStorage.removeItem('user')

      setUser(undefined)
      setIsAuthenticated(false)
      setIsLoading(false)
   }

   const fetchUser = async () => {
      setIsLoading(true)

      try {
         const res = await axios.get('http://localhost:5000/api/auth', {
            headers: {
               'Content-Type': 'application/json',
               'x-auth-token': `${localStorage.getItem('token')}`,
            },
         })
         localStorage.setItem('user', JSON.stringify(res.data))
         setIsAuthenticated(true)
         setUser(res.data)
         setError(undefined)
         setIsLoading(false)
         return res.data
      } catch (error) {
         console.error(error)
         setIsLoading(false)
         return error
      }
   }

   return (
      <AuthContext.Provider
         // displayName={'Auth Context'}
         value={{
            isLoading,
            isAuthenticated,
            user,
            error,
            setError,
            login,
            logout,
            register,
            fetchUser,
            setCallbacks,
         }}
      >
         {children}
      </AuthContext.Provider>
   )
}
