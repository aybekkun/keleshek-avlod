import { EventCard } from '@/components/screens/events/event-card/event-card'
import { cn } from '@/lib/utils'
import { type IEvent } from '@/services/events'

type Props = {
  className?: string
  data: IEvent[]
}

export const EventsList = ({ data, className = `` }: Props) => {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      {data.map((event, index) => (
        <EventCard key={event.id} event={event} index={index} />
      ))}
    </div>
  )
}
