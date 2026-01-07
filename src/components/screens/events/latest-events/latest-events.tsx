import { Explore } from '@/components/shared/explore'
import { SectionHeader } from '@/components/shared/section-header'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { useEvents } from '@/services/events'
import { useTranslation } from 'react-i18next'
import { EventCard } from '../event-card/event-card'

type Props = {
  className?: string
}

export const LatestEventsSection = ({ className = `` }: Props) => {
  const { t } = useTranslation()
  const { data } = useEvents({ limit: 3 })
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
          title={t('sections.latest_events.title')}
          subtitle={t('sections.latest_events.subtitle')}
          className="text-center"
        />

        <div className="space-y-6 max-w-6xl mx-auto">
          {data?.data.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        <Explore
          title={t('sections.latest_events.explore_title')}
          subtitle={t('sections.latest_events.explore_subtitle')}
          to="/events"
        />
      </Container>
    </section>
  )
}
