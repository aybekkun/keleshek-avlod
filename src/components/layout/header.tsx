import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui'
import { Logo } from './logo'
type Props = {
  className?: string
}

const navLinks = [
  { name: 'Main', path: '/' },
  { name: 'News', path: '/news' },
  { name: 'Events', path: '/events' },
  { name: 'Clubs', path: '/clubs' },
  { name: 'Staff', path: '/staff' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
const languages = [
  { code: 'kaa', label: 'kaa' },
  { code: 'ru', label: 'ru' },
  { code: 'uz', label: 'uz' },
]
export const Header = ({ className = `` }: Props) => {
  const { i18n } = useTranslation()

  return (
    <header className={cn('bg-white border-b sticky top-0 z-50', className)}>
      <Container className="h-16 flex items-center ">
        <Logo />
        <div className="flex items-center gap-2 justify-end flex-1">
          <nav className="flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                activeProps={{
                  className: 'text-blue-600 font-bold bg-blue-50/20 rounded',
                }}
                key={link.path}
                to={link.path}
                className={`transition-colors duration-200 text-base inline-block p-2`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-slate-400" />
            <Select
              defaultValue={i18n.language}
              onValueChange={(value) => i18n.changeLanguage(value)}
            >
              <SelectTrigger className="w-20">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language.code} value={language.code}>
                    {language.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Container>
    </header>
  )
}
