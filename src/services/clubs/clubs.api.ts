import { keepPreviousData, useQuery } from '@tanstack/react-query'
import type { IParams } from '../service.types'
import { ClubsService } from './clubs.service'

export const useClubs = (params: IParams) => {
  return useQuery({
    queryKey: ['clubs', ...Object.values(params)],
    queryFn: () => ClubsService.getAll(params),
    staleTime: Infinity,
    placeholderData: keepPreviousData,
  })
}

export const useClubById = (id: string | number) => {
  return useQuery({
    queryKey: ['clubs', id],
    queryFn: () => ClubsService.getById(id),
    enabled: !!id,
  })
}
