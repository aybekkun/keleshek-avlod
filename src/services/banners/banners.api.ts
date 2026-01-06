import { useQuery } from '@tanstack/react-query'

import { BannersService } from './banners.service'

export const useBanner = () => {
  return useQuery({
    queryKey: ['banner'],
    queryFn: () => BannersService.get(),
  })
}
