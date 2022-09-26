import type { AppProps } from 'next/app'
import React from 'react'
import '../../globals.css'
import DarkMode from '../components/DarkMode'
import Navigation from '../components/Navigation'
import { store, persistor } from '../store/store'
import { Provider } from 'react-redux'

// Persist Redux Gate

import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='font-exosoft'>
          <Navigation />
          <DarkMode />
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
