import { ShareActions } from '@/components/shared/share-actions'
import { Container, Skeleton } from '@/components/ui'
import SEO from '@/lib/seo/SEO'
import { formatDate } from '@/lib/utils'
import type { INews } from '@/services/news'
import { Link } from '@tanstack/react-router'
import parser from 'html-react-parser'
import { ArrowRight, Calendar, ChevronLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface NewsDetailProps {
  data?: INews
}

export const NewsDetail = ({ data }: NewsDetailProps) => {
  const { t } = useTranslation()

  return (
    <article className="bg-white pb-20 pt-10">
      <SEO
        title={data?.title || ''}
        description={data?.content || data?.title}
      />
      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="flex-[2] min-w-0">
            <Link
              to="/news"
              className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium mb-8 group"
            >
              <ChevronLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" />
              {t('news.back')}
            </Link>
            <div className="relative aspect-video w-full overflow-hidden rounded-[40px] shadow-2xl shadow-blue-900/10 mb-12">
              <img
                src={data?.image}
                alt={data?.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex flex-wrap gap-4 items-center">
                <span className="bg-blue-600/10 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                  {data?.category?.name}
                </span>
                <div className="flex items-center text-slate-400 text-sm font-medium">
                  <Calendar className="w-4 h-4 mr-2 opacity-50" />
                  {formatDate(data?.created_at || '')}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                {data?.title}
              </h1>
            </div>

            <div className="max-w-none prose prose-lg prose-slate">
              {/*    <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-10 border-l-4 border-blue-600 pl-6 py-2 italic font-serif">
                {news.excerpt}
              </p> */}

              <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
                {parser(data?.content || '')}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-slate-100">
              <ShareActions title={data?.title || ''} />
            </div>

            {/* Tags */}
          </div>

          {/* Sidebar Area */}
          <aside className="flex-1 lg:max-w-[400px] space-y-12">
            <div className="bg-slate-50/50 rounded-3xl p-8 sticky top-24">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {t('news.related')}
                </h3>
                <Link
                  to="/news"
                  className="text-blue-600 hover:opacity-70 transition-opacity"
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="space-y-8">
                {data?.related_news?.map((item) => (
                  <Link
                    key={item.id}
                    to="/news/$id"
                    params={{ id: String(item.id) }}
                    className="group flex gap-4 items-start"
                  >
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-95">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">
                        {item.category?.name}
                      </span>
                      <h4 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <div className="flex items-center text-[10px] text-slate-400 font-medium">
                        <Calendar className="w-3 h-3 mr-1 opacity-50" />
                        {formatDate(item.created_at)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                to="/news"
                className="mt-10 w-full inline-flex items-center justify-center py-4 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-white hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm"
              >
                {t('news.all')}
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  )
}

export const NewsDetailSkeleton = () => {
  return (
    <article className="bg-white pb-20 pt-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Skeleton */}
          <div className="flex-[2] min-w-0">
            <div className="mb-8">
              <Skeleton className="h-5 w-24" />
            </div>

            <Skeleton className="relative aspect-video w-full rounded-[40px] mb-12" />

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-4 w-32" />
              </div>

              <div className="space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-3/4" />
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
          <aside className="flex-1 lg:max-w-[400px] space-y-12">
            <div className="bg-slate-50/50 rounded-3xl p-8 sticky top-24">
              <div className="flex items-center justify-between mb-8">
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-5 w-5 rounded-full" />
              </div>

              <div className="space-y-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <Skeleton className="w-24 h-24 rounded-2xl" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-3 w-16" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  )
}
