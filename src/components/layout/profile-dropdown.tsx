import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut, User } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

interface ProfileDropdownProps {
  name: string
  company: string
  className?: string
}

export const ProfileDropdown = ({ name, company, className }: ProfileDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn("flex items-center hover:bg-accent p-2 rounded-md", className)}>
          <div className="h-8 w-8 flex items-center justify-center bg-muted rounded-full">
            <User className="h-4 w-4" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">{name}</span>
            <span className="text-xs text-muted-foreground">{company}</span>
          </div>
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