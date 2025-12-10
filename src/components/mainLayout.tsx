import { Outlet } from 'react-router-dom'

import { Header } from '@/features/header'

export function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
