import {
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
} from '@tanstack/react-query'
import type { ReactNode } from 'react'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      retry: 0,
      placeholderData: keepPreviousData,
    },
  },
})

type TanStackQueryProviderProps = {
  children: ReactNode
}

export default function TanStackQueryProvider({
  children,
}: TanStackQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
