import { Outlet } from '@tanstack/react-router'
import { AppSidebar } from '@/components/layout/app-sidebar'
import { createLazyFileRoute } from '@tanstack/react-router'
import { ManualProvider } from '@/features/manual/context/manual-context'
import { columns } from '@/features/manual/components/columns'
import { DataTable } from '@/features/manual/components/data-table'
import { ManualDialogs } from '@/features/manual/components/manuals-dialogs'
import { ManualPrimaryButtons } from '@/features/manual/components/manuals-primary-buttons'
import { manuals } from '@/features/manual/data/manuals'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'

export const Route = createLazyFileRoute('/_authenticated/')({
  component: ManualsPage,
})

function ManualsPage() {
  return (
    <ManualProvider>
      <Header fixed />
      <Main>
        <div className="flex-1">
          <div className="flex items-center justify-between space-y-2">
            <h3 className="text-xl font-bold tracking-tight">
              すべてのマニュアル
            </h3>
            <ManualPrimaryButtons />
          </div>
          <div className="mt-4">
            <DataTable data={manuals} columns={columns} />
          </div>
        </div>
      </Main>
      <ManualDialogs />
    </ManualProvider>
  )
}

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