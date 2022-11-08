import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from '../context/hooks/useAuth'

type Props = {
   children: React.ReactNode
}

const protectedRoutes = ['/verified']

const routeIsProtected = (url: string) => {
   return Boolean(protectedRoutes.find(route => url.includes(route)))
}

export const RouteShield = ({ children }: Props) => {
   const router = useRouter()
   const { isAuthenticated } = useAuth()

   const authIsDefined = typeof isAuthenticated !== 'undefined'
   const isAuthorized = routeIsProtected(router.asPath) ? isAuthenticated : true

   const redirect = () => {
      router.replace('/?redirected=true')
   }

   useEffect(() => {
      if (!authIsDefined) return

      if (authIsDefined && !isAuthorized) {
         redirect()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isAuthorized, router.asPath, isAuthenticated])

   useEffect(() => {
      const handleRouteChange = (url: string) => {
         const shouldIntercept =
            routeIsProtected(url) && authIsDefined && !isAuthenticated

         if (shouldIntercept) {
            router.events.emit('routeChangeError')
            redirect()
            throw 'Not authorized'
         }
      }

      router.events.on('routeChangeStart', handleRouteChange)

      return () => {
         router.events.off('routeChangeStart', handleRouteChange)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [router.events, isAuthenticated])

   if (!isAuthorized || !authIsDefined) return null

   return <>{children}</>
}
