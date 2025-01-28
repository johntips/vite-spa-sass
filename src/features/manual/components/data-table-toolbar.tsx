import { Cross2Icon } from '@radix-ui/react-icons'
import { type Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DataTableViewOptions } from '@/features/manual/components/data-table-view-options'
import { DataTableFacetedFilter } from '@/features/manual/components/data-table-faceted-filter'
import { labels, authors, types } from '@/features/manual/data/data'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="タイトルを検索..."
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn('type') && (
            <DataTableFacetedFilter
                column={table.getColumn('type')}
                title="種類"
                options={Object.entries(types).map(([value, item]) => ({
                label: item.label,
                value,
                icon: item.icon,
                }))}
            />
        )}
        {/* {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title="ステータス"
            options={Object.entries(statuses).map(([value, item]) => ({
              label: item.label,
              value,
              icon: item.icon,
            }))}
          />
        )} */}
        {table.getColumn('author') && (
          <DataTableFacetedFilter
            column={table.getColumn('author')}
            title="編集者"
            options={authors.map((author) => ({
              label: author.label,
              value: author.value,
            }))}
          />
        )}
        {table.getColumn('labels') && (
          <DataTableFacetedFilter
            column={table.getColumn('labels')}
            title="ラベル"
            options={labels.map((label) => ({
              label: label.label,
              value: label.value,
            }))}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            フィルターをリセット
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}