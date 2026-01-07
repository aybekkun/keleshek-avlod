import { ShareActions } from '@/components/shared/share-actions'
import { Container, Skeleton } from '@/components/ui'
import SEO from '@/lib/seo/SEO'
import { formatDate, formatTime } from '@/lib/utils'
import { type IEvent } from '@/services/events'
import { Link } from '@tanstack/react-router'
import parse from 'html-react-parser'
import { Calendar, ChevronLeft, Clock, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface EventDetailProps {
  data?: IEvent
}

export const EventDetail = ({ data }: EventDetailProps) => {
  const { t } = useTranslation()

  return (
    <article className="bg-white pb-20 pt-10">
      <SEO
        title={data?.title || ''}
        description={data?.content || data?.title}
      />
      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-2 min-w-0">
            <Link
              to="/events"
              className="inline-flex items-center text-slate-500 hover:text-primary transition-colors text-sm font-medium mb-8 group"
            >
              <ChevronLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" />
              {t('events.back')}
            </Link>
            <div className="space-y-6 mb-10">
              <div className="flex flex-wrap gap-4 items-center">
                <span className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/5 uppercase tracking-widest">
                  {data?.sub_title}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                {data?.title}
              </h1>
            </div>

            <div className="max-w-none prose prose-lg prose-slate">
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                {parse(data?.content || '')}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-slate-100">
              <ShareActions title={data?.title || ''} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex-1 lg:max-w-100 space-y-8">
            <div className="bg-slate-50/50 rounded-4xl p-8 space-y-8 border border-slate-100 sticky top-24">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {t('events.details')}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {t('events.date')}
                      </p>
                      <p className="font-bold text-slate-900">
                        {formatDate(data?.date || '')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {t('events.time')}
                      </p>
                      <p className="font-bold text-slate-900">
                        {formatTime(data?.from_time || '')} -{' '}
                        {formatTime(data?.to_time || '')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {t('events.location')}
                      </p>
                      <p className="font-bold text-slate-900">
                        {data?.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  )
}

export const EventDetailSkeleton = () => {
  return (
    <article className="bg-white pb-20 pt-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Skeleton */}
          <div className="flex-2 min-w-0">
            <div className="mb-8">
              <Skeleton className="h-5 w-24" />
            </div>
            <div className="space-y-6 mb-10">
              <Skeleton className="h-6 w-32 rounded-full" />
              <div className="space-y-4">
                <Skeleton className="h-12 w-full md:w-3/4" />
                <Skeleton className="h-12 w-1/2" />
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <aside className="flex-1 lg:max-w-100">
            <div className="bg-slate-50/50 rounded-4xl p-8 space-y-8 border border-slate-100 sticky top-24">
              <div className="space-y-6">
                <Skeleton className="h-7 w-40" />
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100"
                    >
                      <Skeleton className="w-12 h-12 rounded-xl" />
                      <div className="space-y-2">
                        <Skeleton className="h-3 w-16" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  )
}
