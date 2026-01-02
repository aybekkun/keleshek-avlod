import { useQuery } from '@tanstack/react-query'
import { AuthService } from './auth.service'

export const useProfile = (options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => AuthService.profile(),
    retry: 0,
    ...options,
  })
}
