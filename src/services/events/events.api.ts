import { keepPreviousData, useQuery } from '@tanstack/react-query'
import type { IParams } from '../service.types'
import { EventsService } from './events.service'

export const useEvents = (params: IParams) => {
  return useQuery({
    queryKey: ['events', ...Object.values(params)],
    queryFn: () => EventsService.getAll(params),
    staleTime: Infinity,
    placeholderData: keepPreviousData,
  })
}

export const useEventById = (id: string | number) => {
  return useQuery({
    queryKey: ['events', id],
    queryFn: () => EventsService.getById(id),
    enabled: !!id,
  })
}
