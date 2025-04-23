import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLogout } from '@/hooks/user/user.hooks'
import { getInitialsForAvatar } from '@/lib/utils'
import { useAuthStore } from '@/store/authStore'
import { KeyRound, LogOut } from 'lucide-react'

type Props = {
  openPasswordDialog: () => void
}

export function ProfileDropdown({
  openPasswordDialog,
}: Props) {
  const logOut = useLogout()
  const { user } = useAuthStore()
  const nameInitials = getInitialsForAvatar(user?.username || 'xo')

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant='default' className='relative h-10 w-10 bg-gray-300 rounded-full text-gray-700 cursor-pointer'>
          <Avatar className='h-8 w-8'>
            <AvatarFallback>{nameInitials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>👋 Hello, {user?.username}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='flex items-center justify-between' onClick={openPasswordDialog}>
            <span>Change password</span>
            <KeyRound size={16} />
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center justify-between' onClick={logOut}>
            <span>Logout</span>
            <LogOut size={16} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}