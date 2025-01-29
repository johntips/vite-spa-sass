import React from 'react'
import { useNavigate } from '@tanstack/react-router'
import {
  IconDeviceLaptop,
  IconMoon,
  IconSun,
} from '@tabler/icons-react'
import { useSearch } from '@/context/search-context'
import { useTheme } from '@/context/theme-context'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { sidebarData } from './layout/data/sidebar-data'
import { ScrollArea } from './ui/scroll-area'

export function CommandMenu() {
  const navigate = useNavigate()
  const { setTheme } = useTheme()
  const { open, setOpen } = useSearch()

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false)
      command()
    },
    [setOpen]
  )

  return (
    <CommandDialog modal open={open} onOpenChange={setOpen}>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <ScrollArea type='hover' className='h-72 pr-1'>
          <CommandEmpty>No results found.</CommandEmpty>
          {sidebarData.navGroups.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((navItem) => {
                if (navItem.url)
                  return (
                    <CommandItem
                      key={navItem.title}
                      onSelect={() =>
                        navItem.isExternal
                          ? window.open(navItem.url, '_blank', 'noopener,noreferrer')
                          : runCommand(() => navigate({ to: navItem.url }))
                      }
                    >
                      {navItem.icon && <navItem.icon className='mr-2 h-4 w-4' />}
                      <span>{navItem.title}</span>
                    </CommandItem>
                  )

                return navItem.items?.map((subItem) => (
                  <CommandItem
                    key={subItem.title}
                    onSelect={() =>
                      subItem.isExternal
                        ? window.open(subItem.url, '_blank', 'noopener,noreferrer')
                        : runCommand(() => navigate({ to: subItem.url }))
                    }
                  >
                    {subItem.icon && <subItem.icon className='mr-2 h-4 w-4' />}
                    <span>{subItem.title}</span>
                  </CommandItem>
                ))
              })}
            </CommandGroup>
          ))}
          <CommandSeparator />
          <CommandGroup heading='Theme'>
            <CommandItem onSelect={() => runCommand(() => setTheme('light'))}>
              <IconSun /> <span>Light</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('dark'))}>
              <IconMoon className='scale-90' />
              <span>Dark</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('system'))}>
              <IconDeviceLaptop />
              <span>System</span>
            </CommandItem>
          </CommandGroup>
        </ScrollArea>
      </CommandList>
    </CommandDialog>
  )
}
