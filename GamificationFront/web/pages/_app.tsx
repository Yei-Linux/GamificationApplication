import '../styles/globals.css'
import React from 'react'
import { theme } from '../styles/theme'
import { ThemeProvider } from '@emotion/react'

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme.LIGHT}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
