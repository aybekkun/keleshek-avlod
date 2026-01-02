import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import languageDetecter from 'i18next-browser-languagedetector'
import translationKAA from './locales/kaa.json'
import translationUZ from './locales/uz.json'
import translationEN from './locales/en.json'
i18n // Поддержка загрузки переводов (можно убрать, если локальные)
  .use(initReactI18next)
  .use(languageDetecter) // Интеграция с React
  .init({
    fallbackLng: 'uz', // Язык по умолчанию
    debug: true,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    resources: {
      kaa: {
        translation: translationKAA,
      },
      uz: {
        translation: translationUZ,
      },
      en: {
        translation: translationEN,
      },
    },
    interpolation: {
      escapeValue: false, // React уже экранирует HTML
    },
  })

export default i18n
