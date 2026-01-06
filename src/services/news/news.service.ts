import { $authApi } from '@/api'
import type {
  IParams,
  IResponseData,
  IResponseSingleData,
} from '../service.types'
import type { INews } from './news.types'

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
}
