import { $authApi } from '@/api'
import type { IResponseSingleData } from '../service.types'
import type { IContact, IMessageForm } from './contacts.types'

export const ContactsService = {
  get: async () => {
    const res = await $authApi.get<IResponseSingleData<IContact>>('/contact')
    return res.data
  },

  sendMessage: async (data: IMessageForm) => {
    const res = await $authApi.post('/contact/messages', data)
    return res.data
  },
}
