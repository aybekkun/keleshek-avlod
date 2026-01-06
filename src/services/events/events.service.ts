import { $authApi } from '@/api'
import type {
  IParams,
  IResponseData,
  IResponseSingleData,
} from '../service.types'
import type { IEvent } from './events.types'

export const EventsService = {
  getAll: async (params: IParams) => {
    const res = await $authApi.get<IResponseData<IEvent>>('/events', {
      params,
    })
    return res.data
  },
  getById: async (id: number | string) => {
    const res = await $authApi.get<IResponseSingleData<IEvent>>(`/events/${id}`)
    return res.data
  },
}
