import type { IResponseSingleData } from '../service.types'
import type { IAuthForm, ILoginResonse, IUserProfile } from './auth.types'
import { $authHost, $host } from '@/api'

export const AuthService = {
  login: async (formData: IAuthForm) => {
    const { data } = await $host.post<IResponseSingleData<ILoginResonse>>(
      '/login',
      formData,
    )
    return data
  },
  profile: async () => {
    const { data } =
      await $authHost.get<IResponseSingleData<IUserProfile>>('/profile')
    return data
  },
}
