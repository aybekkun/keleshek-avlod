import { $authApi } from '@/api'
import type { IParams, IResponseData } from '../service.types'
import type { ICategory } from './category.types'

export const CategoryService = {
  getAll: async (params: IParams) => {
    const res = await $authApi.get<IResponseData<ICategory>>('/category', {
      params,
    })
    return res.data
  },
  /* 	getById: async (id: number | string) => {
		const res = await $authHost.get<IResponseSingleData<ICategory>>(
			`/category/${id}`
		)
		return res.data
	}, */
}
