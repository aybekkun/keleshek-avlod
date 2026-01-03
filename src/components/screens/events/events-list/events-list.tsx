import { EventCard } from '@/components/screens/events/event-card/event-card'
import { cn } from '@/lib/utils'
import { MOCK_EVENTS } from '@/services/events'

type Props = {
  className?: string
}

export const EventsList = ({ className = `` }: Props) => {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      {MOCK_EVENTS.map((event, index) => (
        <EventCard key={event.id} event={event} index={index} />
      ))}
    </div>
  )
}
