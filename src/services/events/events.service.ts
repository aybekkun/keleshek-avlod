import { $authApi } from '@/api'
import type {
  IParams,
  IResponseData,
  IResponseSingleData,
} from '../service.types'
import type { IEvent, IEventForm, IEventUpdate } from './events.types'

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
  create: async (data: IEventForm) => {
    const res = await $authApi.post<IResponseSingleData<IEvent>>(
      '/events',
      data,
    )
    return res.data
  },
  update: async (formData: IEventUpdate) => {
    const { id, ...data } = formData
    const res = await $authApi.put<IResponseSingleData<IEvent>>(
      `/events/${id}`,
      data,
    )
    return res.data
  },
  delete: async (id: string | number) => {
    const res = await $authApi.delete(`/events/${id}`)
    return res.data
  },
}
