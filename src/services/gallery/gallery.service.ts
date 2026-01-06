import { $authApi } from '@/api'
import type {
  IParams,
  IResponseData,
  IResponseSingleData,
} from '../service.types'
import type { IGallery, IGalleryForm } from './gallery.types'

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
  create: async (formData: IGalleryForm | FormData) => {
    const res = await $authApi.post<IResponseSingleData<IGallery>>(
      '/gallery',
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
    form: IGalleryForm | FormData
  }) => {
    const res = await $authApi.put<IResponseSingleData<IGallery>>(
      `/gallery/${formData.id}`,
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
    const res = await $authApi.delete(`/gallery/${id}`)
    return res.data
  },
}
