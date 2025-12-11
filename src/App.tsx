import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { theme, GlobalStyle } from '@/styles'
import { MainLayout } from '@/components'
import { PostsPage, PostDetailsPage } from '@/pages'
import { PostsContextProvider } from '@/features/posts'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <PostsContextProvider>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Navigate to="/posts" replace />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/posts/:id" element={<PostDetailsPage />} />
              </Route>
            </Routes>
          </PostsContextProvider>
        </ThemeProvider>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
