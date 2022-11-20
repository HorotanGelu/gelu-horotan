import type { AppProps } from 'next/app'
import type { NextPage } from 'next'

import React, { ReactElement, ReactNode } from 'react'
import '../../globals.css'
import { Providers } from '../context/Providers'
import { RouteShield } from '../components/RouteShield'
import BaseLayout from '../components/layouts/BaseLayout'

type NextPageWithLayout = NextPage & {
   getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
   Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   const getLayout = Component.getLayout ?? (page => page)
   return (
      <>
         <Providers>
            <RouteShield>
               <BaseLayout>
                  {getLayout(<Component {...pageProps} />)}
               </BaseLayout>
            </RouteShield>
         </Providers>
      </>
   )
}

export default MyApp
