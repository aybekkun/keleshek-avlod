import { $authApi } from '@/api'
import type {
  IParams,
  IResponseData,
  IResponseSingleData,
} from '../service.types'
import type { IClub } from './clubs.types'

export const ClubsService = {
  getAll: async (params: IParams) => {
    const res = await $authApi.get<IResponseData<IClub>>('/clubs', {
      params,
    })
    return res.data
  },
  getById: async (id: number | string) => {
    const res = await $authApi.get<IResponseSingleData<IClub>>(`/clubs/${id}`)
    return res.data
  },
}
