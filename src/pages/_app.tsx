import type { AppProps } from 'next/app'
import React from 'react'
import '../../globals.css'
import { Providers } from '../context/Providers'
import Navigation from '../components/Navigation'
import { RouteShield } from '../components/RouteShield'

import useBreadcrumbs from '../customHooks/useBreadcrumbs'
import Breadcrumb from '../components/Breadcrumb'

function MyApp({ Component, pageProps }: AppProps) {
   const [breadcrumbs] = useBreadcrumbs()
   console.log(breadcrumbs)
   return (
      <>
         <Providers>
            <Navigation />

            <RouteShield>
               <Component {...pageProps} />
               <Breadcrumb />
            </RouteShield>
         </Providers>
      </>
   )
}

export default MyApp
