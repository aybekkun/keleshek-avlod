import { keepPreviousData, useQuery } from '@tanstack/react-query'
import type { IParams } from '../service.types'
import { NewsService } from './news.service'

export const useNews = (params: IParams) => {
  return useQuery({
    queryKey: ['news', ...Object.values(params)],
    queryFn: () => NewsService.getAll(params),
    staleTime: 0,
    placeholderData: keepPreviousData,
  })
}

export const useNewsById = (id: string | number) => {
  return useQuery({
    queryKey: ['news', id],
    queryFn: () => NewsService.getById(id),
    enabled: !!id,
  })
}
