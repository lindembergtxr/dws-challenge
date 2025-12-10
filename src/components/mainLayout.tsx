import { Outlet } from 'react-router-dom'

import { Header } from '@/features/header'
import { useScrollToTop } from '@/hooks'
import { BackgroundBlur } from './backgroundBlur'

export function MainLayout() {
  useScrollToTop()

  return (
    <div>
      <BackgroundBlur />

      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
