import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AppRoutes } from '~/routes'
import { GlobalStyle, theme } from '~/styles'
import 'semantic-ui-css/semantic.min.css'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
