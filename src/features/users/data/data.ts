import {
  IconCash,
  IconUserShield,
} from '@tabler/icons-react'
import { UserStatus } from './schema'

export const callTypes = new Map<UserStatus, string>([
  ['active', 'bg-teal-100/30 text-teal-900 dark:text-teal-200 border-teal-200'],
  ['inactive', 'bg-neutral-300/40 border-neutral-300'],
  ['invited', 'bg-sky-200/40 text-sky-900 dark:text-sky-100 border-sky-300'],
  [
    'suspended',
    'bg-destructive/10 dark:bg-destructive/50 text-destructive dark:text-primary border-destructive/10',
  ],
])

export const userTypes = [
  {
    label: '管理者',
    value: 'admin',
    icon: IconUserShield,
  },

  {
    label: 'メンバー',
    value: 'member',
    icon: IconCash,
  },
] as const

export const getRoleLabel = (roleValue: string): string => {
  const role = userTypes.find(({ value }) => value === roleValue)
  return role ? role.label : roleValue
}
