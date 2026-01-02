import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/clubs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/clubs/"!</div>
}
