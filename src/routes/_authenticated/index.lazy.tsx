import { Outlet } from '@tanstack/react-router'
import { AppSidebar } from '@/components/layout/app-sidebar'

export function Component() {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <AppSidebar className="shrink-0" />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
} 