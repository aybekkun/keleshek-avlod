import { Container } from '@/components/ui/container'
import { useContact } from '@/services/contacts'
import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from './contact-form'

export const ContactSection = () => {
  const { data } = useContact()

  return (
    <div className="min-h-screen bg-slate-50/50 py-20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Contact Info & Map */}
          <div className="flex-1 space-y-12">
            <h1 className="text-4xl font-black text-slate-900 mb-8">
              Контакты
            </h1>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Adress
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
                    Телефон
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
                    Email
                  </p>
                  <p className="text-lg font-semibold text-slate-700">
                    {data?.data.email}
                  </p>
                </div>
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
                Свяжитесь с нами
              </h2>

              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
