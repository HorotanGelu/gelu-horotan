import type { AppProps } from 'next/app'
import React from 'react'
import '../../globals.css'
import { Providers } from '../context/Providers'
import { RouteShield } from '../components/RouteShield'
import BaseLayout from '../components/layouts/BaseLayout'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Providers>
            <RouteShield>
               <BaseLayout>
                  <Component {...pageProps} />
               </BaseLayout>
            </RouteShield>
         </Providers>
      </>
   )
}

export default MyApp
