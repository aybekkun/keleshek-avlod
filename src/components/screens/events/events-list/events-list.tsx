import {
  EventCard,
  EventCardSkeleton,
} from '@/components/screens/events/event-card/event-card'
import { cn } from '@/lib/utils'
import { type IEvent } from '@/services/events'

type Props = {
  className?: string
  data?: IEvent[]
  isLoading?: boolean
  limit?: number
}

export const EventsList = ({
  data = [],
  className = ``,
  isLoading = false,
  limit = 5,
}: Props) => {
  if (isLoading) {
    return (
      <div className={cn('flex flex-col gap-6', className)}>
        {Array.from({ length: limit }).map((_, i) => (
          <EventCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      {data.map((event, index) => (
        <EventCard key={event.id} event={event} index={index} />
      ))}
    </div>
  )
}
