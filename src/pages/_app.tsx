import { AppProps } from 'next/app'
import React from 'react'
import '../../globals.css'
import DarkMode from '../components/DarkMode'
import Navigation from '../components/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='font-exosoft'>
      <Navigation />
      <DarkMode />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
