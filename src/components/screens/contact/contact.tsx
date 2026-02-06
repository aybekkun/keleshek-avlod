import { Container } from '@/components/ui/container'
import { useContact } from '@/services/contacts'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ContactForm } from './contact-form'

export const ContactSection = () => {
  const { data } = useContact()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-slate-50/50 py-20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Contact Info & Map */}
          <div className="flex-1 space-y-12">
            <h1 className="text-4xl font-black text-slate-900 mb-8">
              {t('contact.page_title')}
            </h1>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    {t('contact.address_label')}
                  </p>
                  <p className="text-lg font-semibold text-slate-700">
                    {data?.data.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    {t('contact.phone_label')}
                  </p>
                  <p className="text-lg font-semibold text-slate-700">
                    {data?.data.phone}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    {t('contact.email_label')}
                  </p>
                  <p className="text-lg font-semibold text-slate-700">
                    {data?.data.email}
                  </p>
                </div>
              </div>

              {/* Social Networks */}
              <div className="pt-6 flex gap-4">
                <a
                  href="https://t.me/QQRKeleshekorayi"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                  title="Telegram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/keleshek_orayi"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all shadow-sm"
                  title="Instagram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/qqbabm?mibextid=wwXIfr&rdid=0exmipV2ZZNRirnC&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1KCHWRnw1w%2F%3Fmibextid%3DwwXIfr#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-800 hover:bg-blue-800 hover:text-white transition-all shadow-sm"
                  title="Facebook"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Map Placeholder/Iframe */}
            <div className="w-full h-75 rounded-3xl overflow-hidden shadow-lg border border-white">
              <iframe
                width="100%"
                height="100%"
                src={`https://maps.google.com/maps?q=${data?.data.lat},${data?.data.long}&hl=ru&z=14&output=embed`}
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="flex-1 lg:max-w-xl">
            <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 p-8 md:p-12 border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-10">
                {t('contact.form_title')}
              </h2>

              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
