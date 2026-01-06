import { $authApi } from '@/api'
import type {
  IParams,
  IResponseData,
  IResponseSingleData,
} from '../service.types'
import type { IStaff, IStaffForm } from './staff.types'

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
  create: async (formData: IStaffForm | FormData) => {
    const res = await $authApi.post<IResponseSingleData<IStaff>>(
      '/staff',
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
    form: IStaffForm | FormData
  }) => {
    const res = await $authApi.put<IResponseSingleData<IStaff>>(
      `/staff/${formData.id}`,
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
    const res = await $authApi.delete(`/staff/${id}`)
    return res.data
  },
}
