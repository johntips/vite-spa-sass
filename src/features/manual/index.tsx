import { ManualProvider } from '@/features/manual/context/manual-context'
import { columns } from '@/features/manual/components/columns'
import { DataTable } from '@/features/manual/components/data-table'
import { ManualDialogs } from '@/features/manual/components/manuals-dialogs'
import { ManualPrimaryButtons } from '@/features/manual/components/manuals-primary-buttons'
import { manuals } from '@/features/manual/data/manuals'
import { Search } from '@/components/search'
import { Header } from '@/components/layout/header'
import { ThemeSwitch } from '@/components/theme-switch'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Main } from '@/components/layout/main'

export default function ManualsPage() {
  return (
    <ManualProvider>
      {/* <Header fixed>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header> */}

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