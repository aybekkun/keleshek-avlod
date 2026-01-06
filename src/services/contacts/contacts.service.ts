import { $authApi } from '@/api'
import type { IResponseSingleData } from '../service.types'
import type { IContact } from './contacts.types'

export const ContactsService = {
  get: async () => {
    const res = await $authApi.get<IResponseSingleData<IContact>>('/contact')
    return res.data
  },
}
