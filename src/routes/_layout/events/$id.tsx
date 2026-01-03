import { EventDetail } from '@/components/screens/events'
import { MOCK_EVENTS } from '@/services/events'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/events/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const event = MOCK_EVENTS.find((item) => item.id === id)

  if (!event) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Событие не найдено</h1>
      </div>
    )
  }

  return <EventDetail event={event} />
}
