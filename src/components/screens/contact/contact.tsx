import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Field, FieldContent, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export const ContactSection = () => {
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
                    г. Ташкент, ул. Образовательная, 42
                  </p>
                  <p className="text-lg font-semibold text-slate-700">
                    ул. Абая, 12, Ташкент, Узбекистан
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
                    +998 (71) 123-45-67
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
                    hello@edukids.uz
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder/Iframe */}
            <div className="w-full h-75 rounded-3xl overflow-hidden shadow-lg border border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.5026367098!2d69.13928173570535!3d41.28251254605963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a99769216563eb!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1704200000000!5m2!1sru!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="flex-1 lg:max-w-xl">
            <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 p-8 md:p-12 border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-10">
                Свяжитесь с нами
              </h2>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <Field>
                  <FieldLabel className="text-slate-600 font-semibold mb-2 ml-1">
                    Имя
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      placeholder="Иван Иванов"
                      className="rounded-2xl border-none bg-slate-50 h-14 px-6 focus-visible:ring-blue-600 text-slate-700 placeholder:text-slate-300 transition-all focus-visible:bg-white focus-visible:shadow-md"
                    />
                  </FieldContent>
                </Field>

                <Field>
                  <FieldLabel className="text-slate-600 font-semibold mb-2 ml-1">
                    Эл. почта
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      type="email"
                      placeholder="example@mail.com"
                      className="rounded-2xl border-none bg-slate-50 h-14 px-6 focus-visible:ring-blue-600 text-slate-700 placeholder:text-slate-300 transition-all focus-visible:bg-white focus-visible:shadow-md"
                    />
                  </FieldContent>
                </Field>

                <Field>
                  <FieldLabel className="text-slate-600 font-semibold mb-2 ml-1">
                    Сообщение
                  </FieldLabel>
                  <FieldContent>
                    <Textarea
                      placeholder="Ваше сообщение..."
                      className="rounded-2xl border-none bg-slate-50 min-h-32 p-6 focus-visible:ring-blue-600 text-slate-700 placeholder:text-slate-300 transition-all focus-visible:bg-white focus-visible:shadow-md resize-none"
                    />
                  </FieldContent>
                </Field>

                <Button className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-xl shadow-blue-200 transition-all hover:-translate-y-1 active:translate-y-0 group">
                  <Send className="w-5 h-5 mr-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  Отправить
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
