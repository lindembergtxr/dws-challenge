import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { theme } from './styles/app.styles'
import { BackgroundBlur } from './components/backgroundBlur'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    overscroll-behavior: none;
  }
  body {
    position: relative;
    width: 100vw;
    min-height: 400vh;
    font-family: 'Open Sans', sans-serif;
    background-color: white;
  }
`

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BackgroundBlur />
      <h1>Hello, World!</h1>
    </ThemeProvider>
  )
}
