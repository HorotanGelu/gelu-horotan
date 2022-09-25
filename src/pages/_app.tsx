import type { AppProps } from 'next/app'
import React from 'react'
import '../../globals.css'
import DarkMode from '../components/DarkMode'
import Navigation from '../components/Navigation'
import store from '../store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className='font-exosoft'>
        <Navigation />
        <DarkMode />
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
