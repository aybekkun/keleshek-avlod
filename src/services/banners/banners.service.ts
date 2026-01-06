import { $authApi } from '@/api'
import type { IResponseSingleData } from '../service.types'
import type { IBanner, IBannerForm } from './banners.types'

export const BannersService = {
  get: async () => {
    const res = await $authApi.get<IResponseSingleData<IBanner>>('/banners')
    return res.data
  },
  update: async (data: IBannerForm) => {
    const res = await $authApi.put<IResponseSingleData<IBanner>>(
      '/banners',
      data,
    )
    return res.data
  },
}
