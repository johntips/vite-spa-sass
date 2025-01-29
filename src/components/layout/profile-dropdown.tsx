import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut, User, ChevronDown } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { getRoleLabel } from '@/features/users/data/data'

interface ProfileDropdownProps {
  name: string
  role: string
  className?: string
}

export const ProfileDropdown = ({ name, role, className }: ProfileDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn("flex items-center hover:bg-accent rounded-md py-2", className)}>
          <div className="h-8 w-8 flex items-center justify-center bg-muted rounded-full mr-4">
            <User className="h-4 w-4" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">{name}</span>
            <span className="text-xs text-muted-foreground">{getRoleLabel(role)}</span>
          </div>
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem asChild>
          <Link to="/sign-in" className="flex items-center">
            <LogOut className="mr-2 h-4 w-4" />
            <span>ログアウト</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 