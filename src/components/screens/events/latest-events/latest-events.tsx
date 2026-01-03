import { Explore } from '@/components/shared/explore'
import { SectionHeader } from '@/components/shared/section-header'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { EventCard } from '../event-card/event-card'
import type { IEvent } from '@/services/events'

const EVENTS: IEvent[] = [
  {
    id: '1',
    date: '20.09.2026',
    time: '11:00 - 14:00',
    title:
      'Formation of the organizational structure of the company in the face of uncertainty.',
    type: 'Online master-class',
    location: 'Online',
  },
  {
    id: '2',
    date: '24.08.2026',
    time: '11:00 - 12:30',
    title: 'Building a customer service department. Best Practices.',
    type: 'Online lecture',
    location: 'Online',
  },
  {
    id: '3',
    date: '16.07.2026',
    time: '10:00 - 13:00',
    title:
      'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
    type: 'Online workshop',
    location: 'Online',
  },
]

type Props = {
  className?: string
}

export const LatestEventsSection = ({ className = `` }: Props) => {
  return (
    <section
      className={cn('py-24 bg-primary/5 relative overflow-hidden', className)}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/10 rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-4 h-4 bg-primary/10 rounded-full animate-ping" />
      <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-primary/15 rounded-full animate-bounce" />

      <Container className="relative z-10">
        <SectionHeader
          title="Lectures & workshops"
          subtitle="OUR EVENTS"
          className="text-center"
        />

        <div className="space-y-6 max-w-6xl mx-auto">
          {EVENTS.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        <Explore
          title="Do you want more?"
          subtitle="Explore all events"
          to="/events"
        />
      </Container>
    </section>
  )
}
