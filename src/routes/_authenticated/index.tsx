import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/')({
  component: () => import('./index.lazy').then((d) => d.Route),
})
