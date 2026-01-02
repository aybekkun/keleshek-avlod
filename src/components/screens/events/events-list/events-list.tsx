import {
  EventCard,
  type IEvent,
} from '@/components/screens/events/event-card/event-card'
import { cn } from '@/lib/utils'

const MOCK_EVENTS: IEvent[] = Array.from({ length: 5 }).map((_, i) => ({
  id: `${i + 1}`,
  date: `${20 + i}.09.2026`,
  time: '11:00 - 14:00',
  title: [
    'Formation of the organizational structure of the company in the face of uncertainty.',
    'Building a customer service department. Best Practices.',
    'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
    'Digital Transformation in Modern Education Systems.',
    'Advanced Leadership and Management Strategies.',
  ][i % 5],
  type: ['Online master-class', 'Online lecture', 'Online workshop'][i % 3],
  location: i % 2 === 0 ? 'Online' : 'Tashkent, Uzbekistan',
}))

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
