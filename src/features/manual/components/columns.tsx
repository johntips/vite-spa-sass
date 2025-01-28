import { type ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { type Manual, type LabelValue } from '../data/schema'
import { labels, statuses, types, authors } from '../data/data'
import { DataTableColumnHeader } from '@/features/manual/components/data-table-column-header'
import { DataTableRowActions } from '@/features/manual/components/data-table-row-actions'
import { Badge } from '@/components/ui/badge'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

export const columns: ColumnDef<Manual>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="全て選択"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="行を選択"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="タイトル"/>
    ),
    cell: ({ row }) => {
      const type = types[row.getValue('type') as keyof typeof types]
      return (
        <div className="flex">
          <div className="flex items-center py-2">
            <img src={type.icon} alt={type.label} className="h-4 flex-shrink-0" />
            <p className="ml-4 truncate font-medium w-[170px]" title={row.getValue('title')}>
              {row.getValue('title')}
            </p>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: 'type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="種類"/>
    ),
    cell: ({ row }) => {
      const type = types[row.getValue('type') as keyof typeof types]
      return (
        <div className="flex items-center py-2">
          <img src={type.icon} alt={type.label} className="h-4 w-4 flex-shrink-0" />
          <p className="ml-2 truncate w-[170px]" title={type.label}>{type.label}</p>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: false,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ステータス"/>
    ),
    cell: ({ row }) => {
      const status = statuses[row.getValue('status') as keyof typeof statuses]
      const Icon = status.icon

      return (
        <div className="flex items-center py-2">
          <Icon className="h-4 w-4 flex-shrink-0" />
          <p className="ml-2 truncate w-[170px]" title={status.label}>{status.label}</p>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: false,
  },
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="更新日時"/>
    ),
    cell: ({ row }) => {
      const date = format(row.getValue('updatedAt'), 'yyyy/MM/dd HH:mm', {
        locale: ja,
      })
      return (
        <div className="flex items-center py-2">
          <p className="truncate w-[210px]" title={date}>
            {date}
          </p>
        </div>
      )
    },
  },
  {
    accessorKey: 'author',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="編集者"/>
    ),
    cell: ({ row }) => {
      const author = authors.find(author => author.value === row.getValue('author'))
      const label = author?.label ?? row.getValue('author')
      return (
        <div className="flex items-center py-2">
          <p className="truncate w-[210px]" title={label}>{label}</p>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      const authorValue = row.getValue(id) as string
      return value.length === 0 || value.includes(authorValue)
    },
    enableSorting: false,
  },
  {
    accessorKey: 'labels',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ラベル"/>
    ),
    cell: ({ row }) => {
      const labelValues: string[] = row.getValue('labels')
      const labelMap = new Map(labels.map(label => [label.value, label.label]))

      return (
        <div className="flex flex-wrap gap-2 py-2">
          {labelValues.map((value) => {
            const label = labelMap.get(value as LabelValue)
            const truncatedLabel = label && label.length > 8 ? `${label.slice(0, 8)}...` : label
            return (
              <Badge key={value} variant="outline" className="rounded-full" title={label}>
                {truncatedLabel}
              </Badge>
            )
          })}
        </div>
      )
    },
    filterFn: (row, id, value) => {
      const labels: string[] = row.getValue(id)
      return labels.some((label) => value.includes(label))
    },
    enableSorting: false,
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]