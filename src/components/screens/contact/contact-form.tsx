import { Button } from '@/components/ui/button'
import { Field, FieldContent, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ContactsService } from '@/services/contacts/contacts.service'
import { useMutation } from '@tanstack/react-query'
import { Send } from 'lucide-react'
import { useState } from 'react'
import { PatternFormat } from 'react-number-format'

export const formatPhoneReverse = (phone?: string) => {
  if (phone === undefined) return '-'
  if (phone.startsWith('+998')) {
    return phone.replace(/ /g, '')
  }
  return '+998' + phone.replace(/ /g, '')
}

export const ContactForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const { mutate, isPending } = useMutation({
    mutationFn: ContactsService.sendMessage,
    onSuccess: () => {
      alert('вы отправили сообщенение')
      setName('')
      setPhone('')
      setMessage('')
    },
    onError: () => {
      alert('Ошибка при отправке сообщения')
    },
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !phone || !message) {
      alert('Пожалуйста, заполните все поля')
      return
    }

    mutate({
      name,
      phone: formatPhoneReverse(phone),
      message,
    })
  }

  return (
    <form className="space-y-8" onSubmit={onSubmit}>
      <Field>
        <FieldLabel className="text-slate-600 font-semibold mb-2 ml-1">
          Имя
        </FieldLabel>
        <FieldContent>
          <Input
            placeholder="Иван Иванов"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-2xl border-none bg-slate-50 h-14 px-6 focus-visible:ring-blue-600 text-slate-700 placeholder:text-slate-300 transition-all focus-visible:bg-white focus-visible:shadow-md"
          />
        </FieldContent>
      </Field>

      <Field>
        <FieldLabel className="text-slate-600 font-semibold mb-2 ml-1">
          Телефон
        </FieldLabel>
        <FieldContent>
          <PatternFormat
            format={'+998 ## ### ## ##'}
            value={phone}
            onValueChange={(values) => setPhone(values.value)}
            className="rounded-2xl border-none bg-slate-50 h-14 px-6 focus-visible:ring-blue-600 text-slate-700 placeholder:text-slate-300 transition-all focus-visible:bg-white focus-visible:shadow-md"
            customInput={Input}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-2xl border-none bg-slate-50 min-h-32 p-6 focus-visible:ring-blue-600 text-slate-700 placeholder:text-slate-300 transition-all focus-visible:bg-white focus-visible:shadow-md resize-none"
          />
        </FieldContent>
      </Field>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-xl shadow-blue-200 transition-all hover:-translate-y-1 active:translate-y-0 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-5 h-5 mr-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        {isPending ? 'Отправка...' : 'Отправить'}
      </Button>
    </form>
  )
}
