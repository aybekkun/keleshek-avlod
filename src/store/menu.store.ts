import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface MenuStore {
  collapsed: boolean
  toggleCollapsed: () => void
}

export const useMenuStore = create<MenuStore>()(
  persist(
    (set) => ({
      collapsed: true,
      toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
    }),
    {
      name: 'menu-storage', // ключ в localStorage
      partialize: (state) => ({ collapsed: state.collapsed }), // что сохраняем
    },
  ),
)
