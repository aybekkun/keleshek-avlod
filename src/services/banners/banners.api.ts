import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { App } from 'antd'
import { BannersService } from './banners.service'
import type { IBannerForm } from './banners.types'

export const useBanner = () => {
  return useQuery({
    queryKey: ['banner'],
    queryFn: () => BannersService.get(),
  })
}

export const useUpdateBanner = () => {
  const queryClient = useQueryClient()
  const { message } = App.useApp()

  return useMutation({
    mutationFn: (data: IBannerForm) => BannersService.update(data),
    onSuccess: () => {
      message.success('Баннер успешно обновлен')
      queryClient.invalidateQueries({ queryKey: ['banner'] })
    },
    onError: () => {
      message.error('Ошибка при обновлении баннера')
    },
  })
}
