import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { NavGroup } from '@/components/layout/nav-group'
import { sidebarData } from './data/sidebar-data'
import { Fragment } from 'react/jsx-runtime'
import Logo from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { CirclePlus } from 'lucide-react'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' variant='floating' {...props}>
      <SidebarHeader className='p-4'>
        <img src={Logo} alt='Logo' width={113} height={32} />
        <p className='text-regular'>ロジポケサービス株式会社</p>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        {sidebarData.navGroups.map((props) => (
          <Fragment key={props.title}>
            <NavGroup {...props} />
            <SidebarSeparator />
          </Fragment>
        ))}
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter className='p-4'>
        <Button variant='secondary' className='font-semibold'>
          <CirclePlus />
          新規マニュアル作成
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
