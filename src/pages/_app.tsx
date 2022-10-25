import type { AppProps } from 'next/app'
import React from 'react'
import '../../globals.css'
import { Providers } from '../context/Providers'
import Navigation from '../components/Navigation'
import { RouteShield } from '../components/RouteShield'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Providers>
        <Navigation />
        <RouteShield>
          <Component {...pageProps} />
        </RouteShield>
      </Providers>
    </>
  )
}

export default MyApp
