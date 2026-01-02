import { Link } from '@tanstack/react-router'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { Container } from '../ui/container'
import { Logo } from './logo'

export const Footer = () => {
  return (
    <footer className="bg-white border-t pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Logo />
            <p className="text-slate-500 mb-8 leading-relaxed">
              Современная образовательная платформа для развития талантов и
              способностей ваших детей.
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
            <h4 className="text-lg font-bold text-slate-900 mb-6">Навигация</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-slate-500 hover:text-blue-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-slate-500 hover:text-blue-600">
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/clubs"
                  className="text-slate-500 hover:text-blue-600"
                >
                  Clubs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-500 hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">
              Для родителей
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/events"
                  className="text-slate-500 hover:text-blue-600"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/staff"
                  className="text-slate-500 hover:text-blue-600"
                >
                  Staff
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-slate-500 hover:text-blue-600"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Контакты</h4>
            <p className="text-slate-500 mb-4">Adress</p>
            <p className="text-slate-900 font-bold mb-1">+998 (71) 123-45-67</p>
            <p className="text-blue-600 font-bold">info@keleshek.uz</p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© 2024 Keleshek.uz. Все права защищены.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
