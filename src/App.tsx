import { ThemeProvider } from 'styled-components'

import { theme } from './app.styles'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello, World!</h1>
    </ThemeProvider>
  )
}
