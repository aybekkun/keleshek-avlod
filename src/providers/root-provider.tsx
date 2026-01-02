import { routeTree } from '@/routeTree.gen'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import TanStackQueryProvider, { queryClient } from './tanstack-query'

// Create a new router instance

const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: undefined!,
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
export function Provider() {
  const auth = undefined
  return (
    <TanStackQueryProvider>
      <RouterProvider router={router} context={{ auth }} />
    </TanStackQueryProvider>
  )
}
