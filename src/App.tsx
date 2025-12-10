import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { theme, GlobalStyle } from '@/styles'
import { BackgroundBlur } from '@/components'
import { HomePage } from '@/pages'

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
