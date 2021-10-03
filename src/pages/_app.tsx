import React from 'react'
import { Provider } from 'react-redux'

import type { AppProps } from 'next/app'
import '/src/styles/index.scss'
import store from '../store'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
