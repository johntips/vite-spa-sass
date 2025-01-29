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
import LogoNoText from '@/assets/logo_no_text.svg'
import { Button } from '@/components/ui/button'
import { CirclePlus, Video, Upload } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' variant='floating' {...props}>
      <SidebarHeader className='p-4 group'>
        <div className="group-data-[state=expanded]:block group-data-[state=collapsed]:hidden">
          <img src={Logo} alt='Logo' width={113} height={32} />
          <p className='text-regular'>ロジポケサービス株式会社</p>
        </div>
        <div className="group-data-[state=expanded]:hidden group-data-[state=collapsed]:block">
          <img src={LogoNoText} alt='Logo' width={16} height={16} />
        </div>
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
        <DropdownMenu>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button variant='secondary' className='font-semibold w-full group'>
                    <CirclePlus className="mr-2 group-data-[state=collapsed]:mr-0" />
                    <span className="group-data-[state=collapsed]:hidden">新規マニュアル作成</span>
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent side="right" className="group-data-[state=expanded]:hidden">
                新規マニュアル作成
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DropdownMenuContent align="center" className="w-[200px]">
            <DropdownMenuItem>
              <Video className="mr-2 h-4 w-4" />
              動画マニュアルを作成
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Upload className="mr-2 h-4 w-4" />
              画像・PDFをアップロード
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
