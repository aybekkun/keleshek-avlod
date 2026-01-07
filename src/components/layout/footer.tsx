import { useContact } from '@/services/contacts'
import { Link } from '@tanstack/react-router'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Container } from '../ui/container'
import { Logo } from './logo'

export const Footer = () => {
  const { data } = useContact()
  const { t } = useTranslation()

  return (
    <footer className="bg-white border-t pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Logo />
            <p className="text-slate-500 mb-8 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">
              {t('footer.navigation')}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-slate-500 hover:text-blue-600"
                >
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-slate-500 hover:text-blue-600">
                  {t('navigation.news')}
                </Link>
              </li>
              <li>
                <Link
                  to="/clubs"
                  className="text-slate-500 hover:text-blue-600"
                >
                  {t('navigation.clubs')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-500 hover:text-blue-600"
                >
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">
              {t('footer.parents')}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/events"
                  className="text-slate-500 hover:text-blue-600"
                >
                  {t('navigation.events')}
                </Link>
              </li>
              <li>
                <Link
                  to="/staff"
                  className="text-slate-500 hover:text-blue-600"
                >
                  {t('navigation.staff')}
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-slate-500 hover:text-blue-600"
                >
                  {t('navigation.gallery')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">
              {t('footer.contacts')}
            </h4>
            <p className="text-slate-500 mb-4">{data?.data.address}</p>
            <p className="text-slate-900 font-bold mb-1">{data?.data.phone}</p>
            <p className="text-blue-600 font-bold">{data?.data.email}</p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </Container>
    </footer>
  )
}
