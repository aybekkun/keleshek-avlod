import { useTranslation } from 'react-i18next'

export const useNavLinks = () => {
  const { t } = useTranslation()

  const navLinks = [
    { name: t('navigation.main'), path: '/' },
    { name: t('navigation.news'), path: '/news' },
    { name: t('navigation.events'), path: '/events' },
    { name: t('navigation.clubs'), path: '/clubs' },
    { name: t('navigation.staff'), path: '/staff' },
    { name: t('navigation.gallery'), path: '/gallery' },
    { name: t('navigation.about'), path: '/about' },
    { name: t('navigation.contact'), path: '/contact' },
  ]

  return navLinks
}
