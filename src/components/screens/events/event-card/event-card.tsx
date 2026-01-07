import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { Clock, MapPin } from 'lucide-react'

import type { IEvent } from '@/services/events'
import dayjs from 'dayjs'
type Props = {
  event: IEvent
  index: number
  className?: string
}

export const EventCard = ({ event, index, className }: Props) => {
  const date = dayjs(event.date).format('DD.MM.YYYY')
  return (
    <div
      className={cn(
        'bg-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(var(--primary),0.2)] hover:-translate-y-2 group relative overflow-hidden',
        `animation-delay-${(index + 1) * 100} animate-fade-in-up`,
        className,
      )}
    >
      {/* Subtle hover background accent */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Date Column */}
      <div className="flex flex-col items-center md:items-start min-w-35 relative z-10">
        <span className="text-4xl md:text-5xl font-black text-primary leading-none mb-1 group-hover:scale-110 transition-transform duration-500 origin-left">
          {date.split('.')[0]}
        </span>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-sm font-extrabold text-slate-800 uppercase tracking-widest">
            {date.split('.').slice(1).join('.')}
          </span>
          <div className="flex items-center gap-2 text-slate-400 mt-2">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold tabular-nums">
              {event.from_time} - {event.to_time}
            </span>
          </div>
        </div>
      </div>

      {/* Separator line on desktop */}
      <div className="hidden md:block w-px h-16 bg-slate-100" />

      {/* Content Column */}
      <div className="flex-1 text-center md:text-left relative z-10">
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
          {event.title}
        </h3>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <span className="inline-flex items-center px-3 py-1 bg-slate-50 text-slate-500 text-xs font-bold rounded-full border border-slate-100 uppercase tracking-tighter">
            {event.sub_title}
          </span>
          {event.location && (
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold">{event.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Action Column */}
      <div className="w-full md:w-auto relative z-10">
        <Button
          variant="outline"
          className="w-full md:w-auto border-primary/10 text-primary hover:bg-primary hover:border-primary hover:text-white rounded-2xl py-7 px-10 transition-all duration-300 font-black text-sm uppercase tracking-widest shadow-sm hover:shadow-primary/20"
          asChild
        >
          <Link to={`/events/$id`} params={{ id: String(event.id) }}>
            View more
          </Link>
        </Button>
      </div>
    </div>
  )
}
