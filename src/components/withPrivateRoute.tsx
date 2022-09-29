import React, { useEffect } from 'react'
import { useAppSelector } from '../store/hooks'
import { useRouter } from 'next/dist/client/router'

interface RootState {
  isAuthenticated: boolean
  user: {
    verified: boolean
  } | null
}

const withPrivateRoute = Component => {
  const AuthenticatedComponent = () => {
    const router = useRouter()
    const auth = useAppSelector<RootState>(state => state.auth)

    useEffect(() => {
      const checkAuthentication = () => {
        if (auth.user?.verified || auth.isAuthenticated) {
          return router.push('/?redirected=true')
        }
      }
      checkAuthentication()
    }, [auth.user?.verified, auth.isAuthenticated, router])

    return !auth.isAuthenticated || !auth.user?.verified ? <Component /> : null
  }

  return AuthenticatedComponent
}

export default withPrivateRoute
