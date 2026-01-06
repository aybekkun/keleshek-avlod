import { keepPreviousData, useQuery } from '@tanstack/react-query'
import type { IParams } from '../service.types'
import { StaffService } from './staff.service'

export const useStaff = (params: IParams) => {
  return useQuery({
    queryKey: ['staff', ...Object.values(params)],
    queryFn: () => StaffService.getAll(params),
    staleTime: Infinity,
    placeholderData: keepPreviousData,
  })
}

export const useStaffById = (id: string | number) => {
  return useQuery({
    queryKey: ['staff', id],
    queryFn: () => StaffService.getById(id),
    enabled: !!id,
  })
}
