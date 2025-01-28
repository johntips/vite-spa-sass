import { type Row } from '@tanstack/react-table'
import { MoreHorizontal, Pen, Copy, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { useManual } from '@/features/manual/context/manual-context'
import { type Manual } from '@/features/manual/data/schema'

interface DataTableRowActionsProps {
  row: Row<Manual>
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  const manual = row.original
  const { setSelectedManual, setIsMutateDrawerOpen } = useManual()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">メニューを開く</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem
          onClick={() => {
            setSelectedManual(manual)
            setIsMutateDrawerOpen(true)
          }}
        >
          <Pen className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          編集
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          複製
          <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Trash className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          削除
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}