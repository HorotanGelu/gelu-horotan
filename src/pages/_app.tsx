import type { AppProps } from 'next/app'
import React from 'react'
import '../../globals.css'
import { Providers } from '../context/Providers'
import Navigation from '../components/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Providers>
        <Navigation />
        <Component {...pageProps} />
      </Providers>
    </>
  )
}

export default MyApp
