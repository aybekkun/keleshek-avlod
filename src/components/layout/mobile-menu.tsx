import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Logo } from './logo'

interface NavLink {
  name: string
  path: string
}

interface MobileMenuProps {
  navLinks: NavLink[]
}

export const MobileMenu = ({ navLinks }: MobileMenuProps) => {
  const { t } = useTranslation()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="xl:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">{t('common.toggle_menu')}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-75 p-4 sm:w-100">
        <SheetHeader className="text-left">
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.path}>
              <Link
                to={link.path}
                className="text-lg font-medium transition-colors hover:text-blue-600 p-2"
                activeProps={{
                  className: 'text-blue-600 font-bold bg-blue-50/50 rounded-lg',
                }}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
