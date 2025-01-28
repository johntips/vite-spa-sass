import { createLazyFileRoute } from '@tanstack/react-router'
import ManualsPage from '@/features/manual'

export const Route = createLazyFileRoute('/_authenticated/manuals/published/')({
  component: ManualsPage,
})