import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/events/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/events/"!</div>
}
