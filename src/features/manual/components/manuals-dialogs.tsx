import { useManual } from '@/features/manual/context/manual-context'
import { ManualImportDialog } from '@/features/manual/components/manuals-import-dialog'
import { ManualMutateDrawer } from '@/features/manual/components/manuals-mutate-drawer'

export function ManualDialogs() {
  const { isImportDialogOpen, isMutateDrawerOpen } = useManual()

  return (
    <>
      {isImportDialogOpen && <ManualImportDialog />}
      {isMutateDrawerOpen && <ManualMutateDrawer />}
    </>
  )
}