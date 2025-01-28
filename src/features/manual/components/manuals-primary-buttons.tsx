import { PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useManual } from '@/features/manual/context/manual-context'

export function ManualPrimaryButtons() {
  const { setIsMutateDrawerOpen } = useManual()

  return (
    <div className="flex items-center space-x-4">
      <Button variant="secondary" onClick={() => setIsMutateDrawerOpen(true)}>
        <PlusCircle className="mr-2 h-4 w-4" />
        新規マニュアル作成
      </Button>
      {/* <Button variant="outline" onClick={() => setIsImportDialogOpen(true)}>
        <Upload className="mr-2 h-4 w-4" />
        インポート
      </Button> */}
    </div>
  )
}