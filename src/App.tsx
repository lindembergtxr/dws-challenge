import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { theme } from './app.styles'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
`

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello, World!</h1>
    </ThemeProvider>
  )
}
