import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { theme } from '@/styles/app.styles'
import { BackgroundBlur } from '@/components/backgroundBlur'
import { HomePage } from '@/pages/home'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    overscroll-behavior: none;
    box-sizing: border-box;
  }
  body {
    position: relative;
    width: 100vw;
    min-height: 400vh;
    font-family: 'Open Sans', sans-serif;
    background-color: white;
  }
`

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BackgroundBlur />

          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
