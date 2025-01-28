import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useManual } from '@/features/manual/context/manual-context'

export function ManualImportDialog() {
  const { setIsImportDialogOpen } = useManual()

  return (
    <Dialog open onOpenChange={setIsImportDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>マニュアルのインポート</DialogTitle>
          <DialogDescription>
            CSVファイルからマニュアルをインポートします。
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label
              htmlFor="picture"
              className="block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              CSVファイルを選択
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
              accept=".csv"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsImportDialogOpen(false)}>
            キャンセル
          </Button>
          <Button type="submit">インポート</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}