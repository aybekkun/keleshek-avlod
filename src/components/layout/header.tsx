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
import { MobileMenu } from './mobile-menu'
import { useQueryClient } from '@tanstack/react-query'
import { useNavLinks } from './use-nav-links'
type Props = {
  className?: string
}

const languages = [
  { code: 'kaa', label: 'kaa' },
  { code: 'ru', label: 'ru' },
  { code: 'uz', label: 'uz' },
  { code: 'en', label: 'en' },
]
export const Header = ({ className = `` }: Props) => {
  const { i18n } = useTranslation()
  const navLinks = useNavLinks()
  const queryClient = useQueryClient()
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    localStorage.setItem('lang', language)
    queryClient.invalidateQueries()
  }
  const currentLanguage = i18n.language

  return (
    <header className={cn('bg-white border-b sticky top-0 z-50', className)}>
      <Container className="h-16 flex items-center justify-between">
        <div className="flex items-center flex-1 gap-8">
          <Logo />
          <nav className="hidden xl:flex flex-1 items-center justify-end  gap-1">
            {navLinks.map((link) => (
              <Link
                activeProps={{
                  className: 'text-blue-600 font-bold bg-blue-50/20 rounded',
                }}
                key={link.path}
                to={link.path}
                className={`transition-colors duration-200 text-base inline-block p-2 hover:text-blue-600`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 mr-2">
            <Globe className="w-4 h-4 text-slate-400 hidden sm:block" />
            <Select
              defaultValue={currentLanguage}
              onValueChange={(value) => changeLanguage(value)}
            >
              <SelectTrigger className="w-17.5 h-9">
                <SelectValue placeholder="Select" />
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
          <MobileMenu navLinks={navLinks} />
        </div>
      </Container>
    </header>
  )
}
