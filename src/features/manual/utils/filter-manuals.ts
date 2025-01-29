import { type Manual, type ManualStatus } from '../data/types'

export function filterManualsByStatus(manuals: Manual[], status?: ManualStatus) {
  if (!status) return manuals
  return manuals.filter(manual => manual.status === status)
} 