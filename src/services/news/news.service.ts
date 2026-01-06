import { $authApi } from '@/api'
import type {
  IParams,
  IResponseData,
  IResponseSingleData,
} from '../service.types'
import type { INews, INewsForm } from './news.types'

export const NewsService = {
  getAll: async (params: IParams) => {
    const res = await $authApi.get<IResponseData<INews>>('/news', {
      params,
    })
    return res.data
  },
  getById: async (id: number | string) => {
    const res = await $authApi.get<IResponseSingleData<INews>>(`/news/${id}`)
    return res.data
  },
  create: async (formData: INewsForm | FormData) => {
    const res = await $authApi.post<IResponseSingleData<INews>>(
      '/news',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    return res.data
  },
  update: async (formData: {
    id: number | string
    form: INewsForm | FormData
  }) => {
    const res = await $authApi.put<IResponseSingleData<INews>>(
      `/news/${formData.id}`,
      formData.form,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    return res.data
  },
  delete: async (id: string | number) => {
    const res = await $authApi.delete(`/news/${id}`)
    return res.data
  },
}
