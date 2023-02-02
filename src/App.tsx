import AOS from 'aos'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AppRoutes } from '~/routes'
import { GlobalStyle, theme } from '~/styles'

import 'semantic-ui-css/semantic.min.css'
import 'aos/dist/aos.css'

export function App() {
  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
