import { keepPreviousData, useQuery } from '@tanstack/react-query'
import type { IParams } from '../service.types'
import { GalleryService } from './gallery.service'

export const useGallery = (params: IParams) => {
  return useQuery({
    queryKey: ['gallery', ...Object.values(params)],
    queryFn: () => GalleryService.getAll(params),
    staleTime: Infinity,
    placeholderData: keepPreviousData,
  })
}

export const useGalleryById = (id: string | number) => {
  return useQuery({
    queryKey: ['gallery', id],
    queryFn: () => GalleryService.getById(id),
    enabled: !!id,
  })
}
