import { $authApi } from '@/api'
import type {
  IParams,
  IResponseData,
  IResponseSingleData,
} from '../service.types'
import type { IContact, IContactForm, IContactMessage } from './contacts.types'

export const ContactsService = {
  get: async () => {
    const res = await $authApi.get<IResponseSingleData<IContact>>('/contact')
    return res.data
  },
  update: async (data: IContactForm) => {
    const res = await $authApi.put<IResponseSingleData<IContact>>(
      '/contact',
      data,
    )
    return res.data
  },
  getMessages: async (params: IParams) => {
    const res = await $authApi.get<IResponseData<IContactMessage>>(
      '/contact/messages',
      { params },
    )
    return res.data
  },
  markAsSeen: async (id: number) => {
    const res = await $authApi.patch(`/contact/messages/${id}/seen`)
    return res.data
  },
}
