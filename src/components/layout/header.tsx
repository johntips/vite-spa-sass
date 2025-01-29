import React from 'react'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { BreadCrumb } from './bread-crumb'
import { ProfileDropdown } from './profile-dropdown'
import { currentUser } from '@/features/users/data/users'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean
  ref?: React.Ref<HTMLElement>
}

export const Header = ({
  className,
  fixed,
  ...props
}: HeaderProps) => {
  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop)
    }

    // Add scroll listener to the body
    document.addEventListener('scroll', onScroll, { passive: true })

    // Clean up the event listener on unmount
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'flex items-center justify-between bg-background h-16 border-b',
        fixed && 'header-fixed peer/header w-[inherit] fixed z-50 rounded-md',
        offset > 10 && fixed ? 'shadow' : 'shadow-none',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3 pl-4">
        <SidebarTrigger variant='outline' className='scale-125 sm:scale-100' />
        <Separator orientation='vertical' className='h-6' />
        <BreadCrumb />
      </div>
      <div className="flex items-center h-full mr-2">
        <Separator orientation='vertical' className='h-full mr-2' />
        <ProfileDropdown
          name={`${currentUser.firstName} ${currentUser.lastName}`}
          role={currentUser.role}
          className="px-6"
        />
      </div>
    </header>
  )
}

Header.displayName = 'Header'
