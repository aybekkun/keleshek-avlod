import { $authApi } from '@/api'
import type {
  IParams,
  IResponseData,
  IResponseSingleData,
} from '../service.types'
import type { IGallery } from './gallery.types'

export const GalleryService = {
  getAll: async (params: IParams) => {
    const res = await $authApi.get<IResponseData<IGallery>>('/gallery', {
      params,
    })
    return res.data
  },
  getById: async (id: number | string) => {
    const res = await $authApi.get<IResponseSingleData<IGallery>>(
      `/gallery/${id}`,
    )
    return res.data
  },
}
