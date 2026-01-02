import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import type { IUserProfile } from '@/services/auth'
import { getToken, removeAllTokens } from '@/api/api.utils'

export type AuthState = {
  isAuth: boolean
  user: IUserProfile | null
  status: 'authenticated' | 'unauthenticated' | 'loading'
  setAuthState: (status: AuthState['status'], user: IUserProfile | null) => void
  logout: () => void
}
const initialStatus = getToken() ? 'loading' : 'unauthenticated'

export const useAuthStore = create<AuthState>()(
  devtools(
    (set) => ({
      isAuth: false,
      user: null,
      status: initialStatus,

      setAuthState: (status, user) => {
        if (status === 'unauthenticated') {
          set({
            isAuth: false,
            user: null,
            status: 'unauthenticated',
          })
        } else if (status === 'authenticated') {
          set({
            isAuth: true,
            user,
            status: 'authenticated',
          })
        } else {
          set({ status: 'loading' })
        }
      },

      logout: () => {
        set({
          isAuth: false,
          user: null,
          status: 'unauthenticated',
        })
        removeAllTokens()
      },
    }),
    { name: 'AuthStore' },
  ),
)
