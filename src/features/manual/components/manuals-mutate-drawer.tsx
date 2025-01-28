import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useManual } from '@/features/manual/context/manual-context'
import { manualSchema, type Manual } from '@/features/manual/data/schema'
import { statuses, types, authors } from '@/features/manual/data/data'

export function ManualMutateDrawer() {
  const { isMutateDrawerOpen, setIsMutateDrawerOpen, selectedManual } = useManual()

  const defaultValues: Partial<Manual> = {
    id: '',
    title: '',
    type: 'movie',
    status: 'draft',
    author: 'shota_sato',
    updatedAt: new Date(),
    labels: [],
  }

  const form = useForm<Manual>({
    resolver: zodResolver(manualSchema),
    defaultValues: selectedManual ?? defaultValues,
  })

  function onSubmit(data: Manual) {
    setIsMutateDrawerOpen(false)
    // eslint-disable-next-line no-console
    console.info(data)
  }

  return (
    <Sheet open={isMutateDrawerOpen} onOpenChange={setIsMutateDrawerOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>マニュアルを{selectedManual ? '編集' : '作成'}</SheetTitle>
          <SheetDescription>
            マニュアルの情報を入力してください。
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>タイトル</FormLabel>
                    <FormControl>
                      <Input placeholder="マニュアルのタイトル" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>種類</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="種類を選択" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.entries(types).map(([value, item]) => (
                          <SelectItem key={value} value={value}>
                            <div className="flex items-center">
                              <img src={item.icon} alt={item.label} className="mr-2 h-4 w-4" />
                              {item.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ステータス</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="ステータスを選択" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.entries(statuses).map(([value, item]) => {
                          const Icon = item.icon
                          return (
                            <SelectItem key={value} value={value}>
                              <div className="flex items-center">
                                <Icon className="mr-2 h-4 w-4" />
                                {item.label}
                              </div>
                            </SelectItem>
                          )
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>編集者</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="編集者を選択" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {authors.map((author) => (
                          <SelectItem key={author.value} value={author.value}>
                            {author.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setIsMutateDrawerOpen(false)}
                >
                  キャンセル
                </Button>
                <Button type="submit">保存</Button>
              </div>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  )
}