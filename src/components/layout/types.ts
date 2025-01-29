import { LinkProps } from '@tanstack/react-router'

interface User {
  name: string
  email: string
  avatar: string
}

interface Team {
  name: string
  logo: React.ElementType
  plan: string
}

interface BaseNavItem {
  title: string
  badge?: string
  icon?: React.ElementType
}

type InternalUrl = LinkProps['to']
type ExternalUrl = `https://${string}`
type NavUrl = InternalUrl | ExternalUrl

type NavLink = BaseNavItem & {
  url: NavUrl
  items?: never
  isExternal?: boolean
}

type NavCollapsible = BaseNavItem & {
  items: NavLink[]
  url?: never
}

type NavItem = NavCollapsible | NavLink

interface NavGroup {
  title: string
  items: NavItem[]
}

interface SidebarData {
  user: User
  teams: Team[]
  navGroups: NavGroup[]
}

export type { SidebarData, NavGroup, NavItem, NavCollapsible, NavLink }
