import { ManualProvider } from '@/features/manual/context/manual-context'
import { columns } from '@/features/manual/components/columns'
import { DataTable } from '@/features/manual/components/data-table'
import { ManualDialogs } from '@/features/manual/components/manuals-dialogs'
import { ManualPrimaryButtons } from '@/features/manual/components/manuals-primary-buttons'
import { manuals } from '@/features/manual/data/manuals'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'

export default function ManualsPage() {
  return (
    <ManualProvider>
      <Header fixed />
      <Main>
        <div className='flex-1 space-y-4 p-6'>
          <div className='flex items-center justify-between space-y-2'>
            <h3 className='text-xl font-bold tracking-tight'>公開中のマニュアル</h3>
              <ManualPrimaryButtons />
            </div>
            <DataTable data={manuals} columns={columns} />
          </div>
        </Main>
        <ManualDialogs />
      </ManualProvider>
  )
}