import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './providers/AuthProvider'

const queryClient = new QueryClient()

type Props = {
   children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
   return (
      <QueryClientProvider client={queryClient}>
         <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
   )
}
