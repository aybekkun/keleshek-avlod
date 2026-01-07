import { $authApi } from '@/api'
import type {
  IParams,
  IResponseData,
  IResponseSingleData,
} from '../service.types'
import type { IStaff } from './staff.types'

export const StaffService = {
  getAll: async (params: IParams) => {
    const res = await $authApi.get<IResponseData<IStaff>>('/staff', {
      params,
    })
    return res.data
  },
  getById: async (id: number | string) => {
    const res = await $authApi.get<IResponseSingleData<IStaff>>(`/staff/${id}`)
    return res.data
  },
}
