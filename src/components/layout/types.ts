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

interface NavLinkBase extends BaseNavItem {
  isExternal?: boolean
}

type NavInternalLink = NavLinkBase & {
  url: InternalUrl
  items?: never
  isExternal?: false
}

type NavExternalLink = NavLinkBase & {
  url: ExternalUrl
  items?: never
  isExternal: true
}

type NavLink = NavInternalLink | NavExternalLink

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

