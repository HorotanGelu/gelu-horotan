import { AppProps } from 'next/app'
import React from 'react'
import '../../globals.css'
import Navigation from '../components/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
